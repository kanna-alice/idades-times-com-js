function verificar() {

    document.body.classList.add('fundo-rgb');
    var btn = document.getElementById("verificar");
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('spawn')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'dark'
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'https://i1-e.pinimg.com/736x/53/2c/c3/532cc3018e43116023db2f106c55ae8a.jpg'
                document.body.classList.remove('fundo-rgb'); 
                document.body.style.background = 'rgb(0, 110, 255)';
            } else if (idade < 21) {
                //jovem
                document.body.style.background = 'rgb(0, 255, 4)';
                document.body.classList.remove('fundo-rgb');
                img.src = 'https://i1-e.pinimg.com/736x/2a/46/fe/2a46fe660f54b02587e0eb544dcbd887.jpg'
            } else if (idade < 50) {
                //adulto
                btn.style.background = 'rgb(255, 255, 0)';
                document.body.style.background = 'rgb(255, 255, 0)';
                document.body.classList.remove('fundo-rgb');

                img.src = 'https://i.pinimg.com/736x/f8/e1/9e/f8e19ea547900b64821149adf9a98601.jpg'
            } else if (idade < 120) {
                //idoso
                document.body.style.background = 'rgb(255, 0, 0)';
                document.body.classList.remove('fundo-rgb');
                img.src = 'https://i1-e.pinimg.com/736x/53/2c/c3/532cc3018e43116023db2f106c55ae8a.jpg'
            }
            } else {
                //imortal
                btn.style.background = 'fundo-rgb';
                img.src = 'https://i.pinimg.com/736x/f8/e1/9e/f8e19ea547900b64821149adf9a98601.jpg'
                document.body.classList.add('fundo-rgb')
                res.innerHTML = "voce e um ser que compreende o infinito e o eterno da vida, parabens por ser imortal"
            
            }}


            if (fsex[1].checked) {
            genero = 'white'
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'https://i1-e.pinimg.com/736x/53/2c/c3/532cc3018e43116023db2f106c55ae8a.jpg'
                document.body.classList.remove('fundo-rgb');
                document.body.style.background = 'rgb(0, 110, 255)';
                btn.style.background = 'rgb(0, 110, 255)';
            } else if (idade < 21) {
                //jovem
                img.src = 'https://i1-e.pinimg.com/736x/2a/46/fe/2a46fe660f54b02587e0eb544dcbd887.jpg'
                document.body.classList.remove('fundo-rgb');
                document.body.style.background = 'rgb(0, 255, 4)';
                btn.style.background = 'rgb(0, 255, 4)';
            } else if (idade < 50) {
                //adulto
                img.src = 'https://i1-e.pinimg.com/736x/06/d7/c4/06d7c4e96361c464221741731c422160.jpg'
                document.body.classList.remove('fundo-rgb');
                document.body.style.background = 'rgb(255, 255, 0)';
                btn.style.background = 'rgb(255, 255, 0)';
            } else if (idade < 120) {
                //idoso
                img.src = 'https://i.pinimg.com/736x/7c/40/94/7c409468a4c6b3a4c9e6da62290cead5.jpg'
                document.body.classList.remove('fundo-rgb');
                document.body.style.background = 'rgb(255, 0, 0)';
                btn.style.background = 'rgb(255, 0, 0)';
            } else {
                //imortal
                img.src = 'https://i1-e.pinimg.com/736x/53/2c/c3/532cc3018e43116023db2f106c55ae8a.jpg'
                document.body.classList.add('fundo-rgb')
                btn.style.background = 'fundo-rgb';
                res.innerHTML = "voce e um ser que compreende o infinito e o eterno da vida, parabens por ser imortal"
            }}
        
            res.style.textAlign = 'center'    
            res.innerHTML = `Você tem ${idade} anos e é do estilo ${genero}.`;
            res.appendChild(img)
        
        //audio = new Audio("star.mp3")
        //audio.play()
} 