let home_count = 0
let guest_count = 0
let homeEl = document.getElementById("home-score-el")
let guestEl = document.getElementById("guest-score-el")


function home_one() {
    home_count += 1
    homeEl.innerText = home_count
}

function home_two() {
    home_count += 2
    homeEl.innerText = home_count
}

function home_three() {
    home_count += 3
    homeEl.innerText = home_count
}

function g_1() {
    guest_count += 1
    guestEl.innerText = guest_count
}

function g_2() {
    guest_count += 2
    guestEl.innerText = guest_count
}

function g_3() {
    guest_count += 3
    guestEl.innerText = guest_count
}

function end() {
    home_count = 0
    guest_count = 0
    homeEl.innerText = 0
    guestEl.innerText = 0
}
