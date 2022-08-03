function carregar(){
    //var msg = window.document.getElementById('msg')
    //var img = window.document.getElementById('imagem')
    //var data = new Date()
    //var hora = data.getHours()
    
   
   // msg.innerHTML = ` menssagem`
    if(hora >= 0 && hora < 12) {
        //bom dia 
        //img.src = 'MANHA.png'
        //document.body.style.background = 'numero da cor'
    }else if (hora >= 12 && hora < 18) {
        //boa tarde
        //img.src = ' TARDE.png'
        //document.body.style.background = 'numero da cor'
    }else {
        //boa NOITE
        //img.src = ' NOITE.png'
        //document.body.style.background ='numero da cor'
    }