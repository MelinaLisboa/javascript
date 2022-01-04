function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var horaAtual = data.getHours();
    
    msg.innerHTML = `Agora são ${horaAtual} horas.`

    if(horaAtual >=0 && horaAtual < 12){
        img.src = 'manha.png';
        document.body.style.background = '#e2cd9f';
    }else if(horaAtual >= 12 && horaAtual < 18){
        img.src = 'tarde.png';
        document.body.style.background = '#b9846f';
    }
    else{
        img.src = 'noite.png';
        document.body.style.background = '#515154';
    }
}
