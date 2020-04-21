        // POUR CHANGER LA GAMEBOY CASE
        // Cibler la boite de la game boy + Nintendo + start / select
        window.getComputedStyle(document.documentElement).getPropertyValue('--case-color');
        window.getComputedStyle(document.documentElement).getPropertyValue('--detail-case-color');
        window.getComputedStyle(document.documentElement).getPropertyValue('--case-relief-color');
        window.getComputedStyle(document.documentElement).getPropertyValue('--arrows-color');
        window.getComputedStyle(document.documentElement).getPropertyValue('--buttonA-color');
        window.getComputedStyle(document.documentElement).getPropertyValue('--buttonB-color');
        let imagesPokemon = document.querySelectorAll('.images-pokemon');
        let arrows = document.getElementsByClassName('arrows');
        let powerText = document.getElementById('power');
        let triangles = document.querySelector('.triangle-arrows');
        let selectStart = document.getElementsByClassName('button-select-start');
        let buttonA = document.querySelector('.button-A');
        let buttonB = document.querySelector('.button-B');

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
            document.documentElement.style.setProperty('--arrows-color', '#2662de');
            document.documentElement.style.setProperty('--buttonA-color', '#e42f36');
            document.documentElement.style.setProperty('--buttonB-color', '#09895e');
            powerText.style.margin = "2.5vh 0 0";
            
            for(let i = 0; i < imagesPokemon.length; i++){
                imagesPokemon[i].style.display = "block";
            }
        };

        // Rest pokemonElements
        function resetPokemon(){
            document.documentElement.style.setProperty('--arrows-color', '');
            document.documentElement.style.setProperty('--buttonA-color', '');
            document.documentElement.style.setProperty('--buttonB-color', '');
            powerText.style.margin = "";

            for(let i = 0; i < imagesPokemon.length; i++){
                imagesPokemon[i].style.display = "";
            }
        }


        // POUR DÉMARER LA GAME BOY
        // Cibler le bouton ON / OFF + la led rouge + l'Audio + l'écran 
        let onOffButton = document.getElementById('on-off-button');
        let redLed = document.getElementById('red-led');
        let startAudio = document.getElementById('start-audio');
            console.log(startAudio);
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
                startAudio.play();
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
                        touches.innerHTML = '<h4>Keycode keyboard : ' + e.keyCode + '</h4>';
                        arrows[i].classList.add('press');
                    } 
                }

                for(var i = 0; i < selectStart.length ; i++){
                    if(e.keyCode == selectStart[i].dataset.key){
                        touches.innerHTML = '<h4>Keycode keyboard : ' + e.keyCode + '</h4>';
                        selectStart[i].classList.add('press');
                    } 
                }

                if (e.keyCode == buttonA.dataset.key){
                    touches.innerHTML = '<h4>Keycode keyboard : ' + e.keyCode + '</h4>';
                    buttonA.classList.add('press');
                }
                if (e.keyCode == buttonB.dataset.key){
                    touches.innerHTML = '<h4>Keycode keyboard : ' + e.keyCode + '</h4>';
                    buttonB.classList.add('press');
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

                if (e.keyCode == buttonA.dataset.key){
                    buttonA.classList.remove('press');
                }
                if (e.keyCode == buttonB.dataset.key){
                    buttonB.classList.remove('press');
                }
        };