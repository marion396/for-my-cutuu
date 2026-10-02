/* =========================
   PASSWORD
========================= */

// CHANGE THIS PASSWORD
const correctPassword = "LALU";


function checkPassword() {

  const input = document
    .getElementById("passwordInput")
    .value
    .trim()
    .toLowerCase();

  const wrongText =
    document.getElementById("wrongPassword");


  if (input === correctPassword.toLowerCase()) {

    document
      .getElementById("passwordScreen")
      .style.display = "none";

    document
      .getElementById("mainWebsite")
      .classList.remove("hidden");

    window.scrollTo(0, 0);

  }

  else {

    wrongText.innerText =
      "WRONGGG 😈 nice try MR";

  }

}



/* Allow ENTER key for password */

document
  .getElementById("passwordInput")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

      checkPassword();

    }

  });



/* =========================
   FLIP CARDS
========================= */

function flipCard(card) {

  card.classList.toggle("flipped");

}