        // POUR CHANGER LA GAMEBOY CASE
        // Cibler la boite de la game boy + Nintendo + start / select
        window.getComputedStyle(document.documentElement).getPropertyValue('--case-color');
        window.getComputedStyle(document.documentElement).getPropertyValue('--detail-case-color');
        window.getComputedStyle(document.documentElement).getPropertyValue('--case-relief-color');
        let pikachu = document.getElementById('pikachu-image');
        let togepi = document.getElementById('togepi-image');
        let rondoudou = document.getElementById('rondoudou-image');
        let pokeball = document.getElementById('pokeball-border');
        let powerText = document.getElementById('power');
        let pokemonLogo = document.getElementById('pokemon-logo');
        let buttonA = document.getElementById('button-A');
        let buttonB = document.getElementById('button-B');
        let selectStart = document.getElementsByClassName('button-select-start');
        let arrows = document.getElementsByClassName('arrows');
        let triangles = document.querySelector('.triangle-arrows');

        // Cibler les différents boutons de couleurs
        let yellowButton = document.getElementById('button-yellow');
        let redButton = document.getElementById('button-red');
        let greenButton = document.getElementById('button-green');
        let purpleButton = document.getElementById('button-purple');
        let blueButton = document.getElementById('button-blue');
        let pokemonButton = document.getElementById('button-pokemon');

        // Ajouter des évenements d'écoute
        yellowButton.addEventListener('click', changeToYellow);
        redButton.addEventListener('click', changeToRed);
        greenButton.addEventListener('click', changeToGreen);
        purpleButton.addEventListener('click', changeToPurple);
        blueButton.addEventListener('click', changeToBlue);
        pokemonButton.addEventListener('click', changeToPokemon);

        // Fonction changeToYellow
        function changeToYellow(){
            document.documentElement.style.setProperty('--case-color', '#f1d631');
            document.documentElement.style.setProperty('--detail-case-color', '#d6b520');
            document.documentElement.style.setProperty('--case-relief-color', '#f7dc33');
            resetPokemon();
        };

        // Fonction changeToRed
        function changeToRed(){
            document.documentElement.style.setProperty('--case-color', '#ed205b');
            document.documentElement.style.setProperty('--detail-case-color', '#b91846');
            document.documentElement.style.setProperty('--case-relief-color', '#ff2462');
            resetPokemon();
        };

        // Fonction changeToGreen
        function changeToGreen(){
            document.documentElement.style.setProperty('--case-color', '#8dc73d');
            document.documentElement.style.setProperty('--detail-case-color', '#69942e');
            document.documentElement.style.setProperty('--case-relief-color', '#98d443');
            resetPokemon();
        };

        // Fonction changeToPurple
        function changeToPurple(){
            document.documentElement.style.setProperty('--case-color', '#6330a7');
            document.documentElement.style.setProperty('--detail-case-color', '#4b247e');
            document.documentElement.style.setProperty('--case-relief-color', '#6c32b8');
            resetPokemon();
        };

        // Fonction changeToBlue
        function changeToBlue(){
            document.documentElement.style.setProperty('--case-color', '#147d93');
            document.documentElement.style.setProperty('--detail-case-color', '#0f6070');
            document.documentElement.style.setProperty('--case-relief-color', '#14869c');
            resetPokemon();
        };

        // Fonction changeToPokemon
        function changeToPokemon(){
            document.documentElement.style.setProperty('--case-color', '#f1d631');
            document.documentElement.style.setProperty('--detail-case-color', '#d6b520');
            document.documentElement.style.setProperty('--case-relief-color', '#f7dc33');
            pikachu.style.display = "block";
            togepi.style.display = "block";
            rondoudou.style.display = "block";
            pokeball.style.display = "block";
            powerText.style.margin = "2.5vh 0 0"
            pokemonLogo.style.display = "block";
            buttonA.style.backgroundColor = "#e42f36";
            buttonA.style.color = "#c51c26";
            buttonB.style.color = "#09895e";
            buttonB.style.backgroundColor = "#00b488";
            for(let i = 0; i < arrows.length; i++){
                arrows[i].style.backgroundColor = "#2662de";
            }
        };

        // Rest pokemonElements
        function resetPokemon(){
            pikachu.style.display = "";
            togepi.style.display = "";
            rondoudou.style.display = "";
            pokeball.style.display = "";
            powerText.style.margin = ""
            pokemonLogo.style.display = "";
            buttonA.style.backgroundColor = "";
            buttonA.style.color = "";
            buttonB.style.backgroundColor = "";
            buttonB.style.color = "";
            for(let i = 0; i < arrows.length; i++){
                arrows[i].style.backgroundColor = "";
            }
        }


        // POUR DÉMARER LA GAME BOY
        // Cibler le bouton ON / OFF + la led rouge + l'Audio + l'écran 
        let onOffButton = document.getElementById('on-off-button');
        let redLed = document.getElementById('red-led');
        let startAudio = document.getElementById('start-audio');
        let canvas = document.getElementById('screen');
        let context = canvas.getContext('2d');
        // Créer un gradient de couleur dans le canvas
        let linearGradient = context.createLinearGradient(60, 80, 240, 60);
        linearGradient.addColorStop(0, '#364375');
        linearGradient.addColorStop(0.25, '#0ea83c');
        linearGradient.addColorStop(0.5, '#ce0d71');
        linearGradient.addColorStop(0.75, '#b72241');
        linearGradient.addColorStop(1, '#f3f128');

        // Ajouter un évenement d'écoute "click" pour ON/OFF
        onOffButton.addEventListener('click', switchOnOff);

        // Fonction switchOnOff 
        let active = true;
        function switchOnOff(){
            if(active == true){
                redLed.style.backgroundColor = "red";
                startAudio.play();
                onOffButton.innerHTML = "OFF";
                canvas.style.backgroundColor = "#c6ccb2";
                // Premier texte : GAME BOY
                context.font = "bold 40px Roboto, Arial, serif";
                context.fillStyle = linearGradient;
                context.fillText('GAME BOY', 40, 80);
                // Deuxième texte : Nintendo®
                context.font = "bold 15px Roboto, Arial, serif";
                context.fillStyle = "black";
                context.fillText('Nintendo®', 110, 110);
                active = false;
            } else {
                redLed.style.backgroundColor = "";
                canvas.style.backgroundColor = "";
                onOffButton.innerHTML = "ON";
                // Permet d'effacer le contenu de Canvas de la largeur à la hauteur du canvas
                context.clearRect(0, 0, canvas.width, canvas.height);
                active = true;
            }
        };


        // ACTIVER LES TOUCHES DE LA GAME BOY + TOUCHES DU CLAVIER
        // Créer une span vide pour afficher "You pressed :"
        let touches = document.getElementById('touches');

        // Ajouter un évenement d'écoute "keydown" pour les touches du clavier
        window.addEventListener('keydown', keyDown);
            function keyDown(e) {
                for(var i = 0; i < arrows.length ; i++){
                    if(e.keyCode == arrows[i].dataset.key){
                        // Affiche un message "Your pressed : " + le code de la touche
                        touches.innerHTML = '<h4>Keycode keyboard : ' + e.keyCode + '</h4>';
                        // Ajoute la class "playing"
                        arrows[i].classList.add('press');
                    } 
                }

                for(var i = 0; i < selectStart.length ; i++){
                    if(e.keyCode == selectStart[i].dataset.key){
                        touches.innerHTML = '<h4>Keycode keyboard : ' + e.keyCode + '</h4>';
                        selectStart[i].classList.add('press');
                    } 
                }

                // A optimiser : Passe a une class + boucle for + add('press')
                if (e.keyCode == buttonA.dataset.key){
                    touches.innerHTML = '<h4>Keycode keyboard : ' + e.keyCode + '</h4>';
                    buttonA.style.backgroundColor = '#f3ef07';
                }
                // A optimiser : Passe a une class + boucle for + add('press')
                if (e.keyCode == buttonB.dataset.key){
                    touches.innerHTML = '<h4>Keycode keyboard : ' + e.keyCode + '</h4>';
                    buttonB.style.backgroundColor = '#f3ef07';
                }
            };

        // Ajouter un évenement d'écoute "keyup" pour reset la class 'press'
        window.addEventListener('keyup', keyUp);
        function keyUp(e){
            for(var i = 0; i < arrows.length ; i++){
                if(e.keyCode == arrows[i].dataset.key){
                    arrows[i].classList.remove('press');
                } 
            }

            for(var i = 0; i < selectStart.length ; i++){
                if(e.keyCode == selectStart[i].dataset.key){
                    selectStart[i].classList.remove('press');
                } 
            }

                // A optimiser : remove('press')
                if (e.keyCode == buttonA.dataset.key){
                    buttonA.style.backgroundColor = '';
                }
                if (e.keyCode == buttonB.dataset.key){
                    buttonB.style.backgroundColor = '';
                }
        };