/* loading */ 
var text = {
  1: "Kled military title is 'High Major Commodore of the First Legion Third Multiplication Double Admiral Artillery Vanguard Company' ",
  2: "Pinguin can't fly",
  3: "8% of the American population thinks that they can beat a Bear in a bare hand fight",
  4: "The average person spends 6 months of their life waiting for a red light to turn green",
  5: "Monster Musume <3.",
  6: "Star wars >>>> Harry Potter",
  7: "Deus Ex Machina",
  8: "Bref j'ai plus d'idée a mettre",
  9: "the most important is the essential and this is the main",
  10: "ouais c'est pas faux",
  11: "I'm not a robot",
  12: "I am groot",
  13: "Barghest is a mythical monstrous black dog with huge teeth and claws",
}

function arrive(){
  let random = Math.floor(Math.random() * 8) + 1;
  document.querySelector('.load>h1').innerHTML = text[random];

let charIndex = 0;
setInterval(function() {
const loadingText = document.getElementById('loading');
const text = loadingText.textContent;
const newText = [];
for (let i = 0; i < text.length; i++) {
  const shouldHighlight = i === charIndex;
  const charElement = document.createElement('span');
  if (shouldHighlight) {
    charElement.classList.add('highlight');
  }
  charElement.textContent = text[i];
  charElement.style.fontSize = shouldHighlight ? '1.25em' : '1em';
  newText.push(charElement);
}
loadingText.textContent = '';
newText.forEach(function(charElement) {
  loadingText.appendChild(charElement);
});
charIndex = (charIndex + 1) % text.length;
}, 150);


  setTimeout(function() {
    gsap.to('.load', {duration: 2, display: 'none', opacity: 0});
    document.querySelector('.load>h1').innerHTML = '';
  }, 2000);
}
arrive();

function loading() {
  gsap.to('.load', {duration: 0.5, display: 'block', opacity: 1});
  setTimeout(function() {
  window.location.href = 'index.html';
  }, 500);
}


window.addEventListener("mousemove", function(event) {
  var div = document.getElementById("cursor");
  var charged = document.getElementById("charged");
  div.style.left = event.clientX - 138 + "px";
  div.style.top = event.clientY - 130 +"px";
  charged.style.left = event.clientX - 2 + "px";
  charged.style.top = event.clientY + 2 +"px";
});

// Récupération des éléments HTML
const outputDiv = document.getElementById('output');
const startBtn = document.getElementById('start-btn');
const startBtnRoom = document.getElementById('start-btn-room');

// Vérification de la compatibilité de l'API Web Speech
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

  // Création d'une instance de l'objet SpeechRecognition
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  // Événement déclenché lorsque la reconnaissance vocale détecte une nouvelle phrase
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    //outputDiv.textContent = speechToText;
    console.log(speechToText);
    let key = speechToText.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    console.log("sans accent : " + " " + key);
    if (key.toLowerCase().includes('terrain')) {
      loading()
    } else if (key.toLowerCase().includes('phoenix')) {
      outputDiv.textContent = "PHOENIX";
      outputDiv.style.color = "darkred";
      let charged = document.getElementById("charged");
      console.log(charged);
      charged.style.backgroundColor = "darkred";
      charged.style.borderColor = "darkred";
      charged.style.boxShadow = "0 0 10px darkred";
      charged.style.display = "block";
    }
  };
  recognition.onend = () => { 
    startBtnRoom.disabled = false;
  };

  // Événement déclenché lorsque la dictée est terminée
  recognition.onend = () => {
    startBtn.disabled = false;
  };

  // Événement déclenché lorsque l'utilisateur clique sur le bouton "Démarrer la dictée"
  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    recognition.start();
  });
  
} else {
  // Si l'API Web Speech n'est pas supportée par le navigateur
  outputDiv.textContent = "Désolé, la reconnaissance vocale n'est pas supportée par votre navigateur.";
  startBtn.disabled = true;
}


/* spell book */ 

