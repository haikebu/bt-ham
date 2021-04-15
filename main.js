function tinhKetQua() {
    let birthYear = document.getElementById("birthYear").value
    findAge(birthYear)
    document.getElementById("age").innerHTML = 'Tuổi của bạn là:' + age
}
function findAge(birthYear) {
    let today = new Date();
    let currentYear = today.getFullYear()
    age = currentYear - birthYear
    return age
}