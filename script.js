let total = 0;
let count = 0;




function openCart(){

    document.getElementById("cartSidebar").style.right = "0";

    document.getElementById("overlay").style.display = "block";

}





function closeCart(){

    document.getElementById("cartSidebar").style.right = "-400px";

    document.getElementById("overlay").style.display = "none";

}





function addCart(name, price){


    let cartItems = document.getElementById("cartItems");


    let item = document.createElement("div");


    item.className = "cart-item";


    item.innerHTML = `

        <h4>${name}</h4>

        <p>Price : ₹${price}</p>


        <button class="remove-btn" 
        onclick="removeItem(this,${price})">

        Remove

        </button>

    `;


    cartItems.appendChild(item);



    total = total + price;

    count++;



    document.getElementById("total").innerHTML = total;


    document.getElementById("count").innerHTML = count;


}






function removeItem(button, price){


    let item = button.parentElement;


    item.remove();



    total = total - price;


    count--;



    document.getElementById("total").innerHTML = total;


    document.getElementById("count").innerHTML = count;



}