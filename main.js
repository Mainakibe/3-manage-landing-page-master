// mobile nav menu
const hamburger =document.querySelector('.ham')
const closeIcon = document.querySelector('.close')
const link = document.querySelector('.mobile-nav')

// hamburger icon 
hamburger.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{   
        link.classList.add('showMenu')    
        closeIcon.style.display='block'
        hamburger.style.display='none'
    }  
})

//close icon
closeIcon.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{
            link.classList.add('showMenu')
            closeIcon.style.display='block'
            hamburger.style.display='none'
    } 
})

// form
const form =document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email= form['email'].value

    if(email===''){
        failureError('email','Email cannot be empty')
    }
    else if(!isEmailValid(email)){
        failureError('email','Please insert a valid email')
    }
    else{
        success('email');
    }
})
function failureError(input,message){
        const formInput =form[input].parentNode
        formInput.classList.add('error')

        const span=formInput.querySelector('.error-msg')
        span.innerText=message
        span.style.opacity='1'
}
function success(input){
        const formInput =form[input].parentNode
        formInput.classList.remove('error')
        const span=formInput.querySelector('span')
        span.style.opacity='0'
}
function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// slider
const slider = document.querySelector('.test-slider')

let pressed = false;
let startx;
let scrollLeft;

slider.addEventListener('mousedown',(e)=>{
    pressed=true;
    slider.style.cursor='grabbing'
    startx=e.pageX-slider.offsetLeft;
    console.log(startx);
    scrollLeft=slider.scrollLeft;
})

slider.addEventListener('mouseleave',()=>{
    pressed=false;
    slider.style.cursor='default';
})

slider.addEventListener('mouseenter',()=>{
    slider.style.cursor='grab'
})

slider.addEventListener('mouseup',()=>{
    pressed=false
    slider.style.cursor='grab'
})

slider.addEventListener('mousemove',(e)=>{
    if(!pressed) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft
    console.log(x, startx);
    const walk = x- startx;
    console.log(walk);
    slider.scrollLeft= scrollLeft - walk
    console.count(pressed);
    console.log(startx);
})
