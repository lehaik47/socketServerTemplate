const PORT = 3000; //Đặt địa chỉ Port được mở ra để tạo ra chương trình mạng Socket Server

var http = require('http'); //#include thư viện http - Tìm thêm về từ khóa http nodejs trên google nếu bạn muốn tìm hiểu thêm. Nhưng theo kinh nghiệm của mình, Javascript trong môi trường NodeJS cực kỳ rộng lớn, khi bạn bí thì nên tìm hiểu không nên ngồi đọc và cố gắng học thuộc hết cái reference (Tài liêu tham khảo) của nodejs làm gì. Vỡ não đó!
var socketio = require('socket.io'); //#include thư viện socketio

var ip = require('ip');
var app = http.createServer(); //#Khởi tạo một chương trình mạng (app)
var io = socketio(app);	// Phải khởi tạo io sau khi tạo app!
app.listen(PORT);// Cho socket server (chương trình mạng) lắng nghe ở port 3000
console.log("Server nodejs chay tai dia chi: " + ip.address() + ":" + PORT)
