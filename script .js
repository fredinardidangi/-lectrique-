const form = document.getElementById("formContact");
const liste = document.getElementById("liste");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const numero = document.getElementById("numero").value;

  // afficher sur la page
  const li = document.createElement("li");
  li.textContent = nom + " : " + numero;
  liste.appendChild(li);

  // enregistrer dans le navigateur
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push({ nom, numero });
  localStorage.setItem("contacts", JSON.stringify(contacts));

  // vider le formulaire
  form.reset();
});
