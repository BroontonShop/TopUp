var hamburger = document.getElementsByClassName('hamburger');
var container = document.getElementById('container');
var button = document.querySelectorAll('.img-button div');
var slide = document.getElementById('figure');
var content = document.getElementById('content');

let open = false;
const clickHandle = () => {
    open = !open;
    open ? container.style = "height: "+ (2*content.offsetHeight + 6) +"px" : container.style = "height: "+ content.offsetHeight+ "px";
};

console.log(content.offsetHeight);

let multiply = 0;

setInterval(()=>{
    if(multiply == 3){
        multiply = 0;
    }
    slide.style = 'left: -' + (100 * multiply) + '%';
    multiply++;
}, 5000)

for(let a = 0; a<button.length; a++){

    button[a].onclick = function(){
        
        for(let x = 0; x<button.length; x++){
            button[x].classList.remove('active');
        }

        button[a].classList.add('active');
        slide.style =   'left : -' + (100 * a) + '%';
        
    } 

}