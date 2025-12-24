# Asynchronous JavaScript trong mô hình Client–Server

Khi tôi bắt đầu học về lập trình mạng với JavaScript, một trong những khái niệm quan trọng nhất mà tôi cần nắm vững là lập trình bất đồng bộ (Asynchronous Programming). Trong mô hình Client-Server, hầu hết các thao tác như gửi request, nhận response đều là bất đồng bộ. Hiểu rõ về asynchronous JavaScript giúp tôi xây dựng được các ứng dụng mạng hiệu quả và responsive. Trong bài viết này, tôi sẽ chia sẻ những hiểu biết của mình về asynchronous JavaScript trong mô hình Client-Server.

## Tại sao cần Asynchronous?

Trong mô hình Client-Server, các thao tác mạng như gửi HTTP request, nhận response thường mất thời gian. Nếu sử dụng code đồng bộ (synchronous), trình duyệt sẽ bị "đóng băng" trong khi chờ response, khiến người dùng không thể tương tác với trang web.

### Vấn đề với Synchronous Code

```javascript
// Code đồng bộ - KHÔNG NÊN DÙNG
function fetchUserData(userId) {
    const response = fetch('http://localhost:8080/api/users/' + userId);
    const user = response.json(); // Sẽ bị lỗi vì fetch là async
    return user;
}
```

## Callbacks - Cách tiếp cận đầu tiên

Callback là function được truyền vào như một tham số và được gọi sau khi một thao tác hoàn thành.

### Callback với XMLHttpRequest

```javascript
function fetchUserWithCallback(userId, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8080/api/users/${userId}`, true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const user = JSON.parse(xhr.responseText);
            callback(null, user); // Success
        } else {
            callback(new Error('Failed to fetch user'), null); // Error
        }
    };
    
    xhr.onerror = function() {
        callback(new Error('Network error'), null);
    };
    
    xhr.send();
}

// Sử dụng
fetchUserWithCallback(1, (error, user) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('User:', user);
    }
});
```

### Vấn đề Callback Hell

Khi có nhiều async operations lồng nhau, code trở nên khó đọc:

```javascript
// Callback Hell - KHÓ ĐỌC VÀ BẢO TRÌ
fetchUserWithCallback(1, (error, user) => {
    if (error) {
        console.error(error);
    } else {
        fetchUserCourses(user.id, (error, courses) => {
            if (error) {
                console.error(error);
            } else {
                fetchCourseDetails(courses[0].id, (error, details) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log('Details:', details);
                    }
                });
            }
        });
    }
});
```

## Promises - Giải pháp tốt hơn

Promise là một object đại diện cho kết quả (thành công hoặc thất bại) của một thao tác bất đồng bộ.

### Tạo và sử dụng Promise

```javascript
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/api/users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(user => resolve(user))
            .catch(error => reject(error));
    });
}

