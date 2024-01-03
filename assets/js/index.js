const abc = document.getElementById("abc");
const btn = document.getElementById("load");
let page = 1;
let limit = 4;
async function getproducts() {
  try {
    const response = await axios.get(
      `https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}`
    );
    const data = response.data;
    db = response.data;
    data.forEach((item) => {
      const box = document.createElement("div");
      box.className = "col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3";
      box.innerHTML = `
<img style="width:100% " src='${item.image}' alt="">
<p class='title'>${item.name}</p>
<p class='title'>${item.price}</p>
<button style="margin-bottom:30px" class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>
`;
      abc.appendChild(box);
    });
    page++;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
const btnn = document.getElementById("btnn");
const inpp = document.getElementById("inpp");
const list = document.querySelector(".list");
function findByName(e) {
  e.preventDefault();
abc.innerHTML=''
  axios
    .get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then((res) => {
      db = res.data;
      let filteredData = db.filter((item) =>
      item.name.toLowerCase().includes(input.value.toLowerCase())
    );
      console.log(filteredData);
      filteredData.map((item) => {
        let myDiv = document.createElement("div");
        myDiv.className = "myDiv";
        myDiv.innerHTML = `
          <img style="width:100% " src='${item.image}' alt="">
          <p class='title'>${item.name}</p>
          <p class='title'>${item.price}</p>
          <button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>
          `;
        abc.appendChild(myDiv);
      });
    });
    console.log('duymeye basildi');
}
form.addEventListener("submit", findByName);
btn.addEventListener("click", getproducts);
function addToBasket(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
}
window.onload = () => {
  getproducts();
};
const kindsofproducts = document.getElementById('kindsofproducts')
function sortedproducts() {
  abc.innerHTML='';
  let selectvalue = kindsofproducts.value;
  if(selectvalue==='1'){
    axios.get('https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products')
    .then(res=>{
      db=res.data
      console.log(db);
        let sorteddata = db.sort((a, b) => a.name.localeCompare(b.name)) 
sorteddata.map(item=>{
  const sortbox =document.createElement('div')
  sortbox.className='sortbox'
  sortbox.innerHTML=`
  <img style="width:100% " src='${item.image}' alt="">
  <p class='title'>${item.name}</p>
  <p class='title'>${item.price}</p>
  <button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>
  `
 abc.appendChild(sortbox);
 console.log(sorteddata);
 
})
    })
  }
  if(selectvalue==='2'){
    axios.get('https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products')
    .then(res=>{
      db=res.data
      console.log(db);
        let sorteddata = db.sort((a, b) => b.name.localeCompare(a.name)) 
sorteddata.map(item=>{
  const sortbox =document.createElement('div')
  sortbox.className='sortbox'
  sortbox.innerHTML=`
  <img style="width:100% " src='${item.image}' alt="">
  <p class='title'>${item.name}</p>
  <p class='title'>${item.price}</p>
  <button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>
  `
 abc.appendChild(sortbox);
 console.log(sorteddata);
 
})
    })
  }
}
kindsofproducts.addEventListener('change',sortedproducts);
const submit=document.getElementById('myform')
const nameinput = document.getElementById('nameinp');
const messageinput = document.getElementById('messageinp');
const subjectinput = document.getElementById('subjectinp');
const emailinput = document.getElementById('emailinp');
function axiosPost(event) {
    event.preventDefault()
    axios.post("https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products", {
        name: nameinput.value,
        email: emailinput.value,
        subject: subjectinput.value,
        message: messageinput.value
    }).then(res => {
        console.log(res);
    })
}
submit.addEventListener('submit', axiosPost);

