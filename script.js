// On button click, change class to .active, and expands in position

//(1) getting from DOM
const cardList = document.querySelectorAll(".card");
console.log("cardList", cardList); //returns an array
console.log("cardList[0]", cardList[0]);

//(2) Add EventListener 
cardList.forEach(card => {
    card.addEventListener("click", () => {
        //(2.2) removeActiveClass
        removeActiveClasses();
        //(2.1) add active class
        card.classList.add("active");
    })
})

//(3) Defining the fn to remove active classes
function removeActiveClasses(){
    //M1
    // const active = document.querySelector(".active");
    // active.classList.remove("active")
    //M2
    cardList.forEach(card => {
        card.classList.remove("active");
    })
}