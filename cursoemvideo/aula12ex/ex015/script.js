function calcular(){

var fano = document.getElementById('txtano');
var res = document.querySelector('div#res');
var dataAtual = new Date();

if(fano.value.length == 0 || fano.value > dataAtual.getFullYear()){
    window.alert('[ERRO] Verifique os dados e tente novamente!');
}
else{
    var fsex = document.getElementsByName('radsex');
    var idade = dataAtual.getFullYear() - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if(fsex[0].checked){
        genero = 'Masculino';
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'bebe_menino.png');
        } else if (idade < 21){
            img.setAttribute('src','jovem_menino.png');
        }else if (idade < 50){
            img.setAttribute('src','homem.png');
        }else{
            img.setAttribute('src','idoso.png');
        }
    }
    else{
        genero = 'Feminino';
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'bebe_menina.png');
        } else if (idade < 21){
            img.setAttribute('src','jovem_menina.png');
        }else if (idade < 50){
            img.setAttribute('src','mulher.png');
        }else{
            img.setAttribute('src','idosa.png');
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
}

}



