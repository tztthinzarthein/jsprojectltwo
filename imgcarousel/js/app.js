// UI
const imgcarousel = document.getElementById('imgcarousel');
const imgs = document.querySelectorAll('#imgcarousel img');
// console.log(imgs);
const leftbtn = document.getElementById('left'),
      rightbtn = document.getElementById('right');

let idx = 0;

rightbtn.addEventListener('click',()=>{
    idx++;
    // console.log(idx);
    changeimage();
    resetinterval();
});
leftbtn.addEventListener('click',()=>{
    idx--;
    // console.log(idx);
    changeimage();
    resetinterval();
});

function changeimage(){
    if(idx > imgs.length - 1){
        idx =0;

    }else if(idx < 0){
        idx = imgs.length -1 ;

    }
    // console.log(idx);
    imgcarousel.style.transform =`translate(${-idx * 500}px)`;
}

let intervel = setInterval(imgrun,2000);

function imgrun(){
    idx++;
    changeimage();
}
function resetinterval(){
    clearInterval(intervel);
    intervel = setInterval(imgrun,2000);
}