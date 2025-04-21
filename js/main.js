import { getProfessionals } from "./professional-service.js";
import { debounce } from "./debounce.js";

init();
setListeners();

async function init() {
  const professionals = await getProfessionals();
  setProfessionalsSpecialties(professionals);
  setProfessionals(professionals);
}

function setProfessionalsSpecialties(professionals) {
  const specialties = professionals.map((professional) => professional.specialty);
  const specialtiesList = document.querySelector("#especialidade");
  
  specialtiesList.innerHTML = "";
  specialtiesList.appendChild(createSpecialtyItem("Selecione uma especialidade", true));
  specialties.forEach((specialty) => {
    specialtiesList.appendChild(createSpecialtyItem(specialty));
  });
}

function setListeners() {
  const searchInput = document.querySelector("#busca");
  const specialtySelect = document.querySelector("#especialidade");

  searchInput.addEventListener(
    "input",
    debounce(async () => {
      const professionals = await getProfessionals(searchInput.value, specialtySelect.value);
      setProfessionals(professionals);
    })
  );

  specialtySelect.addEventListener("change", async () => {
    const professionals = await getProfessionals(searchInput.value, specialtySelect.value);
    setProfessionals(professionals);
  });
}

function setProfessionals(professionals) {
  const professionalsList = document.querySelector(".equipe");
  

  professionalsList.innerHTML = "";

  professionals.forEach((professional) => {
    professionalsList.appendChild(createProfessionalItem(professional));
  });
}

function createProfessionalItem(professional) {
  const professionalItem = document.createElement("div");
  professionalItem.classList.add("membro");
  professionalItem.innerHTML = `
        <img src="${professional.image}" alt="${professional.name}">
        <h3>${professional.name}</h3>
        <p>${professional.specialty}</p>
    `;
  return professionalItem;
}

function createSpecialtyItem(specialty, emptyValue = false) {
  const specialtyItem = document.createElement("option");
  specialtyItem.value = emptyValue ? "" : specialty;
  specialtyItem.textContent = specialty;
  return specialtyItem;
}
