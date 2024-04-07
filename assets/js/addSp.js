let gudams
window.onload = function () {
  gudams = getListProducts() || gudams;
}

// Localstorage cho dssp: 'ListProducts
function setListProducts(newList) {
  window.localStorage.setItem('ListProducts', JSON.stringify(newList));
}

function getListProducts() {
  return JSON.parse(window.localStorage.getItem('ListProducts'));
}

function load() {
  var out = "";
  const listGundams = JSON.parse(localStorage.getItem("ListProducts")) || []
  for (let i = 0; i < gudams.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
              <div class="card" style="width: 18rem;">
                  <img src="${listGundams[i].img1}" class="card-img-top" alt="Product 1 Image" style="height: 300px;")" >
                  <div class="card-body">
                      <h5 class="card-title">${listGundams[i].name}</h5>
                      <hr>

                      <div class = "card-bottom">
                      <p class="card-text">${listGundams[i].price}</p>
                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${listGundams[i].id}')">More information...</button>
                      </div> 
                    </div>
              </div>
            </div>`;
  }
  document.getElementById("load").innerHTML = out;
}

function loadAdmin() {
  var out = "";
  for (let i = 0; i < gundams.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
              <div class="card" style="width: 18rem;">
                  <img src="${gundams[i].img1}" class="card-img-top" alt="Product 1 Image" style="height: 300px;")" >
                  <div class="card-body">
                      <h5 class="card-title">${gundams[i].name}</h5>
                      <hr>

                      <div class = "card-bottom">
                      <p class="card-text">${gundams[i].price}</p>
                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${gundams[i].id}')">More information...</button>
                      <button class="btn btn-danger" onclick="deleteProduct('${gundams[i].id}')">Xóa sản phẩm</button>

                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${gundams[i].id}')">Edit Item</button>

                      </div> 
                    </div>
              </div>
            </div>`;
  }
  document.getElementById("loadAdmin").innerHTML = out;
}

function renderListProduct(categories) {
  var out = "";
  for (let i = 0; i < categories.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
              <div class="card" style="width: 18rem;">
                  <img src="${categories[i].img1}" class="card-img-top" alt="Product 1 Image" style="height: 300px;")" >
                  <div class="card-body">
                      <h5 class="card-title">${categories[i].name}</h5>
                      <hr>

                      <div class = "card-bottom">
                      <p class="card-text">${categories[i].price}</p>
                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${categories[i].id}')">More information...</button>
                      </div> 
                    </div>
              </div>
            </div>`;
  }
  document.getElementById("load").innerHTML = out;
}

function renderListProductAdmin(categories) {
  var out = "";
  for (let i = 0; i < categories.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
              <div class="card" style="width: 18rem;">
                  <img src="${categories[i].img1}" class="card-img-top" alt="Product 1 Image" style="height: 300px;")" >
                  <div class="card-body">
                      <h5 class="card-title">${categories[i].name}</h5>
                      <hr>

                      <div class = "card-bottom">
                      <p class="card-text">${categories[i].price}</p>
                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${categories[i].id}')">More information...</button>
                      <button class="btn btn-danger" onclick="deleteProduct('${categories[i].id}')">Xóa sản phẩm</button>

                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${categories[i].id}')">Edit Item</button>

                      </div> 
                    </div>
              </div>
            </div>`;
  }
  document.getElementById("loadAdmin").innerHTML = out;
}

function renderMg1100Product() {
  let listProducts = JSON.parse(localStorage.getItem("ListProducts"));
  const listProductsMg1100 = [];
  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].type == "mg1100") {
      listProductsMg1100.push(listProducts[i]);
    }
  }
  if(checkIsAdmin()) {
    console.log("vao admin r nha")
    renderListProductAdmin(listProductsMg1100)
  } else {
    renderListProduct(listProductsMg1100);
  }
}

function renderPg160Product() {
  let listProducts = JSON.parse(localStorage.getItem("ListProducts"));
  const listProductsPg160 = [];
  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].type == "pg160") {
      listProductsPg160.push(listProducts[i]);
    }
  }
  if(checkIsAdmin()) {
    console.log("vao admin r nha")
    renderListProductAdmin(listProductsPg160)
  } else {
    renderListProduct(listProductsPg160);
  }
}

