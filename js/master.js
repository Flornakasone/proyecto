/*NAVBAR SCROLL*/
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});


/*CONTACTO VALIDACION*/
const form = document.querySelector("#info")
const nombre = document.querySelector("#nombre")
const nombreHelp = document.querySelector("#nombreHelp")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")

form.addEventListener("submit",(event) => {
    event.preventDefault()
    if (nombre.value === "" || email.value === ""){
        if(nombre.value === ""){
            nombreHelp.innerText = "Por favor, rellenar este campo."
        }
        if(email.value === ""){
            emailHelp.innerText = "Por favor, rellenar este campo."
        }
    }else{
        form.submit()
    }

});

/*ADD TO CART */
$("#cart").click(flip);

function flip() {
  $("#cart").addClass("flipped");
  $("#cart").addClass("added");
  $(".backside").addClass("show");
  $(".front").addClass("hide");
}

