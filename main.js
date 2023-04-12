let pierwszyParagraf = document.getElementById("opis");
let myButton = document.querySelector('button')

myButton.onclick = function () {
    pierwszyParagraf.textContent = 'To jest przykładowy tekst'
}
console.log(myButton);