# README-vi

# VBot Web Plugin

[English](./README.md) | [Tiếng Việt](./README-vi.md)

## Giới thiệu

VBot Web Plugin được xây dựng bằng HTML, CSS và JavaScript, cung cấp giao diện bàn phím quay số, màn hình cuộc gọi và danh sách lịch sử cuộc gọi.

## Hướng dẫn tích hợp

Thêm đoạn mã sau vào bên dưới thẻ **body** trong file index.html của bạn:

```jsx
<script type="module">
    import {VBotWebCall} from "https://plugin.vbot.vn/v1.0.1/vbot-web-plugin.js";
    const setting = {                
        floatingDialPad: {
            right: 10,
            bottom: 10,
            // Tùy chọn: top, left
        },        
        floatingButton: {
            enable: true,
            right: 10,
            bottom: 200,     
            backgroundColor: '#20C55A',
            width: 60,
            height: 60,
            icon: 'Thẻ HTML svg',
            // Tùy chọn: top, left
        },
        access_token: 'Token của bạn',
    };
   
    VBotWebCall.init(setting);        
</script>
```

## Chi tiết cấu hình

### 1. Cấu hình bàn phím quay số

Cấu hình vị trí bàn phím quay số thông qua thuộc tính `floatingDialPad`:

- `top`: Khoảng cách (px) từ lề trên
- `bottom`: Khoảng cách (px) từ lề dưới
- `right`: Khoảng cách (px) từ lề phải
- `left`: Khoảng cách (px) từ lề trái

### 2. Cấu hình nút bấm

Cấu hình nút bàn phím quay số thông qua thuộc tính `floatingButton`:

- `enable`: Bật/tắt hiển thị nút (true/false)
- `top`: Khoảng cách (px) từ lề trên
- `bottom`: Khoảng cách (px) từ lề dưới
- `right`: Khoảng cách (px) từ lề phải
- `left`: Khoảng cách (px) từ lề trái
- `backgroundColor`: Màu nền của nút
- `width`: Chiều rộng nút (px)
- `height`: Chiều cao nút (px)
- `icon`: Thẻ HTML svg

Lưu ý: Khi không xác định giá trị vị trí, `top` và `left` sẽ được ưu tiên.

### 3. Token xác thực

Liên hệ với bộ phận hỗ trợ VBot để tạo tài khoản SDK và nhận token xác thực. Đặt token vào thuộc tính `access_token`.

### 4. Tùy chọn tích hợp tùy chỉnh

Để sử dụng nút riêng thay vì nút mặc định của VBot:

1. Đặt `floatingButton.enable` thành `false`
2. Gọi `VBotWebCall.openDialPad()` trong trình xử lý sự kiện của nút

Ví dụ:

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="utf-8" />
    <title>Demo VBot Plugin</title>           
  </head>
  <body>
    <div style="display: flex; flex-direction: column; width: fit-content; gap: 20px;">
      <span id="clickToCallBtn">0375856xxx</span>
      <button id="customCallBtn">
        <svg viewBox="0 0 1285 1024" width="30" height="30">
          <!-- Dữ liệu path SVG -->
        </svg>
        <span>Bàn phím</span>
      </button>
    </div>         
  </body>
  
  <script type="module">
        import {VBotWebCall} from "https://plugin.vbot.vn/v1.0.1/vbot-web-plugin.js";
        
        const setting = {
            floatingDialPad: {
                right: 10,
                bottom: 10,
            },        
            floatingButton: {
                enable: false
            },
            access_token: 'Token của bạn',
        };

        VBotWebCall.init(setting);

        function clickToCall(phone) {
            VBotWebCall.makeCall(phone);
        }
        
        function openDialPad() {
            VBotWebCall.openDialPad();
        }
        
        document.getElementById('clickToCallBtn').addEventListener('click', 
            () => clickToCall(document.getElementById('clickToCallBtn').innerHTML)
        );
        document.getElementById('customCallBtn').addEventListener('click', 
            () => openDialPad()
        );
    </script> 
</html>
```

## Tích hợp với ReactJS

Tạo component mới để tích hợp VBot plugin vào ứng dụng React của bạn:

```jsx
// App.jsx
import React from 'react';
import './App.css';

function App({ onClickHandler, onClickOpenDialPad }) {
    return (
        <div>
            <span onClick={() => onClickHandler('0383956xxx')}>
                Bấm để gọi
            </span>
            <button onClick={() => onClickOpenDialPad()}>
                <svg viewBox="0 0 1285 1024" width="20" height="20">
                    <!-- Dữ liệu path SVG -->
                </svg>
                <span>Bàn phím</span>
            </button>
        </div>
    );
}

export default App;

// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { VBotWebCall } from "https://plugin.vbot.vn/v1.0.1/vbot-web-plugin.js";

const ClickToCall = (phone) => {
    VBotWebCall.makeCall(phone);
};

const OpenDialPad = () => {
    VBotWebCall.openDialPad();
};

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App onClickHandler={ClickToCall} onClickOpenDialPad={OpenDialPad} />
    </React.StrictMode>
);

const setting = {
    floatingDialPad: {
        right: 10,
        bottom: 10,
    },        
    floatingButton: {
        enable: true,
        right: 0,
        bottom: 200,      
        backgroundColor: '#20C55A',
        width: 60,
        height: 60,
        icon: 'Thẻ HTML svg',      
    },
    access_token: 'Token của bạn',    
};

VBotWebCall.init(setting);
```

## Sử dụng

1. Sau khi tích hợp, build lại dự án (đối với dự án Node.js) hoặc làm mới trang (Ctrl + F5)
2. Nút bàn phím quay số sẽ xuất hiện tại vị trí đã cấu hình
3. Nhấp để mở bàn phím, chọn hotline và bắt đầu quay số

Lưu ý: Liên hệ bộ phận hỗ trợ VBot để mua và cấu hình hotline cho tài khoản SDK nếu cần.