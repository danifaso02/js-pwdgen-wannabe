"use: strict";

const firstName = prompt("Inserisci il tuo nome!");
const lastName = prompt("Ora inserisci il tuo cognome!");
const favouriteColour = prompt("Ci siamo quasi! Ora il tuo colore preferito!");

document.querySelector("h2").innerHTML = `${firstName}${lastName}${favouriteColour}76`;
