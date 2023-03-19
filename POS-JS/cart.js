function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
}
function getInputvalue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputvalue('phone') * 1219;
    const caseTotal = getInputvalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 20;
    const totalPrice = subTotal + tax;

    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}
document.getElementById('case-plus').addEventListener('click',function(){
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) + 1;
        upadateCaseNumber('case', 59 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if(caseInput.value > 1){
        caseInput.value = parseInt(caseNumber) - 1;
    }
upadateCaseNumber('case', 59, false);
});

// phone prcie update using add event linstner 
document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',1219, true);
});


document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',1219 , false);
});


//Dropdown clicking to search as your wish
const button = document.querySelectorAll(".tap-btn");
const cartItem = document.querySelectorAll(".cart-item")
button.forEach((button) => {
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        const filter = e.target.dataset.filter;
        console.log(filter);
        cartItem.forEach((item)=>{
            if (filter === 'all'){
                item.style.display = 'block'
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = 'block';
                }else {
                    item.style.display = 'none';
                }
            }
        })
             
    })
});

//wire up search box
const searchBox = document.getElementById('search-box')
const searchItems = document.querySelectorAll('.cart-item');

searchBox.addEventListener('keyup',(event) => {
    let searchFilter = event.target.value.toLowerCase().trim()
   
    searchItems.forEach((item)=>{
      if (item.textContent.includes(searchFilter)) {
        item.style.display = 'block'
      } else{
        item.style.display = 'none'
      }
    })
});

//Dropdown for selecting the products
const dropdown = document.querySelector('.dropdown');
dropdown.onclick = () =>{
    const content = document.querySelector(".dropdown-content");
    content.classList.toggle('show')
}











   

