function renderRg1144Product() {
  let listProducts = JSON.parse(localStorage.getItem("ListProducts"));
  const listProductsRg1144 = [];
  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].type == "rg1144") {
      listProductsRg1144.push(listProducts[i]);
    }
  }
  if(checkIsAdmin()) {
    console.log("vao admin r nha")
    renderListProductAdmin(listProductsRg1144)
  } else {
    renderListProduct(listProductsRg1144);
  }
}

// Hàm kiểm tra trạng thái đăng nhập của người dùng
function checkLoggedIn() {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail) {
    return true;
  } else {
    return false;
  }
}

function checkIsAdmin() {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail === "admin@gmail.com") {
    return true;
  } else {
    return false;
  }
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productToAdd = gundams.find((product) => product.id === id);

  let existingProduct = cart.find((product) => product.id == productToAdd.id);

  if (existingProduct) {
    // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
    existingProduct.quantity += 1;
  } else {
    console.log("productToAdd", productToAdd);
    // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào
    productToAdd.quantity = 1; // Thiết lập số lượng ban đầu là 1
    cart.push(productToAdd);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Sản phẩm đã được cập nhật trong giỏ hàng.");
}

// Hiển thị thông tin chi tiết sản phẩm
function renderProductDetail(idProduct) {
  let listProducts = JSON.parse(localStorage.getItem("ListProducts"));
  let productItem = listProducts.find((item) => {
    return item.id == idProduct;
  });
  let result = "";
  result += `
            <div class="container cart-container">
              <div class="left">
                  <img src="${productItem.img1}" alt="ảnh gundam">
              </div>
          
              <div class="right">
                  <h2>${productItem.name}</h2><hr>
                  <h5>${productItem.price}</h5>
                  <button class="btn btn-primary add-to-cart-btn"  onclick="addToCart('${productItem.id}')" >Thêm vào giỏ hàng</button>
              </div>
            </div>
            `;
  document.querySelector(".content-container").style.display = "flex";

  document.querySelector(".content-container").innerHTML = result;

  document.querySelector(".des-container").style.display = "none";

  document.querySelector(".carousel-inner").style.display = "none";
}

//Cart
function showCart() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("cartItems", cartItems);
  let cartHTML = "";
  if (cartItems.length === 0) {
    cartHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
  } else {
    cartHTML += "<ul>";
    cartItems.forEach(function (item) {
      cartHTML += `
                    <li>
                      <div>
                          <img src="${item.img1}" alt="${item.name}">
                      </div>
                      <div class="details">
                          <h4>${item.name}</h4>
                          <p> Money: ${item.price}</p>
                          <div>
                          <button onclick="decreaseQuantity('${
                            item.id
                          }')">-</button>
                          <span id="${item.id}-quantity">${
        item.quantity || 1
      }</span>
                          <button onclick="increaseQuantity('${
                            item.id
                          }')">+</button>
                          <button onclick="removeItem('${
                            item.id
                          }')">Xóa</button>
                          </div>
                      </div>
                    </li>
                `;
    });
    cartHTML += "</ul>";
  }
  cartHTML += `<p class="total-price">Tổng tiền: ${calculateTotal()} VNĐ</p>`;
  document.getElementById("cart").innerHTML = cartHTML;
  document.getElementById("cart").style.display = "block";
  document.querySelector(".des-container").style.display = "none";
  document.querySelector(".carousel-inner").style.display = "none";
  document.querySelector(".cart-container").style.display = "none";
}

function decreaseQuantity(id) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity = (cartItems[itemIndex].quantity || 1) - 1;
    if (cartItems[itemIndex].quantity <= 0) {
      cartItems.splice(itemIndex, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    showCart();
  }
}

function increaseQuantity(id) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity = (cartItems[itemIndex].quantity || 1) + 1;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    showCart();
  }
}

function removeItem(id) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let updatedCart = cartItems.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  showCart();
}

function calculateTotal() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cartItems.forEach(function (item) {
    let itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
    let itemTotal = itemPrice * (item.quantity || 1);
    total += itemTotal;
  });

  return total;
}

function removeProductCardFromMainPage(id) {
  let productCard = document.getElementById(id);
  if (productCard) {
    productCard.remove();
  }
}
