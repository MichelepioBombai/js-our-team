// Wayne Barnett		Founder & CEO			wayne-barnett-founder-ceo.jpg
// Angela Caroll		Chief Editor			angela-caroll-chief-editor.jpg
// Walter Gordon		Office Manager			walter-gordon-office-manager.jpg
// Angela Lopez		  Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada		Developer				scott-estrada-developer.jpg
// Barbara Ramos		Graphic Designer		barbara-ramos-graphic-designer.jpg

const cardContainer = document.getElementById("card-container")


const teamMember =[
  {
    nome: "Wayne Barnett", 
    ruolo: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll", 
    ruolo: "Chief Editor",
    pic: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon", 
    ruolo: "Office Manager",
    pic: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez", 
    ruolo: "Social Media Manager",
    pic: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada", 
    ruolo: "Developer",
    pic: "scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos	", 
    ruolo: "Graphic Designer",
    pic: "barbara-ramos-graphic-designer.jpg"
  }
];

for(const member of teamMember) {
  console.log("pic:" + member.pic);
  
const cardHTML = `
  <div class="col">
      <div class="col card text-center mt-3">
         <img class="card-img-top" src="./img/${member.pic}" alt="Title">
         <div class="card-body">
            <h4 class="card-title">${member.nome}</h4>
            <p class="card-text">${member.ruolo}</p>
         </div>
      </div>
  </div>`;

  cardContainer.innerHTML +=cardHTML

}



  
