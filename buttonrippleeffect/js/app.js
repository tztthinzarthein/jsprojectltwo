// console.log("hey");
const buttons = document.querySelectorAll('.btnripple');
buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click',function (e){
        // console.log("hay");
        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);
        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btntop,btnleft);
        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        //Create circle
        const circle = document.createElement('span');
        // circle.className = "circle";
        circle.classList.add('circle');
        // console.log(circle);
        circle.style.top = yinside + 'px';
        circle.style.left = xinside + 'px';

        // e.target.appendChild(circle);
        this.appendChild(circle);
        setTimeout(()=>{
            circle.remove();
        },600);
    });
});