//


let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("previous")

function increment() {

    count += 1
    countEl.innerText = count
}


function save() {
    let prev = count + " - "
    saveEl.innerText += prev
    count = 0
}