const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


$('#modebutton').click(function() {
    $(this).find('i').toggleClass('fa-regular fa-solid');
    // <i class="fa-regular fa-lightbulb-slash"></i>
    //<i class="fa-solid fa-sun"></i>
    //
})