    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let woord1 = onderwerp[randomizer(arrayLength)];
        let woord2 = werkwoord[randomizer(arrayLength)];
        let woord3 = restwoord[randomizer(arrayLength)];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["she", "he", "Bob"];
    const werkwoord = ["runs", "studies", "chugs"];
    const restwoord = ["well", "at the bar", "water"];
        
    let plaatjes = ["https://i.pinimg.com/736x/21/95/87/219587864d58d77412409e25b87f44bb.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrk1-TtJRAgA-i20XCL6e7Jic_T7vxKoedg&usqp=CAU", "https://pbs.twimg.com/media/D1sWMqyX0AAgfGq.png"]
    let arrayLength = onderwerp.length;
