document.getElementById('teamBtn').onclick = () => { 
   
    document.getElementById('teamBtn').style.backgroundColor = "white";  
    document.getElementById('teamBtn').style.color = "black";  
    document.getElementById('individual').style.backgroundColor = "transparent";
    document.getElementById('individual').style.color = "white";  
    document.getElementById('value-of-plan').innerHTML = "1.967,00" 
    document.getElementById('payment-methods').innerHTML = "" 
   document.getElementById('sale').addEventListener('click', () => {
        window.location.href = "https://pay.kiwify.com.br/i4qtNm5"; 
        
    })
}  
document.getElementById('individual').onclick = () => { 
    document.getElementById('teamBtn').style.backgroundColor = "transparent";  
    document.getElementById('teamBtn').style.color = "white";  
    document.getElementById('individual').style.backgroundColor = "white";
    document.getElementById('individual').style.color = "black";  
    document.getElementById('value-of-plan').innerHTML = "967,00" 
    document.getElementById('payment-methods').innerHTML = "à vista ou 12x de R$ 24,75 sem juros" 
    document.getElementById('sale').addEventListener('click', () => {
        window.location.href = "https://pay.kiwify.com.br/6r6v5vH";      
    })
}  

document.getElementById("return").addEventListener("click", () => window.location.href = "../product-page/index.html");
document.getElementById("sale").addEventListener("click", () => window.location.href = "https://pay.kiwify.com.br/6r6v5vH");