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