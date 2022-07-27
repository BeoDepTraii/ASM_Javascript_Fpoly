function checkDangNhap() {
  var arr = document.getElementsByTagName("input");
  var username = arr[0].value;
  var password = arr[1].value;
  if (username == "" || password == "") {
    alert("Vui lòng nhập tài khoản và mật khẩu !");
    return;
  }
}

function checkCoupon() {
  var coupon = document.getElementById("coupon_code").value;
  if (coupon == "") {
    alert("Vui lòng nhập mã giảm giá !");
    return;
  }
}

function checkoutdetails() {
  var arr = document.getElementsByTagName("input");
  var address = arr[6].value;
  var city = arr[7].value;
  var District = arr[8].value;
  var town = arr[9].value;
  var firstname = arr[10].value;
  var name = arr[11].value;
  var email = arr[12].value;
  var phone = arr[13].value;
  if (
    address == "" ||
    city == "" ||
    town == "" ||
    firstname == "" ||
    name == "" ||
    email == "" ||
    phone == ""
  ) {
    alert("Vui lòng diền thông tin vào những ô bắt buộc !");
    return;
  }

  var emailcheck = document.getElementById('billing_email'); 
  var formcheckmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
  if (!formcheckmail.test(emailcheck.value)) { 
           alert('Vui lòng nhập địa chỉ email hợp lệ !\nVí dụ: Example@gmail.com');
           return false; 
  }
  confirm(
    "Xác nhận thông tin của bạn\n Họ và tên: " +
      firstname +
      " " +
      name +
      "\n Địa chỉ email: " +
      email +
      "\n Số điện thoại: " +
      phone +
      "\n Địa chỉ: " +
      address +
      " - " +
      town +
      " - " +
      District +
      " - " +
      city +
      "\n"
  );

}


function checkSignin() {
  var arr = document.getElementsByTagName("input");
  var address = arr[6].value;
  var city = arr[7].value;
  var District = arr[8].value;
  var town = arr[9].value;
  var password = arr[17].value;
  var confirmpassword = arr[18].value;
  var firstname = arr[10].value;
  var name = arr[11].value;
  var email = arr[12].value;
  var phone = arr[13].value;

  if (
    address == "" ||
    city == "" ||
    town == "" ||
    firstname == "" ||
    name == "" ||
    email == "" ||
    phone == "" ||
    password == "" ||
    confirmpassword == ""
  ) {
    alert("Vui lòng diền thông tin vào những ô bắt buộc !");
    return;
  }
  if (password !== confirmpassword) {
    alert("Mật khẩu xác nhận không khớp với mật khẩu tạo. Vui lòng nhập lại !");
    return false;
  }
  var emailcheck = document.getElementById('billing_email'); 
  var formcheckmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
  if (!formcheckmail.test(emailcheck.value)) { 
           alert('Vui lòng nhập địa chỉ email hợp lệ !\nVí dụ: Example@gmail.com');
           return false; 
  }
  confirm(
    "Xác nhận thông tin của bạn\n Họ và tên: " +
      firstname +
      " " +
      name +
      "\n Địa chỉ email: " +
      email +
      "\n Số điện thoại: " +
      phone +
      "\n Địa chỉ: " +
      address +
      " - " +
      town +
      " - " +
      District +
      " - " +
      city +
      "\n"
  );
}

function checkEmail() {
  var email = document.getElementById("email");
  var formcheckmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!formcheckmail.test(email.value)) {
    alert("Vui lòng nhập địa chỉ email hợp lệ !\nVí dụ: Example@gmail.com");
    email.focus;
    return false;
  } else {
    alert("Địa chỉ email hợp lệ !");
  }
}
