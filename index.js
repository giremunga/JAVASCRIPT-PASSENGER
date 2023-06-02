//document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    console.log("The button was clicked")
    count = count + 1
    countEl.textContent = count
    console.log(count)
}
function save() {
    let countString = count + " - "
    saveEl.textContent += countString
    countEl.textContent = 0
    count = 0
}