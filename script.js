// On button click, change class to .active, and expands in position

const cardList = document.querySelectorAll(".card");
console.log("cardList", cardList);

const cardListKeys= Object.keys(cardList);

cardListKeys.map(key => {
    cardList[key].addEventListener("click", () => {
        const cardActive = document.querySelector(".active");
        cardActive.classList.remove("active");
        cardList[key].classList.add("active");
    });
})