var hamburger = document.getElementsByClassName('hamburger');
var container = document.getElementById('container');
var button = document.querySelectorAll('.img-button div');
var slide = document.getElementById('figure');
var content = document.getElementById('content');
var diamond = document.querySelectorAll('.list-diamond label');
var harga = document.querySelectorAll('.metode-pembayaran .harga');
var price = document.getElementById('price');
var konfirmasi = document.getElementById('konfirmasi');
var sendData = document.getElementById('submit-data');
var dataForm = document.getElementById('data-form');

let konfirm = () =>{
    konfirmasi.style.display = "flex";
}

let konfirmClose = () =>{
    konfirmasi.style.display = "none";
}

let konfirmSend = () => {

    dataForm.submit();
} 

dataForm.addEventListener('submit', (e)=>{

    e.preventDefault();
    
    let paket = document.getElementsByName('Paket')[0];
    let userId = document.getElementsByName('Id')[0];
    let pembayaran = document.getElementsByName('pembayaran')[0];
    let diamond = document.getElementsByName('diamond')[0];
    let dataHarga = document.getElementsByName('harga')[0];
    let noWa = document.getElementsByName('noWa')[0];
    
    document.getElementById('konfirmasi-id').innerHTML = userId.value;
    document.getElementById('konfirmasi-diamond').innerHTML = diamond.value ;
    document.getElementById('konfirmasi-harga').innerHTML = dataHarga.value ;
    document.getElementById('konfirmasi-wa').innerHTML =  noWa.value ;
    document.getElementById('konfirmasi-pembayaran').innerHTML = pembayaran.value ;

    konfirm();
    
})

let open = false;
const clickHandle = () => {
    open = !open;
    open ? container.style = "height: "+ (2*content.offsetHeight + 6) +"px" : container.style = "height: "+ content.offsetHeight+ "px";
};


for(let a = 0; a<diamond.length; a++){

    let duit = ''; 
    
    if(a == 0){
        duit = '1.500'; // 86 diamond
    }else if(a == 1){
        duit = '2.500'; // 172 diamond
    }else if(a == 2){
        duit = '5.000'; // 257 diamond
    }else if(a == 3){
        duit = '6.500'; // 344 diamond
    }else if(a == 4){
        duit = '12.000'; // 429 diamond
    }else if(a == 5){
        duit = '15.000'; // 514 diamond
    }else if(a == 6){
        duit = '18.000'; // 706 diamond
    }else if(a == 7){
        duit = '22.000'; // 878 diamond
    }else if(a == 8){
        duit = '23.000'; // 963 diamond
    }else if(a == 9){
        duit = '52.000'; //  1412diamond
    }else if(a == 10){
        duit = '57.000'; // 2195 diamond
    }else if(a == 11){
        duit = '70.000'; // 2901 diamond
    }else if(a == 12){
        duit = '105.000'; // 3688 diamond
    }else if(a == 13){
        duit = '115.000'; // 4394 diamond
    }else if(a == 14){
        duit = '126.000'; // 5532 diamond
    }else if(a == 15){
        duit = '276.000'; // 2988 diamond
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