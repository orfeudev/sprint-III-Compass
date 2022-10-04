const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hour = String(dateToday.getHours()) .padStart(2,"0");
    let min = String(dateToday.getMinutes()) .padStart(2,"0");
    
    horas.textContent = hour;
    minutos.textContent = min;
    
    
});


const calendario = document.getElementById('data');
calendario.textContent = data();

function data(){
    var dateToday = new Date(); 
    var dia = dateToday.getDate();
    var mes = dateToday.toLocaleString("pt-BR", { month: "long" });
    var ano = dateToday.getFullYear();

    return dia + " de " + mes + " de " + ano;

}

