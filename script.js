var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });






  const move1= () => {
    var elem = document.getElementById("mybar1");
    var width = 1;
    var id = setInterval(frame, 10)

    function frame(){
      if(width >= 80){
        clearInterval(id);
      }else{
        width++;
        elem.style.width = width + "%";
        document.getElementById("incvalue1").innerHTML = width + "%";
      }
    }

  }

  const move2 = () => {
    var elem = document.getElementById("mybar2");
    var width = 1;
    var id = setInterval(frame, 10)

    function frame(){
      if(width >= 75){
        clearInterval(id);
      }else{
        width++;
        elem.style.width = width + "%";
        document.getElementById("incvalue2").innerHTML = width + "%";
      }
    }
  }



  const move3 = () => {
    var elem = document.getElementById("mybar3");
    var width = 1;
    var id = setInterval(frame, 10)

    function frame(){
      if(width >= 78){
        clearInterval(id);
      }else{
        width++;
        elem.style.width = width + "%";
        document.getElementById("incvalue3").innerHTML = width + "%";
      }
    }
  }



  const move4 = () => {
    var elem = document.getElementById("mybar4");
    var width = 1;
    var id = setInterval(frame, 10)

    function frame(){
      if(width >= 80){
        clearInterval(id);
      }else{
        width++;
        elem.style.width = width + "%";
        document.getElementById("incvalue4").innerHTML = width + "%";
      }
    }
  }


  const move5 = () => {
    var elem = document.getElementById("mybar5");
    var width = 1;
    var id = setInterval(frame, 10)

    function frame(){
      if(width >= 70){
        clearInterval(id);
      }else{
        width++;
        elem.style.width = width + "%";
        document.getElementById("incvalue5").innerHTML = width + "%";
      }
    }
  }




  
  const move6 = () => {
    var elem = document.getElementById("mybar6");
    var width = 1;
    var id = setInterval(frame, 10)

    function frame(){
      if(width >= 75){
        clearInterval(id);
      }else{
        width++;
        elem.style.width = width + "%";
        document.getElementById("incvalue6").innerHTML = width + "%";
      }
    }
  }