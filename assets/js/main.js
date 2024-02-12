
// TEXTO ESCRITURA

function escribirTexto(elemento, texto, velocidad) {
    let i = 0;
    const intervalo = setInterval(() => {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, velocidad);
}


// Obtén el elemento y define el texto y la velocidad
const elementoParaEscribir = document.getElementById('texto');
const textoParaEscribir = `
Mi amor

A lo largo de estos ocho años juntos, 
hemos construido algo verdaderamente especial, 
una historia entrelazada con amor, 
desafíos, y sobre todo, 
un compromiso inquebrantable el uno con el otro. 
Aunque hemos enfrentado nuestras tormentas, 
discusiones y desacuerdos, cada uno de estos momentos 
ha sido un peldaño más en la escalera de nuestra vida juntos, 
fortaleciéndonos de maneras que nunca imaginamos.

Sé que a veces chocamos, que nuestras actitudes y 
opiniones pueden discrepar, pero quiero que sepas 
que esto nunca ha cambiado el amor profundo que siento por ti. 
Cada discusión, cada diferencia, me enseña algo nuevo sobre ti, 
sobre nosotros, y sobre cómo podemos crecer juntos. 
Son estos desafíos los que nos ayudan a crecer, 
los que nos mantienen buscando, aprendiendo y, 
sobre todo, amando con más fuerza.

Amo todo de ti, incluso los momentos en que no estamos de acuerdo, 
porque cada uno de ellos es una oportunidad 
para conocernos y amarnos aún más profundamente.
Me encanta poder mirarte a los ojos y ver el reflejo de nuestra vida juntos, 
acariciar tu cabello y sentir la paz que solo tu presencia puede brindarme. 
Tus besos, el calor de dormir a tu lado, 
todo lo que hemos construido y lo que aún nos espera,  
nuestra familia propia y una vida compartida.

Así que, a pesar de nuestras peleas y discusiones, 
quiero que sepas que te amo más de lo que las palabras pueden expresar. 
Eres mi todo  y por todo lo que eres, por todo lo que haces, 
te prometo seguir tratándote con todo el amor y el respeto que mereces, 
como la princesa que eres para mí.

Así que aquí estamos, resistiendo las pruebas del tiempo, 
más fuertes, más unidos. Te prometo que, 
sin importar los desafíos que enfrentemos, 
siempre encontraré la manera de regalonearte, 
de hacerte sentir valorada y amada, 
porque eso es lo menos que mereces.

Con todo mi amor, ahora y siempre de Tocho para Tochi <3.`;
const velocidadDeEscritura = 100; // Velocidad en milisegundos

// Llama a la función
escribirTexto(elementoParaEscribir, textoParaEscribir, velocidadDeEscritura);
