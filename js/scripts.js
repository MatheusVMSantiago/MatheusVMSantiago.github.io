function CopyTexto(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('deubom' + r);
    } catch (err) {
        console.log('deuruim');
    }
}

function abrirJanelaCliente() {
  
  var largura = 600;
  var altura = 400;
 
  window.open('tratativasClientes.html', '', 'width=' + largura + ',height=' + altura + ',resizeble=no');
}

function abrirJanelaTrack() {
  
    var largura = 600;
    var altura = 400;
   
    window.open('tratativasTrack.html', '', 'width=' + largura + ',height=' + altura  + ',resizeble=no');

  }
