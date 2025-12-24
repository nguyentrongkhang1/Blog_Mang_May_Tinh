# JSON và truyền dữ liệu giữa Client và Server

Khi tôi bắt đầu học về lập trình mạng, một trong những khái niệm quan trọng nhất mà tôi cần nắm vững là JSON (JavaScript Object Notation). JSON đã trở thành định dạng dữ liệu tiêu chuẩn để trao đổi thông tin giữa client và server trong hầu hết các ứng dụng web hiện đại. Trong bài viết này, tôi sẽ chia sẻ những hiểu biết của mình về JSON và cách sử dụng nó để truyền dữ liệu giữa client và server.

## JSON là gì?

JSON là một định dạng dữ liệu nhẹ, dễ đọc và dễ viết, được sử dụng rộng rãi để trao đổi dữ liệu giữa các ứng dụng. JSON được xây dựng dựa trên cấu trúc object của JavaScript, nhưng hiện tại được hỗ trợ bởi hầu hết các ngôn ngữ lập trình.

### Đặc điểm của JSON

1. **Nhẹ**: JSON có cú pháp đơn giản, không có overhead như XML
2. **Dễ đọc**: Cấu trúc rõ ràng, dễ hiểu cho cả người và máy
3. **Hỗ trợ đa ngôn ngữ**: Hầu hết các ngôn ngữ đều có thư viện xử lý JSON
4. **Phổ biến**: Được sử dụng rộng rãi trong REST APIs, web services

## Cấu trúc JSON

JSON hỗ trợ các kiểu dữ liệu cơ bản:

- **String**: `"Hello World"`
- **Number**: `123`, `45.67`
- **Boolean**: `true`, `false`
- **Null**: `null`
- **Object**: `{"key": "value"}`
- **Array**: `[1, 2, 3]`

### Ví dụ JSON Object

```json
{
  "id": 1,
  "name": "Nguyễn Trọng Khang",
  "email": "khang@example.com",
  "age": 20,
  "isStudent": true,
  "courses": ["Java", "JavaScript", "Networking"],
  "address": {
    "city": "Ho Chi Minh",
    "country": "Vietnam"
  }
}
```

## Xử lý JSON trong Java

Trong Java, chúng ta sử dụng các thư viện như Jackson hoặc Gson để xử lý JSON:

### Sử dụng Jackson (Spring Boot mặc định)

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;

public class JSONExample {
    public static void main(String[] args) {
        ObjectMapper mapper = new ObjectMapper();
        
        // Tạo object
        User user = new User();
        user.setId(1);
        user.setName("Nguyễn Trọng Khang");
        user.setEmail("khang@example.com");
        
        try {
            // Chuyển object thành JSON string
            String json = mapper.writeValueAsString(user);
            System.out.println("JSON: " + json);
            
            // Chuyển JSON string thành object
            User parsedUser = mapper.readValue(json, User.class);
            System.out.println("User: " + parsedUser.getName());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}

class User {
    private int id;
    private String name;
    private String email;
    
    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```

### REST API với JSON trong Spring Boot

```java
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        // Spring Boot tự động chuyển JSON request body thành User object
        System.out.println("Nhận user: " + user.getName());
        
        // Xử lý logic tạo user
        User createdUser = userService.createUser(user);
        
        // Spring Boot tự động chuyển User object thành JSON response
        return ResponseEntity.ok(createdUser);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
}
```

## Xử lý JSON trong JavaScript

Trong JavaScript, JSON được hỗ trợ native:

### Parse và Stringify

```javascript
// JSON string
const jsonString = '{"name":"Nguyễn Trọng Khang","age":20}';

// Chuyển JSON string thành object
const obj = JSON.parse(jsonString);
console.log(obj.name); // "Nguyễn Trọng Khang"

// Chuyển object thành JSON string
const user = {
    name: "Nguyễn Trọng Khang",
    age: 20,
    courses: ["Java", "JavaScript"]
};
const json = JSON.stringify(user);
console.log(json); // '{"name":"Nguyễn Trọng Khang","age":20,"courses":["Java","JavaScript"]}'
```

### Gửi JSON từ Client đến Server

```javascript
// Sử dụng Fetch API
async function createUser(userData) {
    try {
        const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        const user = await response.json();
        console.log('User created:', user);
        return user;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Sử dụng
createUser({
    name: "Nguyễn Trọng Khang",
    email: "khang@example.com"
});
```

### Nhận JSON từ Server

```javascript
async function getUser(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/users/${id}`);
        const user = await response.json();
        console.log('User:', user);
        return user;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## Xử lý JSON phức tạp

### Nested Objects và Arrays

```java
// Java
public class Course {
    private String name;
    private int credits;
    // getters, setters
}

public class Student {
    private String name;
    private List<Course> courses;
    private Map<String, String> metadata;
    // getters, setters
}

// JSON tương ứng
{
  "name": "Nguyễn Trọng Khang",
  "courses": [
    {"name": "Java", "credits": 3},
    {"name": "JavaScript", "credits": 3}
  ],
  "metadata": {
    "department": "Software Engineering",
    "year": "2024"
  }
}
```

### Xử lý trong JavaScript

```javascript
const student = {
    name: "Nguyễn Trọng Khang",
    courses: [
        {name: "Java", credits: 3},
        {name: "JavaScript", credits: 3}
    ],
    metadata: {
        department: "Software Engineering",
        year: "2024"
    }
};

// Truy cập nested data
console.log(student.courses[0].name); // "Java"
console.log(student.metadata.department); // "Software Engineering"
```

## Lợi ích của JSON trong lập trình mạng

1. **Tương thích tốt**: Dễ dàng chuyển đổi giữa các ngôn ngữ
2. **Hiệu suất cao**: Nhẹ hơn XML, parse nhanh
3. **Dễ debug**: Có thể đọc trực tiếp mà không cần tool đặc biệt
4. **Hỗ trợ tốt**: Được hỗ trợ native trong JavaScript và nhiều ngôn ngữ khác

## Kết luận

JSON đã trở thành tiêu chuẩn de facto cho việc trao đổi dữ liệu trong các ứng dụng web hiện đại. Hiểu rõ về JSON và cách sử dụng nó trong cả Java và JavaScript giúp tôi xây dựng được các ứng dụng có thể giao tiếp hiệu quả giữa client và server. Việc nắm vững JSON là nền tảng quan trọng để phát triển các REST APIs và ứng dụng web hiện đại.

Trong bài viết tiếp theo, tôi sẽ tìm hiểu sâu hơn về mối quan hệ giữa JavaScript Object và JSON trong giao tiếp mạng.


