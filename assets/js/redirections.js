setTimeout(() => {
    document.getElementById("spiner-area").style.display = "none"; 
},3000)

document.getElementById("home-link").addEventListener("click", () => {
    window.location.href = "#principal-content"
});  
document.getElementById("vantage-link").addEventListener("click", () => {
    window.location.href = "#vantage"
}) 
document.getElementById("product").addEventListener("click", () => {
    window.location.href = "pages/product-page/index.html"; 
}) 
document.getElementById("product-btn").addEventListener("click", () => window.location.href = "pages/product-page/index.html")
document.getElementById("product-btn2").addEventListener("click", () => window.location.href = "pages/product-page/index.html") 
// redirections

document.getElementById("go-to-form").addEventListener("click",() => {
    window.location.href = "https://form.jotform.com/232325925942055"; 
})
document.getElementById("go-to-form2").addEventListener("click",() => {
    window.location.href = "https://form.jotform.com/232325925942055"; 
})