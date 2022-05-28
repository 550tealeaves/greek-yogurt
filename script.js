function purchaseButton() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email?");
    let emoji = prompt("What is your favorite emoji?");

    if (name.length > 0 && email.length > 5) {   //.length places character limit 
        alert(`Thank you, ${name}! We'll be in touch by email, meanwhile have plenty of yogurt! ${emoji}`);
    }
}
let buyButton = document.querySelector("button");
buyButton.addEventListener("click", purchaseButton);