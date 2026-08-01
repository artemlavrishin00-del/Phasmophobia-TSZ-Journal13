const ghosts = [
    {
        name: "Alienson",
        evidence: ["Peeing", "freezing", "Inscription"]

    },
    {
        name: "Arsen",
        evidence: ["Pigging", "emf", "Peeing"]
    },
    {
        name: "Artyom",
        evidence: ["emf", "Pigging", "freezing"]
    },
        {
        name: "Blitz",
        evidence: ["ThrowingBottle", "MonkeyRot", "emf"]
    },
        {
        name: "Bran",
        evidence: ["spiritbox", "ThrowingBottle", "Peeing"]
    },
        {
        name: "Chormecalo",
        evidence: ["freezing", "Pigging", "MonkeyRot"]
    },
        {
        name: "Chresol",
        evidence: ["ThrowingBottle", "MonkeyRot", "spiritbox"]
    },
        {
        name: "Chupakabra",
        evidence: ["ThrowingBottle", "Peeing", "emf"]
    },
        {
        name: "Croy",
        evidence: ["spiritbox", "emf", "freezing"]
    },
        {
        name: "Daunessa",
        evidence: ["freezing", "MonkeyRot", "emf"]
    },
        {
        name: "Dima",
        evidence: ["ThrowingBottle", "Pigging", "Inscription"]
    },
        {
        name: "Eibra",
        evidence: ["freezing", "Peeing", "Pigging"]
    },
        {
        name: "Frize",
        evidence: ["Inscription", "Peeing", "ThrowingBottle"]
    },
        {
        name: "Greshm",
        evidence: ["MonkeyRot", "spiritbox", "Pigging"]
    },
    
        {
        name: "Hrasch",
        evidence: ["ThrowingBottle", "MonkeyRot", "Peeing"]
    },
              {
        name: "Itacher",
        evidence: ["emf", "Inscription", "ThrowingBottle"]
    },
             
       
        {
        name: "Limera",
        evidence: ["spiritbox", "freezing", "Inscription"]
    },
              
        {
        name: "Nelsi",
        evidence: ["emf", "Peeing", "MonkeyRot"]
    },
       
              {
        name: "Oninoni",
        evidence: ["emf", "Inscription", "Peeing"]
    },
       
        {
        name: "Shaoran",
        evidence: ["Inscription", "Pigging", "MonkeyRot"]
    },
        {
        name: "Skinwalker",
        evidence: ["Inscription", "MonkeyRot", "spiritbox"]
    },
        {
        name: "Stalker",
        evidence: ["MonkeyRot", "Pigging", "ThrowingBottle"]
    },
        {
        name: "Styopa",
        evidence: ["spiritbox", "Inscription", "Peeing"]
    },
       {
        name: "Svintus",
        evidence: ["Peeing", "Pigging", "Inscription"]
    },
           {
        name: "Tvar",
        evidence: ["emf", "Inscription", "MonkeyRot"]
    },
          
        {
        name: "Vova",
        evidence: ["freezing", "Pigging", "ThrowingBottle"]
    },
      
        {
        name: "Zhirna Tvar",
        evidence: ["MonkeyRot", "Pigging", "Peeing"]
    }
 
    
    
   
];

const evidences = document.querySelectorAll(".evidence");
const ghostList = document.getElementById("PossibleGhosts");

// =======================
// Клики по уликам
// =======================

evidences.forEach(evidence => {

    evidence.addEventListener("click", (event) => {

        event.preventDefault();

        let state = Number(evidence.dataset.state);

        state = (state + 1) % 3;

        evidence.dataset.state = state;
        localStorage.setItem(
    "evidence_" + evidence.dataset.id,
    state
);

        evidence.classList.remove("selected", "excluded");

        if (state === 1) {
            evidence.classList.add("selected");
        } else if (state === 2) {
            evidence.classList.add("excluded");
        }

        updateGhosts();

    });

});

// =======================
// Обновление списка призраков
// =======================

function updateGhosts() {

    const selected = [];
    const excluded = [];

    evidences.forEach(e => {

        const state = Number(e.dataset.state);

        if(state === 1){
            selected.push(e.dataset.id);
        }

        if(state === 2){
            excluded.push(e.dataset.id);
        }

    });

    document.querySelectorAll("#PossibleGhosts li").forEach(li => {

        const ghost = ghosts.find(g => g.name === li.dataset.name);

        const hasSelected = selected.every(ev =>
            ghost.evidence.includes(ev)
        );

        const hasExcluded = excluded.some(ev =>
            ghost.evidence.includes(ev)
        );

        li.classList.remove("ghost-disabled");

        li.style.display = "";

        // Крестик → убрать полностью
        if(hasExcluded){

            li.style.display = "none";

            return;

        }

        // Кружок → сделать серым
        if(!hasSelected){

            li.classList.add("ghost-disabled");

        }

    });

}


console.log(ghosts);
console.log(ghosts.length);
ghosts.forEach(ghost => {

    const li = document.createElement("li");

    li.textContent = ghost.name;

    li.dataset.name = ghost.name;

    ghostList.appendChild(li);

});
evidences.forEach(evidence => {

    const saved = localStorage.getItem(
        "evidence_" + evidence.dataset.id
    );

    if(saved !== null){

        evidence.dataset.state = saved;

        if(saved == 1){
            evidence.classList.add("selected");
        }

        if(saved == 2){
            evidence.classList.add("excluded");
        }

    }

});
updateGhosts();