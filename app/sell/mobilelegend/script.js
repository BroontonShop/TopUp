var hamburger = document.getElementsByClassName('hamburger');
var container = document.getElementById('container');
var button = document.querySelectorAll('.img-button div');
var slide = document.getElementById('figure');
var content = document.getElementById('content');
var diamond = document.querySelectorAll('.list-diamond label');
var harga = document.querySelectorAll('.metode-pembayaran .harga');
var price = document.getElementById('price');

let open = false;
const clickHandle = () => {
    open = !open;
    open ? container.style = "height: "+ (2*content.offsetHeight + 6) +"px" : container.style = "height: "+ content.offsetHeight+ "px";
};


for(let a = 0; a<diamond.length; a++){

    let duit = ''; 
    
    if(a == 0){
        duit = '19.000'; // 86 diamond
    }else if(a == 1){
        duit = '37.500'; // 172 diamond
    }else if(a == 2){
        duit = '58.000'; // 257 diamond
    }else if(a == 3){
        duit = '78.000'; // 344 diamond
    }else if(a == 4){
        duit = '96.000'; // 429 diamond
    }else if(a == 5){
        duit = '116.000'; // 514 diamond
    }else if(a == 6){
        duit = '156.000'; // 706 diamond
    }else if(a == 7){
        duit = '195.000'; // 878 diamond
    }else if(a == 8){
        duit = '215.000'; // 963 diamond
    }else if(a == 9){
        duit = '58.000'; //  1412diamond
    }else if(a == 10){
        duit = '58.000'; // 2195 diamond
    }else if(a == 11){
        duit = '58.000'; // 2901 diamond
    }else if(a == 12){
        duit = '58.000'; // 3688 diamond
    }else if(a == 13){
        duit = '58.000'; // 4394 diamond
    }else if(a == 14){
        duit = '58.000'; // 5532 diamond
    }else if(a == 15){
        duit = '58.000'; // 2988 diamond
    }else if(a == 16){
        duit = '58.000'; // starlight member
    }else if(a == 17){
        duit = '58.000'; // twilight pass
    }else if(a == 18){
        duit = '58.000'; // starlight member plus
    }
    

    diamond[a].onclick = function(){
        
        price.setAttribute('value',duit);
        for(let b = 0; b<harga.length; b++){

            harga[b].innerHTML = "Rp " + duit ;
            
            harga[b].classList.add('harga-active');
        }
    }
}

for(let a = 0; a<button.length; a++){

    button[a].onclick = function(){
        
        for(let x = 0; x<button.length; x++){
            button[x].classList.remove('active');
        }

        button[a].classList.add('active');
        slide.style =   'left : -' + (100 * a) + '%';
        
    } 

}