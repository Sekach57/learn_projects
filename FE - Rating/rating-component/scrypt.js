let buttonClicked = document.querySelector(".wrapper__button")
let scoreClicked = document.querySelectorAll(".wrapper__marks_score")
let clickedScore = document.getElementsByClassName('wrapper__marks_score clicked')
let ratingScore = 3;


scoreClicked.forEach(btn => {
    btn.addEventListener('click', function() {
        scoreClicked.forEach(btn => btn.classList.remove("clicked"))
        this.classList.add("clicked")    
        ratingScore = btn.innerHTML
    })
})




// buttonClicked.addEventListener('click', function() {
   
// }
// )
    
