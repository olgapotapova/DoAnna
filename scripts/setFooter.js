var footerIcons = `<div class="social-media">
    <img class="icon" src="images/InstagramGold.svg" alt="Gold Instagram icon.">
    <img class="icon-telegram" src="images/TelegramGold.svg" alt="Gold Telegram icon.">
    <img class="icon" src="images/FacebookGold.svg" alt="Gold Facebook icon.">
    <img class="icon" src="images/ViberGold.svg" alt="Gold Viber icon.">
</div>`;

var footerText = `<div class="footer-page">
<h3 class="telephone">Tel. +372 5561 40 84</h3>
</div>`;

function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText;
  document.body.insertAdjacentElement('afterbegin', footer );
}

setFooter();