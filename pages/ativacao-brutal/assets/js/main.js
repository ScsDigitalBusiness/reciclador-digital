document.getElementById('teamBtn').onclick = () => { 
   
    document.getElementById('teamBtn').style.backgroundColor = "white";  
    document.getElementById('teamBtn').style.color = "black";  
    document.getElementById('individual').style.backgroundColor = "transparent";
    document.getElementById('individual').style.color = "white";  
    document.getElementById('value-of-plan').innerHTML = "1.967,00" 
    document.getElementById('payment-methods').innerHTML = "" 
   document.getElementById('sale').addEventListener('click', () => {
        window.location.href = "https://pay.kiwify.com.br/VVx7dXf"; 
        
    })
}  
document.getElementById('individual').onclick = () => { 
    document.getElementById('teamBtn').style.backgroundColor = "transparent";  
    document.getElementById('teamBtn').style.color = "white";  
    document.getElementById('individual').style.backgroundColor = "white";
    document.getElementById('individual').style.color = "black";  
    document.getElementById('value-of-plan').innerHTML = "967,00" 
    document.getElementById('payment-methods').innerHTML = "à vista ou parcelado.";  
    document.getElementById('sale').addEventListener('click', () => {
        window.location.href = "https://pay.kiwify.com.br/8GI0EG2";      
    })
} 

setTimeout(() => {
    document.getElementById("spiner-area").style.display = "none"; 
},3000)

document.getElementById("return").addEventListener("click", () => window.location.href = "../product-page/index.html");