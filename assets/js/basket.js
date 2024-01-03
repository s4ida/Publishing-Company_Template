const div = document.getElementById('basketdiv');

function getproducts() {
    div.innerHTML = ``;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.map((item, index) => {
        const box = document.createElement('div');
        box.className = " proBox col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4";
        box.innerHTML = `
        <img style="max-width:100% "src='${item.image}' alt="">
        <p>${item.name}</p>
        <button class="removebtn" onclick="removeItem(${index})">Remove from cart</button>
        `;
        div.appendChild(box);
    });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    getproducts();
}

getproducts();