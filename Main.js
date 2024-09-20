let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('Generar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz0123456789'
let password = '';

function Generar(){

    let NumeroDigitado = parseInt (cantidad.value);
    if (cantidad < 6){
        alert("la cantidad de caracteres tiene que ser mayor o igual a 6.");
    }
    

    for(let i = 0; i < NumeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password+=caracterAleatorio;

    }
    
    console.log('password generado: ' + password);

}

