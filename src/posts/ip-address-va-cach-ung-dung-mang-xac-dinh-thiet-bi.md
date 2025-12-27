# IP Address và cách ứng dụng mạng xác định thiết bị

Khi tôi học về lập trình mạng, một trong những khái niệm cơ bản nhất mà tôi cần nắm vững là IP Address (Địa chỉ IP). IP Address giống như địa chỉ nhà của mỗi thiết bị trong mạng Internet, giúp các thiết bị có thể tìm thấy và giao tiếp với nhau. Trong bài viết này, tôi sẽ chia sẻ những hiểu biết của mình về IP Address và cách các ứng dụng mạng sử dụng nó để xác định và giao tiếp với các thiết bị.

## IP Address là gì?

IP Address (Internet Protocol Address) là một địa chỉ số duy nhất được gán cho mỗi thiết bị kết nối với mạng sử dụng giao thức Internet Protocol. IP Address cho phép các thiết bị nhận diện và giao tiếp với nhau trên mạng.

### IPv4 và IPv6

Hiện tại có hai phiên bản IP chính:

1. **IPv4**: Sử dụng 32 bit, được biểu diễn dưới dạng 4 số từ 0-255, ví dụ: `192.168.1.1`
2. **IPv6**: Sử dụng 128 bit, được biểu diễn dưới dạng hexadecimal, ví dụ: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

## Các loại IP Address

### Public IP và Private IP

- **Public IP**: Địa chỉ IP công cộng, có thể truy cập từ Internet
- **Private IP**: Địa chỉ IP nội bộ, chỉ sử dụng trong mạng cục bộ (LAN)

### Static IP và Dynamic IP

- **Static IP**: Địa chỉ IP cố định, không thay đổi
- **Dynamic IP**: Địa chỉ IP được gán tự động và có thể thay đổi

## Lấy IP Address trong Java

Trong Java, chúng ta có thể lấy IP address của máy local hoặc của client kết nối đến server:

### Lấy Local IP Address

```java
import java.net.*;

public class IPAddressExample {
    public static void main(String[] args) {
        try {
            // Lấy hostname của máy local
            InetAddress localhost = InetAddress.getLocalHost();
            System.out.println("Hostname: " + localhost.getHostName());
            System.out.println("IP Address: " + localhost.getHostAddress());
            
            // Lấy tất cả các network interfaces
            java.util.Enumeration<NetworkInterface> interfaces = 
                NetworkInterface.getNetworkInterfaces();
            
            while (interfaces.hasMoreElements()) {
                NetworkInterface networkInterface = interfaces.nextElement();
                System.out.println("\nInterface: " + networkInterface.getName());
                
                java.util.Enumeration<InetAddress> addresses = 
                    networkInterface.getInetAddresses();
                
                while (addresses.hasMoreElements()) {
                    InetAddress address = addresses.nextElement();
                    System.out.println("  IP: " + address.getHostAddress());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### Lấy Client IP trong Server

```java
import java.net.*;
import java.io.*;

public class ServerWithClientIP {
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(8080);
            System.out.println("Server đang chạy trên port 8080...");
            
            while (true) {
                Socket clientSocket = serverSocket.accept();
                
                // Lấy IP address của client
                InetAddress clientAddress = clientSocket.getInetAddress();
                String clientIP = clientAddress.getHostAddress();
                String clientHostname = clientAddress.getHostName();
                
                System.out.println("Client kết nối từ:");
                System.out.println("  IP: " + clientIP);
                System.out.println("  Hostname: " + clientHostname);
                
                // Xử lý request từ client
                handleClient(clientSocket);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    private static void handleClient(Socket clientSocket) {
        // Xử lý logic với client
    }
}
```

## Lấy Client IP trong Spring Boot

Trong ứng dụng web Spring Boot, chúng ta có thể lấy IP address của client thông qua HttpServletRequest:

```java
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;

@RestController
public class IPController {
    
    @GetMapping("/my-ip")
    public String getMyIP(HttpServletRequest request) {
        String clientIP = getClientIP(request);
        return "IP Address của bạn: " + clientIP;
    }
    
    private String getClientIP(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_CLIENT_IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        
        // Nếu có nhiều IP, lấy IP đầu tiên
        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        
        return ip;
    }
}
```

## Kết nối đến Server bằng IP Address

Chúng ta có thể sử dụng IP address để kết nối đến một server cụ thể:

```java
import java.net.*;
import java.io.*;

public class ConnectToServer {
    public static void main(String[] args) {
        String serverIP = "192.168.1.100";
        int serverPort = 8080;
        
        try {
            // Kết nối đến server bằng IP address
            Socket socket = new Socket(serverIP, serverPort);
            System.out.println("Đã kết nối đến server: " + serverIP + ":" + serverPort);
            
            // Gửi dữ liệu
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true
            );
            out.println("Hello from client!");
            
            // Nhận dữ liệu
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );
            String response = in.readLine();
            System.out.println("Nhận từ server: " + response);
            
            socket.close();
        } catch (IOException e) {
            System.err.println("Lỗi kết nối: " + e.getMessage());
        }
    }
}
```

## Ứng dụng thực tế

IP Address được sử dụng trong nhiều tình huống:

1. **Logging và Analytics**: Ghi lại IP của người dùng để phân tích
2. **Security**: Chặn hoặc cho phép truy cập dựa trên IP
3. **Load Balancing**: Phân phối request dựa trên IP
4. **Geolocation**: Xác định vị trí địa lý của người dùng

### Ví dụ: Rate Limiting theo IP

```java
import java.util.concurrent.*;

@RestController
public class RateLimitedController {
    private final ConcurrentHashMap<String, Integer> requestCounts = 
        new ConcurrentHashMap<>();
    
    @GetMapping("/api/data")
    public ResponseEntity<String> getData(HttpServletRequest request) {
        String clientIP = getClientIP(request);
        
        // Kiểm tra số lượng request từ IP này
        int count = requestCounts.getOrDefault(clientIP, 0);
        if (count >= 100) {
            return ResponseEntity.status(429)
                .body("Quá nhiều request từ IP: " + clientIP);
        }
        
        requestCounts.put(clientIP, count + 1);
        return ResponseEntity.ok("Data response");
    }
}
```

## Kết luận

IP Address là một khái niệm cơ bản nhưng vô cùng quan trọng trong lập trình mạng. Hiểu rõ về IP Address giúp tôi xây dựng các ứng dụng mạng hiệu quả hơn, có thể xác định và quản lý các kết nối từ client, đồng thời áp dụng các biện pháp bảo mật và tối ưu hóa phù hợp.

Trong bài viết tiếp theo, tôi sẽ tìm hiểu về JSON - định dạng dữ liệu phổ biến nhất trong giao tiếp giữa client và server.




