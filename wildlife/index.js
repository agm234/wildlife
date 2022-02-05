const arrowRight = document.getElementById('right');
const arrowLeft = document.getElementById('left');
const sliderItemsPets = document.querySelectorAll('.slider_item');
const slideWidthPets = document.querySelector('.slider_item_img').clientWidth;
const petWrapper = document.querySelector('.slider_wrapper_slides');
let currSlidePets = 0;
let currSlidePets1 = 0;
let offsetPets = 372;
let intervalPets = (petWrapper.clientWidth - (slideWidthPets * (sliderItemsPets.length))) / (sliderItemsPets.length - 1);

function rightPets() {
    currSlidePets1++;
    if (currSlidePets < sliderItemsPets.length - 1) {
            document.querySelector('.slider_wrapper').scrollBy(offsetPets, 0);
    }
    if (currSlidePets1 === 3) {
        currSlidePets1 = 0;
        currSlidePets = 0;
        document.querySelector('.slider_wrapper').scrollBy(-(slideWidthPets + intervalPets) * sliderItemsPets.length, 0);
    }


}
function leftPets() {
    currSlidePets1--;
    console.log(offsetPets)
    if (currSlidePets > 0) {
        currSlidePets--;
        
        if (currSlidePets < 3) {
            document.querySelector('.slider_wrapper').scrollBy(-offsetPets, 0);
        }
    }
    if (currSlidePets1 === -1) {
        currSlidePets1 = 3;
        currSlidePets = 3;
       
        document.querySelector('.slider_wrapper').scrollBy((slideWidthPets + intervalPets) * sliderItemsPets.length, 0);
    }


}


arrowRight.addEventListener('click', rightPets);
arrowLeft.addEventListener('click', leftPets);

