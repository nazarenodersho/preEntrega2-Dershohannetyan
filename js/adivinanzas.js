console.log("Estamos online");

// Adivinanzas y sus respuestas:

   let adivinanzas = [

    {
      pregunta: 'Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera.',
      respuesta: 'La pera'
    },
    {
      pregunta: 'Me encuentras en la noche, brillando en el cielo oscuro. Soy un punto de luz en medio de la inmensidad. ¿Quién soy?',
      respuesta: 'La estrella'
    },
    {
      pregunta: 'Alto como un pino, pesa como un comino.',
      respuesta: 'El humo'
    },
    {
      pregunta: 'Largo y delgado como un palo, siempre baila al son del viento. ¿Qué soy?',
      respuesta: 'La bandera'
    }

  ];
  
// Bienvenida:

  alert("Bienvenido usuario! jugamos a las adivinanzas?");
  
// Funcion del juego:

  function jugarAdivinanza() {

    let adivinanzaActual;
    let respuestaUsuario;
    let intentos = [];
  
    for (var i = 0; i < adivinanzas.length; i++) {

      adivinanzaActual = adivinanzas[i];
      do {
        respuestaUsuario = prompt(adivinanzaActual.pregunta);
  
        if (respuestaUsuario === null || respuestaUsuario === '') {
          alert('Debes colocar una respuesta!');
        }
      } while (respuestaUsuario === null || respuestaUsuario === '');
  
      intentos.push({
        pregunta: adivinanzaActual.pregunta,
        respuestaUsuario: respuestaUsuario,
        respuestaCorrecta: adivinanzaActual.respuesta
      });
    }
  
    mostrarResultados(intentos);
  }
  
// Funcion de los resultados del juego:

  function mostrarResultados(intentos) {
    let resultados = '';
  
    for (var i = 0; i < intentos.length; i++) {
      resultados += 'Adivinanza: ' + (i + 1) + ': ' + intentos[i].pregunta + '\n';
      resultados += 'Tu respuesta: ' + intentos[i].respuestaUsuario + '\n';
      resultados += 'Respuesta correcta: ' + intentos[i].respuestaCorrecta + '\n\n';
    }
  
    alert('Fin del juego. Estos son tus intentos:\n\n' + resultados);
  }
  
// Llamado a las funciones de bienvenida e iniciar el juego:

  jugarAdivinanza();