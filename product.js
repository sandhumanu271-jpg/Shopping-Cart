let urlData = new URLSearchParams(window.location.search);

let id = urlData.get("id");

let main = document.querySelector("#product");

async function getProduct(){

    let res = await fetch("https://dummyjson.com/products/" + id);

    let product = await res.json();

    let img = document.createElement("img");
    img.src = product.thumbnail;

    let details = document.createElement("div");
    details.className = "details";

    let title = document.createElement("h2");
    title.innerText = product.title;

    let brand = document.createElement("h3");
    brand.innerText = "Brand : " + product.brand;

    let category = document.createElement("h3");
    category.innerText = "Category : " + product.category;

    let price = document.createElement("h3");
    price.innerText = "Price : ₹" + Math.ceil(product.price);

    let stock = document.createElement("h3");
    stock.innerText = "Stock : " + product.stock;

    let rating = document.createElement("h3");
    rating.innerText = "Rating : " + product.rating;

    let desc = document.createElement("p");
    desc.innerText = product.description;

    let btn = document.createElement("button");
    btn.innerText = "Add To Cart";

    btn.onclick = () => {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product Added Successfully");

    };

    let cartBtn = document.createElement("button");
    cartBtn.innerText = "My Cart";

    cartBtn.onclick = () => {

        window.location.href = "cart.html";

    };

    details.append(title, brand, category, price, stock, rating, desc, btn, cartBtn);

    main.append(img, details);

}

getProduct();