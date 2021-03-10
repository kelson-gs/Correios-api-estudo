const Correios = require('node-correios');
const correios = new Correios();

let args = {
    nCdServico: '40010',
    sCepOrigem: '22270010',
    sCepDestino: '89010000',
    nVlPeso: 1,
    nCdFormato: 1,
    nVlComprimento: 27,
    nVlAltura: 8,
    nVlLargura: 10,
    nVlDiametro: 18
}

function tratamentoDeErro(){
    // uma representação de tratamento de erros

    if( request.form("peso") = "" ){
        peso = "0"
    } else {
        peso = request.form("peso")
    }

    if (request.form("comprimento") === ""){ 
        comprimento = "0"
    }else{
        comprimento = request.form("comprimento")
    }

    if (request.form("altura") = ""){
        altura = "0"
    }else{
        altura = request.form("altura")
    }

    if( request.form("largura") = ""){
        largura = "0"
    }else{
        largura = request.form("largura")
    }

    if( request.form("diametro") = ""){
        diametro = "0"
    }else{
        diametro = request.form("diametro")
    }


    if( request.form("valordeclarado") = "" ){
        valordeclarado = "0"
    }
}

// calcula o preço do frete
correios.calcPreco(args)
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
});

// calcula o preço e o prazo do frete e entrega
correios.calcPrecoPrazo(args)
.then( result => {
    console.log(result);
} )
.catch( error => {
    console.log(error);
} );

// consulta o cep
correios.consultaCEP({ cep: '00000000' })
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
});