// Sử dụng Promise
fetchUser(1)
    .then(user => {
        console.log('User:', user);
        return fetchUserCourses(user.id);
    })
    .then(courses => {
        console.log('Courses:', courses);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### Fetch API với Promises

Fetch API trả về Promise, rất tiện lợi:

```javascript
// Fetch API tự động trả về Promise
fetch('http://localhost:8080/api/users/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(user => {
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## Async/Await - Cú pháp hiện đại

Async/await là cú pháp mới, giúp viết code bất đồng bộ trông giống code đồng bộ, dễ đọc và dễ hiểu hơn.

### Cú pháp cơ bản

```javascript
async function fetchUser(userId) {
    try {
        const response = await fetch(`http://localhost:8080/api/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

// Sử dụng
async function displayUser(userId) {
    try {
        const user = await fetchUser(userId);
        console.log('User:', user);
    } catch (error) {
        console.error('Failed to display user:', error);
    }
}
```

### Xử lý nhiều requests

```javascript
// Sequential - Tuần tự
async function fetchUserDataSequential(userId) {
    const user = await fetchUser(userId);
    const courses = await fetchUserCourses(user.id);
    const grades = await fetchUserGrades(user.id);
    
    return { user, courses, grades };
}

// Parallel - Song song (nhanh hơn)
async function fetchUserDataParallel(userId) {
    const [user, courses, grades] = await Promise.all([
        fetchUser(userId),
        fetchUserCourses(userId),
        fetchUserGrades(userId)
    ]);
    
    return { user, courses, grades };
}
```

## Xử lý lỗi trong Async/Await

```javascript
async function safeFetchUser(userId) {
    try {
        const response = await fetch(`http://localhost:8080/api/users/${userId}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('User not found');
            } else if (response.status === 500) {
                throw new Error('Server error');
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Network error:', error);
        } else {
            console.error('Error:', error);
        }
        return null; // Hoặc throw lại error
    }
}
```

## Gửi POST request với Async/Await

```javascript
async function createUser(userData) {
    try {
        const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const newUser = await response.json();
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Sử dụng
async function handleCreateUser() {
    const userData = {
        name: "Nguyễn Trọng Khang",
        email: "khang@example.com"
    };
    
    try {
        const newUser = await createUser(userData);
        console.log('User created:', newUser);
    } catch (error) {
        console.error('Failed to create user:', error);
    }
}
```

## Xử lý nhiều requests phức tạp

```javascript
async function fetchCompleteUserProfile(userId) {
    try {
        // Fetch user cơ bản
        const user = await fetchUser(userId);
        
        // Fetch các thông tin liên quan song song
        const [courses, grades, activities] = await Promise.all([
            fetchUserCourses(userId),
            fetchUserGrades(userId),
            fetchUserActivities(userId)
        ]);
        
        // Xử lý dữ liệu
        const profile = {
            ...user,
            courses: courses.map(course => ({
                ...course,
                grade: grades.find(g => g.courseId === course.id)?.grade
            })),
            activities: activities
        };
        
        return profile;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
}
```

## Promise.allSettled - Xử lý tất cả kết quả

```javascript
async function fetchMultipleUsers(userIds) {
    const promises = userIds.map(id => fetchUser(id));
    
    // Chờ tất cả promises hoàn thành (thành công hoặc thất bại)
    const results = await Promise.allSettled(promises);
    
    const users = [];
    const errors = [];
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            users.push(result.value);
        } else {
            errors.push({
                userId: userIds[index],
                error: result.reason
            });
        }
    });
    
    return { users, errors };
}
```

## Timeout cho requests

```javascript
function fetchWithTimeout(url, timeout = 5000) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timeout')), timeout)
        )
    ]);
}

// Sử dụng
async function safeFetchWithTimeout(url) {
    try {
        const response = await fetchWithTimeout(url, 3000);
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.message === 'Request timeout') {
            console.error('Request took too long');
        } else {
            console.error('Error:', error);
        }
        return null;
    }
}
```

## Best Practices

1. **Luôn sử dụng try-catch**: Bắt lỗi trong async functions
2. **Kiểm tra response.ok**: Đảm bảo response thành công
3. **Sử dụng Promise.all**: Khi cần fetch nhiều data song song
4. **Xử lý timeout**: Tránh requests treo quá lâu
5. **Error handling rõ ràng**: Cung cấp thông báo lỗi có ý nghĩa

## Kết luận

Asynchronous JavaScript là nền tảng của lập trình mạng trong JavaScript. Hiểu rõ về callbacks, promises, và async/await giúp tôi xây dựng được các ứng dụng có thể giao tiếp hiệu quả với server mà không làm đóng băng giao diện người dùng. Async/await là cú pháp hiện đại và dễ sử dụng nhất, giúp code trở nên dễ đọc và dễ bảo trì hơn rất nhiều.

Trong bài viết tiếp theo, tôi sẽ tìm hiểu về Regular Expression và cách sử dụng nó để kiểm tra dữ liệu mạng.


