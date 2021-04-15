function findAge() {
    let today = new Date();
    let year = document.getElementById("birthday").value 
    let currentYear = today.getFullYear() 
    age = currentYear - year
    document.getElementById("display").innerText = "Tuổi của bạn là:"
    document.getElementById("age").innerText = age
    return age
}