var content = {
  0: {
    title: "Magic Spell Note",
    word: "",
    type: "A guide given",
    effect: "to all wizards",
  },
  1: {
    title: "Tp spell",
    word: "L A B O",
    type: "Self",
    effect: "teleport to the labo",
  },
  2: {
    title: "Tp spell",
    word: "T E R R A I N",
    type: "Self",
    effect: "teleport to the training ground",
  },
  3: {
    title: "Fire spell",
    word: "I N F L A M A R E",
    type: "Single target",
    effect: "Burns the target (can melte ice)",
  },
  4: {
    title: "Ice spell",
    word: "G L A C I U S",
    type: "Single target",
    effect: "Freeze the target (can stop fire)",
  },
  5: {
    title: "Dark spell",
    word: "N O X",
    type: "AOE",
    effect: "Aspire all light",
    
  },
  6: {
    title: "Light spell",
    word: "I N V I S I B I L A T O",
    type: "Single target",
    effect: "Makes the target invisible",
    
  },
  7: {
    title: "Light spell",
    word: "L U M O S",
    type: "AOE",
    effect: "Creat a flash of light",
  },
  8: {
    title: "Arcane spell",
    word: "R E V E L I O",
    type: "AOE",
    effect: "Makes visible everything",
  },
  9: {
    
    title: "Arcane spell",
    word: "R E D U C T O",
    type: "Single target",
    effect: "Decreases the target's size",
  },
  10: {
    title: "Arcane spell",
    word: "A M P L I F I C A T U M",
    type: "Single target",
    effect: "Increases the target's size",
  },
  11: {
    title: "Arcane spell",
    word: " D I S P E L L I U M",
    type: "AOE",
    effect: "Dispell all spells",
  },
  12: {
    title: "Arcane spell",
    word: "L E V I O S A",
    type: "Single target",
    effect: "Levitates the target",
  },
  13: {
    title: "Arcane spell",
    word: "P R O T E G O",
    type: "Single target",
    effect: "Creates a shield",
  },
  14: {
    title: "Invocation spell",
    word: " I N V O C A R E : G R I F F O N",
    type: "Summon",
    effect: "Summon a griffon",
  },
  15: {
    title: "Invocation spell",
    word: " I N V O C A R E : D R A G O N",
    type: "Summon",
    effect: "Summon a dragon",
  },
  16: {
    title: "Invocation spell",
    word : " I N V O C A R E : P H O E N I X",
    type: "Summon",
    effect: "Summon a phoenix",
  }
}

  function deploy() {
    let state = 0;
    let SpellNote = document.getElementById("SpellNote");
    let overlay = document.getElementById("overlay");
    let past = document.getElementById("past");
    let future = document.getElementById("future");
    SpellNote.addEventListener("click", function(event) {
        SpellNote.style.top = "50%";
        SpellNote.style.left = "50%";
        SpellNote.style.scale = "1";
        overlay.style.display = "block";
        past.style.display = "block";
        future.style.display = "block";
        state = 1;
    });
    overlay.addEventListener("click", function(event) {
      SpellNote.style.top = "85%";
      SpellNote.style.left = "85%";
      SpellNote.style.scale = "0.5";
      overlay.style.display = "none";
      past.style.display = "none";
      future.style.display = "none";
      state = 0;
    });
  }

  function write() {
  var page = 0;

  let past = document.getElementById("past");
  let future = document.getElementById("future");

  let SpellNoteText = document.getElementById("SpellNoteText");

  let title = document.createElement("h1");
  let word = document.createElement("h2");
  let type = document.createElement("h3");
  let effect = document.createElement("h3");
  title.textContent = content[0].title;
  word.textContent = content[0].word;
  type.textContent = content[0].type;
  effect.textContent = content[0].effect;
  SpellNoteText.appendChild(title);
  SpellNoteText.appendChild(word);
  SpellNoteText.appendChild(type);
  SpellNoteText.appendChild(effect);

  past.addEventListener("click", function(event) {
    if (page > 0) {
      page--;
      SpellNoteText.style.animationName = "turn1";
      SpellNoteText.addEventListener("animationend", function() {
        title.textContent = content[page].title;
        word.textContent = content[page].word;
        type.textContent = content[page].type;
        effect.textContent = content[page].effect;
        SpellNoteText.style.animationName = "turn2";
      }, {once: true});
    }
  });

  future.addEventListener("click", function(event) {
    if (page < 16) {
      page++;
      SpellNoteText.style.animationName = "turn1";
      SpellNoteText.addEventListener("animationend", function() {
        title.textContent = content[page].title;
        word.textContent = content[page].word;
        type.textContent = content[page].type;
        effect.textContent = content[page].effect;
        SpellNoteText.style.animationName = "turn2";
      }, {once: true});
    }
  });  
}

write();
deploy();