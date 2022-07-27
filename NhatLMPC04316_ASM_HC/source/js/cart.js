const btn = document.querySelectorAll(".product-option-shop a");
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    {
      var btnItem = event.target;
      var product = btnItem.parentElement.parentElement;
      var productImg = product.querySelector("img").src;
      var productName = product.querySelector("h2 a").innerText;
      var productPrice = product.querySelector("div ins").innerText;

      addcartItem(productImg, productName, productPrice);
    }
  });
});

function addcartItem(productImg, productName, productPrice) {
  var addtrItem = document.createElement("tr");
  var cartItem = document.querySelectorAll(".tbody_cart tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productNameA = document.querySelectorAll(".product-name");
    if (productNameA[i].innerText == productName) {
      alert("Sản phẩm đã có trong giỏ hàng");
      return;
    }
  }
  var Itemcontent =
    '<tr class="cart_item"><td class="product-remove"><a title="Remove this item" class="remove">X</a> </td><td class="product-thumbnail"><a href="#"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="' +
    productImg +
    '"></a></td><td class="product-name"><a href="#">' +
    productName +
    '</a> </td><td class="product-price"><span class="amount">' +
    productPrice +
    '</span></td> </td><td class="product-quantity"><div class="quantity buttons_added"><input type="number" size="4" class="input-text qty text" title="Qty" value="1" min="0" step="1"></div></td></tr>';
  addtrItem.innerHTML = Itemcontent;
  var cartTable = document.querySelector(".tbody_cart");

  cartTable.append(addtrItem);
  // console.log()

  cartTotal();
  deleteCart();
  updateCart();
}

function cartTotal() {
  var cartItem = document.querySelectorAll(".tbody_cart tr");
  var totalPriceB = 0;
  var totalPriceA = 0;
  var totalPriceC = 0;
  var tempCartCount = 0;
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector(".input-text").value;
    var productPrice = cartItem[i].querySelector(
      ".product-price span"
    ).innerText;
    totalPriceA = inputValue * productPrice * 1000000;
    totalPriceB = totalPriceA + totalPriceB;
    totalPriceC = totalPriceB.toLocaleString("de-DE");
    tempCartCount = tempCartCount + 1;
    var cartCountHeader = document.querySelector(".product-count");
    cartCountHeader.innerText = tempCartCount;
  }
  var totalPrice = document.querySelector(".actions span");
  totalPrice.innerText = totalPriceC + "  đ";
  var cartPriceHeader = document.querySelector(".cart-amunt");
  cartPriceHeader.innerText = totalPriceC + "  đ";
}

function deleteCart() {
  var cartItem = document.querySelectorAll(".tbody_cart tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productRemoveA = document.querySelectorAll(".product-remove");
    productRemoveA[i].addEventListener("click", function (event) {
      var cartDelete = event.target;
      var cartItemA = cartDelete.parentElement.parentElement;
      cartItemA.remove();
      cartTotal();
    });
  }
}

function updateCart() {
  var cartItem = document.querySelectorAll(".tbody_cart tr");
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector(".qty");
    inputValue.addEventListener("change", function () {
      cartTotal();
    });
  }
}

const cartClose = document.querySelector(".fa-times-circle");
const cartShow = document.querySelector(".shopping-item a");
const cartShow1 = document.querySelector(".cartShow1");

cartShow.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "0";
});

cartShow1.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "0";
});

cartClose.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "-100%";
});
