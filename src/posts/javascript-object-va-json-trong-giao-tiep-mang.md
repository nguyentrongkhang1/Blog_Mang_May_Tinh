# JavaScript Object và JSON trong giao tiếp mạng

Khi tôi học về lập trình mạng với JavaScript, một trong những điều quan trọng nhất tôi cần hiểu rõ là mối quan hệ giữa JavaScript Object và JSON. Mặc dù chúng có vẻ giống nhau, nhưng có những khác biệt quan trọng mà mọi developer cần nắm vững. Trong bài viết này, tôi sẽ chia sẻ những hiểu biết của mình về JavaScript Object và JSON, cũng như cách chúng được sử dụng trong giao tiếp mạng.

## JavaScript Object là gì?

JavaScript Object là một cấu trúc dữ liệu trong JavaScript, cho phép lưu trữ dữ liệu dưới dạng key-value pairs. Object là một trong những kiểu dữ liệu cơ bản và quan trọng nhất trong JavaScript.

### Tạo JavaScript Object

```javascript
// Object literal
const user = {
    id: 1,
    name: "Nguyễn Trọng Khang",
    email: "khang@example.com",
    isActive: true
};

// Sử dụng constructor
const user2 = new Object();
user2.id = 2;
user2.name = "John Doe";

// Sử dụng Object.create()
const user3 = Object.create(null);
user3.id = 3;
```

## JSON là gì?

JSON (JavaScript Object Notation) là một định dạng text để trao đổi dữ liệu, được dựa trên cú pháp của JavaScript Object, nhưng có một số hạn chế:

1. **Chỉ hỗ trợ string keys**: Tất cả keys phải là strings
2. **Không có functions**: Không thể lưu functions trong JSON
3. **Không có undefined**: undefined sẽ bị bỏ qua hoặc chuyển thành null
4. **Không có comments**: JSON không hỗ trợ comments

## Chuyển đổi giữa Object và JSON

### JSON.stringify() - Object → JSON

```javascript
const user = {
    id: 1,
    name: "Nguyễn Trọng Khang",
    email: "khang@example.com",
    courses: ["Java", "JavaScript"],
    getInfo: function() {
        return `${this.name} - ${this.email}`;
    },
    metadata: undefined
};

// Chuyển object thành JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);
// {"id":1,"name":"Nguyễn Trọng Khang","email":"khang@example.com","courses":["Java","JavaScript"]}
// Lưu ý: function và undefined bị loại bỏ

// Với tham số thứ 2 (replacer)
const jsonWithSelectedFields = JSON.stringify(user, ['id', 'name', 'email']);
console.log(jsonWithSelectedFields);
// {"id":1,"name":"Nguyễn Trọng Khang","email":"khang@example.com"}

// Với tham số thứ 3 (indent)
const formattedJson = JSON.stringify(user, null, 2);
console.log(formattedJson);
// JSON được format đẹp với indent 2 spaces
```

### JSON.parse() - JSON → Object

```javascript
const jsonString = '{"id":1,"name":"Nguyễn Trọng Khang","email":"khang@example.com"}';

// Chuyển JSON string thành object
const user = JSON.parse(jsonString);
console.log(user.name); // "Nguyễn Trọng Khang"
console.log(typeof user); // "object"

// Với reviver function
const userWithReviver = JSON.parse(jsonString, (key, value) => {
    if (key === 'id') {
        return value * 2; // Nhân đôi id
    }
    return value;
});
console.log(userWithReviver.id); // 2
```

## Gửi Object qua mạng

Khi gửi dữ liệu qua mạng, chúng ta cần chuyển object thành JSON string:

### Sử dụng Fetch API

```javascript
const user = {
    id: 1,
    name: "Nguyễn Trọng Khang",
    email: "khang@example.com"
};

// Gửi POST request
async function createUser(userData) {
    const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData) // Chuyển object thành JSON
    });
    
    const result = await response.json(); // Parse JSON response thành object
    return result;
}

createUser(user);
```

### Sử dụng XMLHttpRequest

```javascript
function sendUserData(user) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/users', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log('User created:', response);
        }
    };
    
    xhr.send(JSON.stringify(user)); // Gửi JSON string
}
```

## Nhận và xử lý JSON từ Server

```javascript
async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:8080/api/users');
        const users = await response.json(); // Tự động parse JSON thành object
        
        // Xử lý array of objects
        users.forEach(user => {
            console.log(`${user.name} - ${user.email}`);
        });
        
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
```

## Xử lý nested objects và arrays

```javascript
// Object phức tạp với nested structure
const student = {
    id: 1,
    name: "Nguyễn Trọng Khang",
    courses: [
        {
            name: "Java",
            credits: 3,
            instructor: {
                name: "Dr. Smith",
                email: "smith@university.edu"
            }
        },
        {
            name: "JavaScript",
            credits: 3,
            instructor: {
                name: "Dr. Johnson",
                email: "johnson@university.edu"
            }
        }
    ]
};

// Chuyển thành JSON
const json = JSON.stringify(student, null, 2);

// Parse lại thành object
const parsedStudent = JSON.parse(json);

// Truy cập nested data
console.log(parsedStudent.courses[0].instructor.name); // "Dr. Smith"
```

## Xử lý lỗi khi parse JSON

```javascript
function safeParseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Invalid JSON:', error);
        return null;
    }
}

// Sử dụng
const validJson = '{"name":"Khang"}';
const invalidJson = '{name:"Khang"}'; // Thiếu quotes

const obj1 = safeParseJSON(validJson); // {name: "Khang"}
const obj2 = safeParseJSON(invalidJson); // null
```

## Best Practices

1. **Luôn validate JSON**: Kiểm tra tính hợp lệ trước khi parse
2. **Sử dụng try-catch**: Bắt lỗi khi parse JSON
3. **Kiểm tra response.ok**: Đảm bảo response thành công trước khi parse
4. **Xử lý async đúng cách**: Sử dụng async/await hoặc promises

### Ví dụ hoàn chỉnh

```javascript
async function fetchUserData(userId) {
    try {
        const response = await fetch(`http://localhost:8080/api/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Response is not JSON");
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}
```

## So sánh Object và JSON

| Đặc điểm | JavaScript Object | JSON |
|----------|------------------|------|
| Functions | Có thể chứa | Không thể |
| Undefined | Được hỗ trợ | Không được hỗ trợ |
| Comments | Có thể có | Không thể |
| Keys | Có thể không có quotes | Phải có quotes |
| Sử dụng | Trong code JavaScript | Trao đổi dữ liệu qua mạng |

## Kết luận

Hiểu rõ sự khác biệt và mối quan hệ giữa JavaScript Object và JSON là rất quan trọng trong lập trình mạng. Object được sử dụng trong code JavaScript, còn JSON được sử dụng để trao đổi dữ liệu qua mạng. Việc nắm vững các phương thức `JSON.stringify()` và `JSON.parse()` giúp tôi xây dựng được các ứng dụng có thể giao tiếp hiệu quả với server.

Trong bài viết tiếp theo, tôi sẽ tìm hiểu về cách xử lý dữ liệu mạng bằng Array và Object trong JavaScript.


