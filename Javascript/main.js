// Toán tử số học

// **  : luỹ thừa / số mũ
// %   : chia lấy dư
// ++  : tăng 1 giá trị số
// --  : giảm 1 giá trị số


// NOTED:
// Toán tử " ++ và -- " có 2 cách sử dụng là tiền tố / hậu tố
// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm

VD: var number = 1

console.log(number++); // tăng giá trị của 'a' lên 1, nhưng in ra giá trị cũ ( trước tăng )
console.log(++number); // tăng giá trị của 'a' lên 1, in ra giá trị mới ( đã tăng )
// Khi viết:  a++; --> console.log(a): in ra giá trị mới


// --------------------------------------

// Toán tử gán

// Toán Tử     Ví Dụ       Tương Đương
// =           x = y       x = y
// +=          x += y      x = x + y
// -=          x -= y      x = x - y
// *=          x *= y      x = x * y
// /=          x /= y      x = x / y
// **=         x **= y     x = x ** y  (luỹ thừa/ số mũ)

// --------------------------------------

// Toán tử nối chuỗi ( khi 1 trong 2 biến trong toán tử là 'chữ' )
VD: var name = 'An';
    name += ' ';
    name += 'Ha';

    console.log(name)

// --------------------------------------

// Toán tử so sánh
// ==  : bằng ( không so sánh kiểu dữ liệu )
// === : bằng ( so sánh kiểu dữ liệu )
// !=  : khác ( không so sánh kiểu dữ liệu )
// !== : khác ( so sánh kiểu dữ liệu )
// >   : lớn hơn
// <   : nhỏ hơn
// >=  : lớn hơn hoặc bằng
// <=  : nhỏ hơn hoặc bằng

// ?   : toán tử 3 ngôi ( điều kiện ? giá trị đúng : giá trị sai )

VD: var a = 1;

    var b = 2;
    var c = a > b ? 'a lớn hơn b' : 'a nhỏ hơn b';
    console.log(c)
    // kết quả: a nhỏ hơn b

// --------------------------------------
