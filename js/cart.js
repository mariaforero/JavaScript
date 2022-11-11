let label = document.getElementById('label')
let shoppingCart = document.getElementById('shopping-cart')


let basket = JSON.parse(localStorage.getItem("info")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);

}

calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket
            .map((x) => {
                let { id, item } = x;
                let search = shopItemsData.find((y) => y.id === id) || []
                let { img, name, price } = search;
                return `
            <div class="cart-item">
              <img width="100" src=${img} alt=" " />
              <div class="details " >
                 <div class="title-price-x">
                   <h4 class="title-price">
                     <p>${name}</p>
                     <p class="carro-price">$ ${price}</p>
                   </h4>
                   <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>


                    

                 </div>  

                 <div class="button">
                      <i onclick="decrement(${id})"  class="bi bi-dash-lg"></i>
                      <div id=${id} class="quantity">${item}</div>
      
                      <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
      
                  </div>
                 <h3>$ ${item * search.price}</h3>
              </div>
            </div>
            `;

            }).join(""));
    } else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2 class="htwo"> carro vacio </h2>
        <a href="venta.html">
          <buttton class="homeBtn">vuelve a entrada</button>
        </a>  
        `

    }
};

generateCartItems();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else {
        search.item += 1;
    }

    generateCartItems();
    update(selectedItem.id)

    localStorage.setItem("info", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) return
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("info", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    total();
};

let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    calculation();
    total();
    localStorage.setItem("info", JSON.stringify(basket));

};

let eliminarTodo = () => {
    basket = []
    generateCartItems();
    calculation();
    localStorage.setItem("info", JSON.stringify(basket));
}

let total = () => {
    if (basket.lenght !== 0) {
        let amount = basket.map((x) => {
            let { item, id } = x;
            let search = shopItemsData.find((y) => y.id === id) || []
            return item * search.price;

        }).reduce((x, y) => x + y, 0)

        label.innerHTML = `
        <h2>Total de pago : $ ${amount}</h2>
        <button class="checkout">checkout</button>
        <button onclick="eliminarTodo()" class="eliminar">eliminar todo</button>
        

        `;

    } else return;

};
total();
