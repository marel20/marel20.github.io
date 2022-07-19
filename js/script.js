$('#github').on('mouseover', fnCambiaBtn);
$('#git').on('mouseout', fnCambiaBtn2);
$('#whatsapp').on('mouseover', fnCambiaBtn3);
$('#wsp').on('mouseout', fnCambiaBtn4);
$('#correo').on('mouseover', fnCambiaBtn5);
$('#correoA').on('mouseout', fnCambiaBtn6);
$('#linkedin').on('mouseover', fnCambiaBtn7);
$('#linked').on('mouseout', fnCambiaBtn8);

function fnCambiaBtn(){
$('#github').removeClass('visible').addClass('oculto');
$('#git').removeClass('oculto').addClass('visible');
}
function fnCambiaBtn3(){
    $('#whatsapp').removeClass('visible').addClass('oculto');
    $('#wsp').removeClass('oculto').addClass('visible');
}
function fnCambiaBtn5(){
    $('#correo').removeClass('visible').addClass('oculto');
    $('#correoA').removeClass('oculto').addClass('visible');
}
function fnCambiaBtn7(){
    $('#linkedin').removeClass('visible').addClass('oculto');
    $('#linked').removeClass('oculto').addClass('visible');
}

function fnCambiaBtn2(){
$('#git').removeClass('visible').addClass('oculto');
$('#github').removeClass('oculto').addClass('visible');
}
function fnCambiaBtn4(){
    $('#wsp').removeClass('visible').addClass('oculto');
    $('#whatsapp').removeClass('oculto').addClass('visible');
}
function fnCambiaBtn6(){
    $('#correoA').removeClass('visible').addClass('oculto');
    $('#correo').removeClass('oculto').addClass('visible');
}
function fnCambiaBtn8(){
    $('#linked').removeClass('visible').addClass('oculto');
    $('#linkedin').removeClass('oculto').addClass('visible');
}


const nav = document.querySelector('nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
if(window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
} else {
    nav.classList.remove('active')
}
}

/*------Start sidenav----------*/
    
$("#button-hiden1").on("click",fncerrarsidenav1);
$("#button-hiden2").on("click",fncerrarsidenav2);
$("#button-hiden3").on("click",fncerrarsidenav3);
$("#button-hiden4").on("click",fncerrarsidenav4);
$("#btnHamburguerOff").on("click", fnmenuHamburguerOff);
$("#btnHamburguerOn").on("click", fnmenuHamburguerOn);

function fncerrarsidenav1(){
    $(location).attr('href','#home')
    $('#btnHamburguerOff').removeClass('oculto').addClass('visible');
    //console.log("1");
}
function fncerrarsidenav2(){
    $(location).attr('href','#about')
    $('#btnHamburguerOff').removeClass('oculto').addClass('visible');
    //console.log("2");
}
function fncerrarsidenav3(){
    $(location).attr('href','#projects')
    $('#btnHamburguerOff').removeClass('oculto').addClass('visible');
    //console.log("3");
}
function fncerrarsidenav4(){
    $(location).attr('href','#contact')
    $('#btnHamburguerOff').removeClass('oculto').addClass('visible');
    //console.log("4");
}

function fnmenuHamburguerOff(){
    $('#btnHamburguerOff').removeClass('visible').addClass('oculto');
}

function fnmenuHamburguerOn(){
    $('#btnHamburguerOff').removeClass('oculto').addClass('visible');
}
/*----------End sidenav---------*/

