# Xử lý dữ liệu mạng bằng Array và Object trong JavaScript

Khi làm việc với dữ liệu từ mạng, tôi thường xuyên phải xử lý các cấu trúc dữ liệu phức tạp. Array và Object là hai cấu trúc dữ liệu cơ bản nhất trong JavaScript, và việc nắm vững cách sử dụng chúng để xử lý dữ liệu mạng là kỹ năng thiết yếu. Trong bài viết này, tôi sẽ chia sẻ các kỹ thuật xử lý dữ liệu mạng sử dụng Array và Object trong JavaScript.

## Array trong xử lý dữ liệu mạng

Array là cấu trúc dữ liệu được sử dụng rộng rãi để lưu trữ danh sách các phần tử. Khi làm việc với APIs, chúng ta thường nhận được dữ liệu dưới dạng array.

### Nhận và xử lý Array từ API

```javascript
// Giả sử API trả về array of users
async function fetchUsers() {
    const response = await fetch('http://localhost:8080/api/users');
    const users = await response.json(); // Array of user objects
    
    // Xử lý array
    users.forEach(user => {
        console.log(`${user.name} - ${user.email}`);
    });
    
    return users;
}
```

### Các phương thức Array hữu ích

#### map() - Chuyển đổi dữ liệu

```javascript
async function getUserNames() {
    const response = await fetch('http://localhost:8080/api/users');
    const users = await response.json();
    
    // Chuyển array of users thành array of names
    const names = users.map(user => user.name);
    return names;
}

// Tạo HTML elements từ data
async function renderUsers() {
    const users = await fetchUsers();
    const userCards = users.map(user => `
        <div class="user-card">
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        </div>
    `).join('');
    
    document.getElementById('users-container').innerHTML = userCards;
}
```

#### filter() - Lọc dữ liệu

```javascript
async function getActiveUsers() {
    const response = await fetch('http://localhost:8080/api/users');
    const users = await response.json();
    
    // Lọc chỉ lấy users đang active
    const activeUsers = users.filter(user => user.isActive === true);
    return activeUsers;
}

// Lọc users theo điều kiện phức tạp
async function getUsersByCourse(courseName) {
    const users = await fetchUsers();
    return users.filter(user => 
        user.courses && user.courses.includes(courseName)
    );
}
```

#### find() - Tìm phần tử

```javascript
async function findUserById(userId) {
    const response = await fetch('http://localhost:8080/api/users');
    const users = await response.json();
    
    // Tìm user có id khớp
    const user = users.find(user => user.id === userId);
    return user;
}
```

#### reduce() - Tổng hợp dữ liệu

```javascript
async function getTotalCredits() {
    const response = await fetch('http://localhost:8080/api/courses');
    const courses = await response.json();
    
    // Tính tổng credits
    const totalCredits = courses.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);
    
    return totalCredits;
}
```

## Object trong xử lý dữ liệu mạng

Object được sử dụng để lưu trữ dữ liệu có cấu trúc, thường là response từ API hoặc data cần gửi lên server.

### Xử lý Object từ API

