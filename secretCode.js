        // UN CODE (PAS SI) SECRET 
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            65: 'a',
            66: 'b'
          };
          
          // La séquence du code secret
          var secretCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
          
          // a variable to remember the 'position' the user has reached so far.
          var secretCodePosition = 0;
          
          // Ajouter un event d'écoute 'keydown'
          document.addEventListener('keydown', keyDown);
          
          function keyDown(e) {
            // Obtenir la valeur de key dans l'objet allowedKeys
            var key = allowedKeys[e.keyCode];
            // Obtenir la valeur requise dans le code secret
            var requiredKey = secretCode[secretCodePosition];
          
            // Comparer le keycode de "key" avec le keycode requis
            if (key == requiredKey) {
          
              // Si VRAI, alors incrémentation vers le keycode suivant
              secretCodePosition++;
          
              // Si la valeur de secret position est égale a la longeur du tableau du code secret
              if (secretCodePosition == secretCode.length) {
                // Active le cheat code ! (Licorne ou autre)
                activateCheats();
                // Si tout est bon, remettre la position de "secretCodePosition" à zéro
                secretCodePosition = 0;
              }
            } else {
              // Si FAUX, remettre la position de "secretCodePosition" à zéro
              secretCodePosition = 0;
            }
          };
          
          function activateCheats() {
            if(active == true){
              document.documentElement.style.setProperty('--case-color', 'rgb(235, 0, 0)');
              document.documentElement.style.setProperty('--detail-case-color', 'white');
              document.documentElement.style.setProperty('--case-relief-color', 'red');
              resetPokemon();

              context.clearRect(0, 0, canvas.width, canvas.height);
              redLed.style.backgroundColor = "red";
              onOffButton.innerHTML = "OFF";
              canvas.style.backgroundColor = "#c6ccb2";
                // Premier texte : SIMPLON.CO
                context.font = "bold 35px Roboto, Arial, serif";
                context.fillStyle = linearGradient;
                context.fillText('SIMPLON.CO', 40, 75);
                // Deuxième texte : P2 Montrouge®
                context.font = "bold 15px Roboto, Arial, serif";
                context.fillStyle = "black";
                context.fillText('Promo 2 Montrouge®', 75, 110);
              startAudio.play();
              active = false;
          } else {
              redLed.style.backgroundColor = "";
              canvas.style.backgroundColor = "";
              onOffButton.innerHTML = "ON";
              // Permet d'effacer le contenu de Canvas de la largeur à la hauteur du canvas
              context.clearRect(0, 0, canvas.width, canvas.height);
              active = true;
              activateCheats()
          }
          };
          