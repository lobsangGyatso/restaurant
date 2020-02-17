const navbar=document.getElementById("mainNav");
console.log(navbar)

// window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mainNav").style.background = "white"
   
  } else {
     document.getElementById("mainNav").style.background = "transparent"
  }
}


window.addEventListener('scroll', scrollFunction)