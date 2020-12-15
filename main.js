const basket = document.querySelector(".basket");
const btnDisp = document.querySelector(".btn-disp");
const targetContainer = document.querySelector(".target-container");
const wrap = document.querySelector(".wrap");
const sum = document.querySelector(".sum");
const basketItem = document.querySelector(".basket-item");
let pizza = [
  {
    name: "Pizza Gorgonzola",
    value: 20,
    img: "Gorgonzola.png",
  },
  {
    name: "Pizza Napoletana",
    value: 15,
    img: "Napoletana.png",
  },
  {
    name: "Pizza Margherita",
    value: 12,
    img: "Margherita.png",
  },
  {
    name: "Pizza Pepperoni",
    value: 15,
    img: "Pepperoni.png",
  },
  {
    name: "Greek Pizza",
    value: 20,
    img: "Greek.png",
  },
  {
    name: "Pizza Crudo",
    value: 20,
    img: "Crudo.png",
  },
  {
    name: "Pizza Mexico",
    value: 20,
    img: "Mexico.png",
  },
  {
    name: "Four Cheese Pizza",
    value: 20,
    img: "Cheese.png",
  },
];

function build(arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = `
        <div class="dop">
        <div>
          <img src="img/${arr[i].img}" alt="" />
        </div>
        <p>${arr[i].name}</p>
        <p>$${arr[i].value}</p>
        <h6>
          <span data-set="${i}" class="btn btn-outline-danger">Order Now</span>
        </h6>
      </div>
        `;
    wrap.insertAdjacentHTML("beforeend", str);
  }
}
build(pizza);
let total = 0;
targetContainer.addEventListener("click", (event) => {
  let target = event.target;
  for (let i = 0; i < pizza.length; i++) {
    if (target.dataset.set == i) {
      basketItem.innerHTML += `${pizza[i].name}: $${pizza[i].value}<br>`;
      total += pizza[i].value;
      sum.innerText = `Счет:$${total}`;
    }
  }
});
btnDisp.addEventListener("click", () => {
  basket.classList.toggle("disp");
});
