document.addEventListener("DOMContentLoaded", function () {
  // Mong muốn của chúng ta
  Validator({
    form: "#form-1",
    formGroupSelector: ".form-group",
    errorSelector: ".form-message",
    rules: [Validator.isEmail("#email"), Validator.minLength("#password", 6)],

    onSubmit: function (data) {
      console.log(data)
      if(data.email === "admin@gmail.com") {
        let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
        listUsers.push({
          email: "admin@gmail.com",
          password: "123456",
          role: "admin"
        })
        localStorage.setItem("listUsers", JSON.stringify(listUsers))
      }
      let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];

      let foundUser = listUsers.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (foundUser) {
        // Lưu email vào localStorage
        localStorage.setItem("userEmail", foundUser.email);

        if (isAdmin(foundUser)) {
          alert("Đăng nhập thành công với quyền admin");
          window.location.href = "/pages/admin/admin.html";
        } else {
          if (foundUser.isLocked) {
            alert("Tài khoản của bạn đã bị khóa và không thể đăng nhập.");
          } else {
            alert("Đăng nhập thành công");
            window.location.href = "/index.html";
          }
        }
      } else {
        alert("Email hoặc mật khẩu không chính xác");
      }
    },
  });
});

function isAdmin(user) {
  return user.role === "admin"; // Thay đổi "admin" thành vai trò quản trị viên trong hệ thống của bạn
}

const admin = {
  email: "admin@gmail.com",
  password: "123456",
};
localStorage.setItem("admin", JSON.stringify(admin));
