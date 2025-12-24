# Regular Expression trong kiểm tra dữ liệu mạng

Khi làm việc với dữ liệu từ mạng, một trong những thách thức lớn nhất là đảm bảo dữ liệu nhận được hợp lệ và an toàn. Regular Expression (Regex) là công cụ mạnh mẽ giúp tôi kiểm tra, validate và xử lý dữ liệu mạng một cách hiệu quả. Trong bài viết này, tôi sẽ chia sẻ cách sử dụng Regular Expression để kiểm tra dữ liệu mạng trong JavaScript và Java.

## Regular Expression là gì?

Regular Expression là một chuỗi ký tự đặc biệt mô tả một pattern (mẫu) để tìm kiếm, so khớp hoặc thay thế text. Regex được sử dụng rộng rãi để validate dữ liệu đầu vào, tìm kiếm patterns trong text, và xử lý dữ liệu.

## Kiểm tra Email

Email là một trong những dữ liệu phổ biến nhất cần validate khi làm việc với forms và APIs.

### JavaScript

```javascript
function validateEmail(email) {
    // Pattern cơ bản cho email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sử dụng
console.log(validateEmail("khang@example.com")); // true
console.log(validateEmail("invalid-email")); // false

// Pattern phức tạp hơn
function validateEmailStrict(email) {
    const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return strictEmailRegex.test(email);
}

// Validate email từ API response
async function processUserData(userData) {
    if (!validateEmail(userData.email)) {
        throw new Error('Invalid email format');
    }
    // Xử lý user data
}
```

### Java

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class EmailValidator {
    private static final String EMAIL_PATTERN = 
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
    
    private static final Pattern pattern = Pattern.compile(EMAIL_PATTERN);
    
    public static boolean validate(String email) {
        if (email == null) {
            return false;
        }
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }
}
```

## Kiểm tra URL

Khi làm việc với APIs, chúng ta thường cần validate URLs.

### JavaScript

```javascript
function validateURL(url) {
    // Pattern cho HTTP/HTTPS URL
    const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    return urlRegex.test(url);
}

// Validate API endpoint
function validateAPIEndpoint(endpoint) {
    const endpointRegex = /^\/api\/[a-zA-Z0-9\/\-_]+$/;
    return endpointRegex.test(endpoint);
}

// Sử dụng
async function fetchFromAPI(endpoint) {
    if (!validateAPIEndpoint(endpoint)) {
        throw new Error('Invalid API endpoint format');
    }
    
    const response = await fetch(`http://localhost:8080${endpoint}`);
    return response.json();
}
```

## Kiểm tra IP Address

Khi làm việc với network programming, việc validate IP address là rất quan trọng.

### JavaScript

```javascript
function validateIPv4(ip) {
    // Pattern cho IPv4
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(ip);
}

function validateIPv6(ip) {
    // Pattern cho IPv6 (đơn giản hóa)
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv6Regex.test(ip);
}

// Validate IP từ request
function validateClientIP(ip) {
    return validateIPv4(ip) || validateIPv6(ip);
}
```

### Java

```java
import java.util.regex.Pattern;

public class IPValidator {
    private static final String IPv4_PATTERN = 
        "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}" +
        "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
    
    private static final Pattern ipv4Pattern = Pattern.compile(IPv4_PATTERN);
    
    public static boolean validateIPv4(String ip) {
        if (ip == null || ip.isEmpty()) {
            return false;
        }
        return ipv4Pattern.matcher(ip).matches();
    }
}
```

## Kiểm tra JSON Format

Khi nhận dữ liệu từ API, chúng ta cần đảm bảo đó là JSON hợp lệ.

### JavaScript

```javascript
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}

// Validate JSON structure
function validateJSONStructure(jsonString, requiredFields) {
    try {
        const data = JSON.parse(jsonString);
        
        // Kiểm tra các fields bắt buộc
        for (const field of requiredFields) {
            if (!(field in data)) {
                throw new Error(`Missing required field: ${field}`);
            }
        }
        
        return true;
    } catch (error) {
        console.error('JSON validation error:', error);
        return false;
    }
}

