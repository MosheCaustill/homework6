let overall = 0;
let products = [
  [`גזר`, 3],
  [`עגבניה`, 2],
  [`קולורבי`, 6],
  [`מלפפון`, 2],
];
let cart = [];
let cartAmount = [];
let shopStr = ``;
function add(productIndex) {
  productIndex = Number(productIndex);
  if (cart.length == 0) {
    cart.push(products[productIndex][0]);
    cartAmount.push(1);
    overall += products[productIndex][1];
  } else {
    if (cart.includes(products[productIndex][0])) {
      let i = 0;
      while (i < cart.length) {
        if (cart[i] == products[productIndex][0]) {
          cartAmount[i]++;
          overall += products[productIndex][1];
          i = cart.length;
        } else {
          i++;
        }
      }
    } else {
      cart.push(products[productIndex][0]);
      cartAmount.push(1);
      overall += products[productIndex][1];
    }
  }
  showOnPage();
}
function remove(productIndex) {
  productIndex = Number(productIndex);
  if (cart == []) {
    cart = [];
  } else {
    if (cart.includes(products[productIndex][0])) {
      let i = 0;
      while (i < cart.length) {
        if (cart[i] == products[productIndex][0]) {
          if (cartAmount[i] == 1) {
            cart.splice(i, 1);
            cartAmount.splice(i, 1);
            overall -= products[productIndex][1];
          } else {
            cartAmount[i]--;
            overall -= products[productIndex][1];
          }
          i = cart.length;
        } else {
          i++;
        }
      }
    }
  }
  showOnPage();
}
function empty() {
  overall = 0;
  cart = [];
  cartAmount = [];
  showOnPage();
}
function showOnPage() {
  if (cart.length == 0) {
    document.getElementById("agala").innerHTML = `עגלה ריקה`;
    document.getElementById("amount").innerHTML = 0;
  } else {
    let i = 0;
    document.getElementById("agala").innerHTML = ``;
    while (i < cart.length) {
      const para = document.getElementById(`agala`);
      const newP = document.createElement(`p`);
      const newBr = document.createElement(`br`);
      const newPStr = document.createTextNode(
        cart[i] + `, ` + cartAmount[i] + " יח'"
      );
      newP.appendChild(newPStr);
      newP.appendChild(newBr);
      agala.appendChild(newP);
      i++;
    }
    document.getElementById("amount").innerHTML = overall;
  }
}
