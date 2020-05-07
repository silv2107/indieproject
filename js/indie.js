const whopper = document.getElementById("burger-box");
// const span = document.querySelectorAll(".burger-box span");

// const contact = document.getElementById('button');

whopper.addEventListener("click", menuRollOut);
// contact.addEventListener("click", contactRollOut)

// ------------------the nav functionality in header---------------
function menuRollOut() {
    const navBox = document.querySelector("nav");
    navBox.classList.toggle("visible");
}

//-------------------the collapsable div in contact in footer-------
// function contactRollOut() {
//     const contactBox = document.getElementById("address");
//     contactBox.classList.toggle("address");
// }



let silviuSlideshow = (function() {
    const slideImage = document.querySelector("#slidePict");

    let pause = false;
    const picts = ["./img/hiking12.jpg", "./img/training13.jpg", "./img/training12.jpg"];

    let index = 0;


    // dette er en fælles function som bruges både til knap og mouseover functionalitet
    function showPict(pictIndex) {
        slideImage.src = picts[pictIndex];                       //ændrer picts
    }

    // button functionalitet----------------------------------------
    // document.querySelector('#buttonLeft').addEventListener('click', ()=> {
    //     index--;
    //     if(index < 0) {
    //         index = picts.length - 1;
    //     }
    //     showPict(index);
    // });

    // document.querySelector('#buttonRight').addEventListener('click', ()=> {
    //     index++;
    //     if(index > picts.length - 1) {
    //         index = 0;
    //     }
    //     showPict(index);
    // });

    //---------------------------------------------------------------------


    
    slideImage.addEventListener('mouseover', ()=> {
        pause = true;
    })

    slideImage.addEventListener('mouseout', ()=> {
        pause = false;
    })

    setInterval(()=> {
        if(pause) {
            return;
        }

        index++;
        if(index > picts.length - 1) {
            index = 0;
        }
        showPict(index)
    }, 2000)

    return {'showPict': showPict};

})();