// Sử dụng
async function processAPIResponse(response) {
    const text = await response.text();
    
    if (!isValidJSON(text)) {
        throw new Error('Invalid JSON response');
    }
    
    const data = JSON.parse(text);
    const requiredFields = ['id', 'name', 'email'];
    
    if (!validateJSONStructure(text, requiredFields)) {
        throw new Error('Missing required fields in response');
    }
    
    return data;
}
```

## Kiểm tra Phone Number

```javascript
function validatePhoneNumber(phone) {
    // Pattern cho số điện thoại Việt Nam
    const vietnamPhoneRegex = /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    return vietnamPhoneRegex.test(phone.replace(/\s/g, ''));
}

// Validate phone từ form data
function validateUserForm(formData) {
    const errors = [];
    
    if (!validateEmail(formData.email)) {
        errors.push('Invalid email format');
    }
    
    if (!validatePhoneNumber(formData.phone)) {
        errors.push('Invalid phone number format');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}
```

## Xử lý và Sanitize dữ liệu

Regex cũng được sử dụng để làm sạch và xử lý dữ liệu:

### JavaScript

```javascript
// Loại bỏ HTML tags
function removeHTMLTags(text) {
    return text.replace(/<[^>]*>/g, '');
}

// Loại bỏ ký tự đặc biệt
function sanitizeInput(input) {
    // Chỉ giữ lại chữ, số, khoảng trắng
    return input.replace(/[^a-zA-Z0-9\s]/g, '');
}

// Extract domain từ URL
function extractDomain(url) {
    const domainRegex = /https?:\/\/(?:www\.)?([^\/]+)/;
    const match = url.match(domainRegex);
    return match ? match[1] : null;
}

// Validate và sanitize user input
function processUserInput(input) {
    // Loại bỏ script tags và các ký tự nguy hiểm
    let sanitized = input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/[<>]/g, '');
    
    return sanitized.trim();
}
```

## Kiểm tra Password Strength

```javascript
function validatePassword(password) {
    const validations = {
        minLength: password.length >= 8,
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /\d/.test(password),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    return {
        isValid: Object.values(validations).every(v => v === true),
        validations: validations
    };
}

// Sử dụng
function checkPasswordStrength(password) {
    const result = validatePassword(password);
    
    if (!result.isValid) {
        const missing = Object.entries(result.validations)
            .filter(([_, valid]) => !valid)
            .map(([key, _]) => key);
        
        console.log('Password requirements not met:', missing);
    }
    
    return result.isValid;
}
```

## Validate API Request Data

```javascript
// Validate request body trước khi gửi
function validateCreateUserRequest(data) {
    const errors = [];
    
    // Validate name
    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    
    // Validate email
    if (!validateEmail(data.email)) {
        errors.push('Invalid email format');
    }
    
    // Validate age
    if (!data.age || typeof data.age !== 'number' || data.age < 18 || data.age > 100) {
        errors.push('Age must be between 18 and 100');
    }
    
    // Validate phone (nếu có)
    if (data.phone && !validatePhoneNumber(data.phone)) {
        errors.push('Invalid phone number format');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Sử dụng trước khi gửi request
async function createUser(userData) {
    const validation = validateCreateUserRequest(userData);
    
    if (!validation.isValid) {
        throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }
    
    const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    
    return response.json();
}
```

## Best Practices

1. **Test regex patterns**: Luôn test regex với nhiều trường hợp khác nhau
2. **Escape special characters**: Cẩn thận với các ký tự đặc biệt
3. **Performance**: Regex phức tạp có thể chậm, cần tối ưu
4. **Readability**: Comment regex phức tạp để dễ hiểu
5. **Security**: Không chỉ dựa vào client-side validation, luôn validate ở server

## Kết luận

Regular Expression là công cụ mạnh mẽ và cần thiết trong việc kiểm tra và validate dữ liệu mạng. Hiểu rõ về regex giúp tôi đảm bảo dữ liệu nhận được từ mạng là hợp lệ, an toàn và đúng định dạng. Tuy nhiên, cần nhớ rằng client-side validation chỉ là lớp bảo vệ đầu tiên, luôn cần validate lại ở server-side để đảm bảo an ninh.

Trong bài viết cuối cùng, tôi sẽ chia sẻ về tư duy thuật toán khi xử lý dữ liệu mạng bằng JavaScript.


