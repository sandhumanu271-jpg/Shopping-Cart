let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.querySelector("#cartItems");

let items = document.querySelector("#items");
let subtotal = document.querySelector("#subtotal");
let total = document.querySelector("#total");

let sum = 0;

function displayCart(){

    cartItems.innerHTML = "";

    sum = 0;

    for(let i = 0; i < cart.length; i++){

        let el = cart[i];

        sum += Math.ceil(el.price);

        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = el.thumbnail;

        let details = document.createElement("div");

        let title = document.createElement("h2");
        title.innerText = el.title;

        let price = document.createElement("h3");
        price.innerText = "Price : ₹" + Math.ceil(el.price);

        let btn = document.createElement("button");
        btn.innerText = "Delete";

        btn.onclick = () => {

            cart.splice(i,1);

            localStorage.setItem("cart",JSON.stringify(cart));

            displayCart();

        };

        details.append(title, price, btn);

        card.append(img, details);

        cartItems.append(card);

    }

    items.innerText = "Items : " + cart.length;

    subtotal.innerText = "Subtotal : ₹" + sum;

    total.innerText = "Total Amount : ₹" + sum;

}

displayCart();