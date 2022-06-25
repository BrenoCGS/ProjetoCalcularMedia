let nota1 = parseFloat(document.getElementsByTagName("input")[0].value);
let nota2 = parseFloat(document.getElementsByTagName("input")[1].value);





function calcMedia(){
    
    let nota1 = parseFloat(document.getElementsByTagName("input")[0].value);
    let nota2 = parseFloat(document.getElementsByTagName("input")[1].value);

    return (nota1 + nota2) / 2


}


function mostrarMedia(){
    let resultado = document.getElementById("valor");
    

    resultado.innerHTML = `<h2>Sua média é - ${calcMedia()}</h2>
                            `;

     if(calcMedia() == 10){
     resultado.innerHTML += `<h2>Você passou com nota máxima, parabéns!</h2>`
     }else if(calcMedia() >= 7 && calcMedia() <= 9.9){
     resultado.innerHTML += `<h2>Você passou, parabéns!</h2>`
     }else{
     resultado.innerHTML += `<h2>Parece que você não passou, estude mais um pouco!</h2>`
     };
   
    

}

