let main = document.querySelector("#products");

async function getProducts(){

    let res = await fetch("https://dummyjson.com/products?limit=194");

    let data = await res.json();

    let products = data.products;

    for(let i = 0; i < products.length; i++){

        let el = products[i];

        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = el.thumbnail;

        let title = document.createElement("h3");
        title.innerText = el.title;

        let price = document.createElement("h2");
        price.className = "price";
        price.innerText = "₹" + Math.ceil(el.price);

        let desc = document.createElement("p");
        desc.innerText = el.description;

        let btn = document.createElement("button");
        btn.innerText = "Add To Cart";

        btn.onclick = (e)=>{

            e.stopPropagation();

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(el);

            localStorage.setItem("cart",JSON.stringify(cart));

            alert("Product Added Successfully");

        };

        card.onclick = ()=>{

            window.location.href = "product.html?id=" + el.id;

        };

        card.append(img,title,price,desc,btn);

        main.append(card);

    }

}

getProducts();