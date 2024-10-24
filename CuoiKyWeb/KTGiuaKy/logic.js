var submit = document.getElementById("Submit");
var submita = document.getElementById("Summit");
function check() {
  var email = document.getElementById("Email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("Address").value;
  var city = document.getElementById("City").value;
  var zip = document.getElementById("Zip").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phonePattern = /^\d{10,11}$/;
  if (
    email.trim() === "" ||
    phone.trim() === "" ||
    address.trim() === "" ||
    city.trim() === "" ||
    zip.trim() === ""
  ) {
    alert("Nhập đầy đủ các ô");
  } else if (!emailPattern.test(email)) {
    alert("Trường thông tin Email phải nhập đúng định dạng Email. vd exam@gmail.com");
  } else if (!phonePattern.test(phone)) {
    alert("Nhập SĐT");
  } else {
    alert("Thành Công");
  }
}
submit.onclick = check;
submita.onclick = check;
