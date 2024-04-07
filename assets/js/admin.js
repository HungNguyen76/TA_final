// Trong hàm deleteProduct ở admin.js
function deleteProduct(id) {
  // Xác nhận từ người dùng trước khi xoá
  if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?")) {
    // Xoá sản phẩm trong mảng gundams
    let index = gundams.findIndex((product) => product.id === id);
    if (index !== -1) {
      gundams.splice(index, 1);
      // Cập nhật lại giao diện hiển thị danh sách sản phẩm trên trang admin
      loadAdmin();
      // Lưu lại danh sách sản phẩm sau khi xoá vào localStorage
      localStorage.setItem("ListProducts", JSON.stringify(gundams));
      alert("Sản phẩm đã được xoá thành công.");

      // Gọi hàm cập nhật trang index.html sau khi xoá sản phẩm thành công
      updateIndexPageAfterDelete();

      // Xoá card sản phẩm từ trang chính
      removeProductCardFromMainPage(id);
    } else {
      alert("Không tìm thấy sản phẩm để xoá.");
    }
  }
}

function updateIndexPageAfterDelete() {
  // Cập nhật trang index.html sau khi xoá sản phẩm thành công
  // Bạn có thể làm điều này bằng cách gọi hàm load() hoặc loadAdmin() tùy thuộc vào trạng thái hiện tại của người dùng
  if (checkLoggedIn()) {
    loadAdmin(); // Nếu người dùng đã đăng nhập, cập nhật trang admin.html
  } else {
    load(); // Nếu người dùng chưa đăng nhập, cập nhật trang index.html
  }
}

function removeProductCardFromMainPage(id) {
  // Xoá card sản phẩm từ trang chính
  let productCard = document.getElementById(id);
  if (productCard) {
    productCard.remove();
  }
}
