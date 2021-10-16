//UI
const range = document.getElementById('range');

range.addEventListener('input',(e)=>{
    // console.log("hyy");
    // console.log(e.target);
    const value = +e.target.value;
    // console.log(value);
    // console.log(typeof value);

    const label = e.target.nextElementSibling;

    const rangewidth = getComputedStyle(e.target).getPropertyValue('width');
    // console.log(rangewidth);
    // console.log(rangewidth.length);

    const labelwidth = getComputedStyle(label).getPropertyValue('width');
    // console.log(labelwidth);
    // console.log(labelwidth.length);

    // px ko m lo chin lo yay tr(px is 2 words => length-2 jux 300 htwk ag)
    const numrangewith = rangewidth.substring(0,rangewidth.length-2);
    // console.log(numrangewith);

    const numlabelwidth = labelwidth.substring(0,labelwidth.length-2);
    // console.log(numlabelwidth);

    //String moe integer pyg
    const min = +e.target.min;
    const max = +e.target.max;
    // console.log(min,max);

    //NEW FORMULA
    // const leftright = value * (numrangewith / max) - numlabelwidth/2;
    // or
    const leftright = value * (numrangewith / max) - (numlabelwidth/2) + scale(value,min,max,10,-10);

    // console.log(leftright);
    label.style.left = `${leftright}px`;
    label.textContent = value;
});

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}