document.getElementById("btn1").onclick = function () {
  var so_hai_chu_so = document.getElementById("number1").value;
  var so_hang_chuc = Math.floor(so_hai_chu_so / 10);
  var so_hang_donvi = so_hai_chu_so % 10;
  var tong_hai_chu_so = parseInt(so_hang_chuc + so_hang_donvi);
  document.getElementById("kq1").value = tong_hai_chu_so;
};
// 5 Tach so 2 chu so

document.getElementById("btn2").onclick = function () 
{
  var hcn_dai = document.getElementById("dai").value;
  var hcn_rong = document.getElementById("rong").value;
  var hcn_chuvi = (parseInt(hcn_dai) + parseInt(hcn_rong))*2; 
  var hcn_dientich = hcn_dai * hcn_rong;
  document.getElementById("kq2").value = hcn_chuvi + "(mm)/" + hcn_dientich + "(mm²)";
//   console.log(hcn_chuvi);
};
// 4 hinh chu nhat

document.getElementById("btn3").onclick = function () 
{
var tien = new Intl.NumberFormat("vn-VN");
var USD = document.getElementById("my").value;
var tygia = 23500;
var VND = tien.format(USD * tygia) ;
document.getElementById("viet").value = VND ;
}
// 3 doi tien USD => Viet

document.getElementById("btn4").onclick = function () 
{
var so1 = parseInt( document.getElementById("s1").value);
var so2 = parseInt( document.getElementById("s2").value);
var so3 = parseInt( document.getElementById("s3").value);
var so4 = parseInt( document.getElementById("s4").value);
var so5 = parseInt( document.getElementById("s5").value);
var TB = (so1 + so2 + so3 + so4 + so5)/5;
document.getElementById("tb5s").value = TB ;
}
//2 tinh gia tri trung binh 5 so


document.getElementById("btn5").onclick = function () 
{
var DW = document.getElementById("day_work").value;
var tien = new Intl.NumberFormat("vn-VN");
var luong_1_ngay = 100000;
var Luong = tien.format(DW * luong_1_ngay) + " VND";
document.getElementById("luong").value = Luong ;
}
//1 luong theo ngay

// console.log(tien.format (Luong)+" VND");