```javascript
async function fetchUserProfile(userId) {
    const response = await fetch(`http://localhost:8080/api/users/${userId}`);
    const user = await response.json(); // Object
    
    // Truy cập properties
    console.log(user.name);
    console.log(user.email);
    console.log(user.courses); // Có thể là array
    
    return user;
}
```

### Destructuring Object

```javascript
async function displayUserInfo(userId) {
    const user = await fetchUserProfile(userId);
    
    // Destructuring
    const { name, email, courses } = user;
    
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Courses: ${courses.join(', ')}`);
}

// Destructuring trong function parameters
async function updateUser(userId, { name, email, age }) {
    const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, age })
    });
    
    return response.json();
}
```

### Spread Operator với Object

```javascript
async function updateUserPartial(userId, updates) {
    // Lấy user hiện tại
    const currentUser = await fetchUserProfile(userId);
    
    // Merge với updates mới
    const updatedUser = {
        ...currentUser,
        ...updates
    };
    
    // Gửi lên server
    const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser)
    });
    
    return response.json();
}
```

## Xử lý nested structures

Dữ liệu từ mạng thường có cấu trúc lồng nhau (nested), kết hợp Array và Object:

```javascript
// Dữ liệu từ API
const apiResponse = {
    status: "success",
    data: {
        users: [
            {
                id: 1,
                name: "Nguyễn Trọng Khang",
                courses: [
                    { name: "Java", grade: "A" },
                    { name: "JavaScript", grade: "B" }
                ]
            },
            {
                id: 2,
                name: "John Doe",
                courses: [
                    { name: "Python", grade: "A" }
                ]
            }
        ],
        total: 2
    }
};

// Xử lý nested data
function processNestedData(response) {
    // Lấy users array
    const users = response.data.users;
    
    // Lặp qua từng user
    users.forEach(user => {
        console.log(`User: ${user.name}`);
        
        // Lặp qua courses của user
        user.courses.forEach(course => {
            console.log(`  - ${course.name}: ${course.grade}`);
        });
    });
    
    // Tìm tất cả courses
    const allCourses = users.flatMap(user => user.courses);
    console.log('All courses:', allCourses);
    
    // Tính điểm trung bình của user đầu tiên
    const firstUser = users[0];
    const avgGrade = firstUser.courses.reduce((sum, course) => {
        const gradeValue = course.grade === 'A' ? 4 : course.grade === 'B' ? 3 : 2;
        return sum + gradeValue;
    }, 0) / firstUser.courses.length;
    
    console.log(`Average grade: ${avgGrade}`);
}
```

## Xử lý Array of Objects

```javascript
async function processUsersData() {
    const response = await fetch('http://localhost:8080/api/users');
    const users = await response.json(); // Array of objects
    
    // Nhóm users theo department
    const usersByDept = users.reduce((groups, user) => {
        const dept = user.department || 'Unknown';
        if (!groups[dept]) {
            groups[dept] = [];
        }
        groups[dept].push(user);
        return groups;
    }, {});
    
    console.log('Users by department:', usersByDept);
    
    // Sắp xếp users theo name
    const sortedUsers = users.sort((a, b) => 
        a.name.localeCompare(b.name)
    );
    
    // Lấy top 5 users có điểm cao nhất
    const topUsers = users
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
    
    return { usersByDept, sortedUsers, topUsers };
}
```

## Xử lý dữ liệu phức tạp từ API

```javascript
async function analyzeNetworkData() {
    const response = await fetch('http://localhost:8080/api/network-stats');
    const data = await response.json();
    
    // data có cấu trúc:
    // {
    //   devices: [{id, name, status, connections: [...]}],
    //   totalTraffic: {...},
    //   timestamp: "..."
    // }
    
    const { devices, totalTraffic } = data;
    
    // Đếm devices theo status
    const statusCount = devices.reduce((count, device) => {
        count[device.status] = (count[device.status] || 0) + 1;
        return count;
    }, {});
    
    // Tìm device có nhiều connections nhất
    const deviceWithMostConnections = devices.reduce((max, device) => {
        return device.connections.length > max.connections.length 
            ? device 
            : max;
    }, devices[0]);
    
    // Tính tổng connections
    const totalConnections = devices.reduce((sum, device) => {
        return sum + device.connections.length;
    }, 0);
    
    return {
        statusCount,
        deviceWithMostConnections,
        totalConnections,
        totalTraffic
    };
}
```

## Error handling với Array và Object

```javascript
async function safeFetchUsers() {
    try {
        const response = await fetch('http://localhost:8080/api/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Kiểm tra data có phải array không
        if (!Array.isArray(data)) {
            throw new Error('Expected array but got object');
        }
        
        // Kiểm tra mỗi user có đủ fields không
        const validUsers = data.filter(user => {
            return user && 
                   typeof user.id === 'number' &&
                   typeof user.name === 'string' &&
                   typeof user.email === 'string';
        });
        
        if (validUsers.length !== data.length) {
            console.warn('Some users have invalid data');
        }
        
        return validUsers;
    } catch (error) {
        console.error('Error fetching users:', error);
        return []; // Trả về empty array thay vì throw error
    }
}
```

## Best Practices

1. **Luôn kiểm tra kiểu dữ liệu**: Sử dụng `Array.isArray()` và `typeof`
2. **Xử lý null/undefined**: Sử dụng optional chaining `?.` và nullish coalescing `??`
3. **Immutable operations**: Sử dụng `map`, `filter` thay vì mutate trực tiếp
4. **Error handling**: Luôn có try-catch khi xử lý dữ liệu từ mạng

### Ví dụ với Optional Chaining

```javascript
async function safeAccessNestedData() {
    const response = await fetch('http://localhost:8080/api/data');
    const data = await response.json();
    
    // Safe access với optional chaining
    const userName = data?.user?.profile?.name ?? 'Unknown';
    const firstCourse = data?.user?.courses?.[0]?.name ?? 'No courses';
    
    // Safe array operations
    const courseNames = data?.user?.courses?.map(c => c.name) ?? [];
    
    return { userName, firstCourse, courseNames };
}
```

## Kết luận

Array và Object là những công cụ mạnh mẽ để xử lý dữ liệu mạng trong JavaScript. Việc nắm vững các phương thức như `map`, `filter`, `reduce`, cùng với destructuring và spread operator giúp tôi xử lý dữ liệu từ API một cách hiệu quả và dễ đọc. Khi làm việc với dữ liệu mạng, tôi luôn nhớ kiểm tra kiểu dữ liệu và xử lý lỗi cẩn thận để đảm bảo ứng dụng hoạt động ổn định.

Trong bài viết tiếp theo, tôi sẽ tìm hiểu về Asynchronous JavaScript và cách nó được sử dụng trong mô hình Client-Server.


