// POUR CHANGER LA GAMEBOY CASE
        // Cibler la boite de la game boy + Nintendo + start / select
        let gameboyCase = document.getElementById('yellow-case');
        let nintendo = document.querySelector('#nintendo h2');
        let startSelect = document.querySelector('#button-select-start-section');
        let pikachu = document.getElementById('pikachu-image');
        let togepi = document.getElementById('togepi-image');
        let rondoudou = document.getElementById('rondoudou-image')
        let pokemonLogo = document.getElementById('pokemon-logo');
        let buttonA = document.getElementById('button-A');
        let buttonB = document.getElementById('button-B');
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
            gameboyCase.style.backgroundColor = "#f1d631";
            nintendo.style.color = "#d6b520";
            nintendo.style.border = "3px solid #d6b520";
            startSelect.style.color = "#d6b520";
            pikachu.style.display = "";
            togepi.style.display = "";
            rondoudou.style.display = "";
            pokemonLogo.style.display = "";
            buttonA.style.backgroundColor = "";
            buttonA.style.color = "";
            buttonB.style.backgroundColor = "";
            buttonB.style.color = "";
            for(let i = 0; i < arrows.length; i++){
                arrows[i].style.backgroundColor = "";
            }
        };

        // Fonction changeToRed
        function changeToRed(){
            gameboyCase.style.backgroundColor = "#ed205b";
            nintendo.style.color = "#b91846";
            nintendo.style.border = "3px solid #b91846";
            startSelect.style.color = "#b91846";
            pikachu.style.display = "";
            togepi.style.display = "";
            rondoudou.style.display = "";
            pokemonLogo.style.display = "";
            buttonA.style.backgroundColor = "";
            buttonA.style.color = "";
            buttonB.style.backgroundColor = "";
            buttonB.style.color = "";
            for(let i = 0; i < arrows.length; i++){
                arrows[i].style.backgroundColor = "";
            }
        };

        // Fonction changeToGreen
        function changeToGreen(){
            gameboyCase.style.backgroundColor = "#8dc73d";
            nintendo.style.color = "#69942e";
            nintendo.style.border = "3px solid #69942e";
            startSelect.style.color = "#69942e";
            pikachu.style.display = "";
            togepi.style.display = "";
            rondoudou.style.display = "";
            pokemonLogo.style.display = "";
            buttonA.style.backgroundColor = "";
            buttonA.style.color = "";
            buttonB.style.backgroundColor = "";
            buttonB.style.color = "";
            for(let i = 0; i < arrows.length; i++){
                arrows[i].style.backgroundColor = "";
            }
        };

        // Fonction changeToPurple
        function changeToPurple(){
            gameboyCase.style.backgroundColor = "#6330a7";
            nintendo.style.color = "#4b247e";
            nintendo.style.border = "3px solid #4b247e";
            startSelect.style.color = "#4b247e";
            pikachu.style.display = "";
            togepi.style.display = "";
            rondoudou.style.display = "";
            pokemonLogo.style.display = "";
            buttonA.style.backgroundColor = "";
            buttonA.style.color = "";
            buttonB.style.backgroundColor = "";
            buttonB.style.color = "";
            for(let i = 0; i < arrows.length; i++){
                arrows[i].style.backgroundColor = "";
            }
        };

        // Fonction changeToBlue
        function changeToBlue(){
            gameboyCase.style.backgroundColor = "#147d93";
            nintendo.style.color = "#0f6070";
            nintendo.style.border = "3px solid #0f6070";
            startSelect.style.color = "#0f6070";
            pikachu.style.display = "";
            togepi.style.display = "";
            rondoudou.style.display = "";
            pokemonLogo.style.display = "";
            buttonA.style.backgroundColor = "";
            buttonA.style.color = "";
            buttonB.style.backgroundColor = "";
            buttonB.style.color = "";
            for(let i = 0; i < arrows.length; i++){
                arrows[i].style.backgroundColor = "";
            }
        };

        // Fonction changeToPokemon
        function changeToPokemon(){
            gameboyCase.style.backgroundColor = "#f1d631";
            nintendo.style.color = "#d6b520";
            nintendo.style.border = "3px solid #d6b520";
            startSelect.style.color = "#d6b520";
            pikachu.style.display = "block";
            togepi.style.display = "block";
            rondoudou.style.display = "block";
            pokemonLogo.style.display = "block";
            buttonA.style.backgroundColor = "#e42f36";
            buttonA.style.color = "#c51c26";
            buttonB.style.color = "#09895e";
            buttonB.style.backgroundColor = "#00b488";
            for(let i = 0; i < arrows.length; i++){
                arrows[i].style.backgroundColor = "#2662de";
            }
        };


        // POUR DÉMARER LA GAME BOY
        // Cibler le bouton ON / OFF + la led rouge + l'Audio + l'écran 
        let onOffButton = document.getElementById('on-off-button');
        let redLed = document.getElementById('red-led');
        let startAudio = document.getElementById('start-audio');
        let canvas = document.getElementById('screen');

        // jouter un évenement d'écoute "click"
        onOffButton.addEventListener('click', switchOnOff);

        // Fonction switchOnOff 
        let active = true;
        function switchOnOff(){
            if(active == true){
                redLed.style.backgroundColor = "red";
                startAudio.play();
                onOffButton.innerHTML = "OFF";
                canvas.style.backgroundColor = "#c6ccb2";
                active = false;
            } else {
                redLed.style.backgroundColor = "";
                canvas.style.backgroundColor = "";
                onOffButton.innerHTML = "ON";
                active = true;
            }
        };