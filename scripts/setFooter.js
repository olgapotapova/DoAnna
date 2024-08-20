var footerText = `
<div class="footer-page">
<div class="footer-social-media-pages"><div class="social-media-footer">
<img class="icon" src="images/InstagramGold.svg" alt="Gold Instagram icon.">
<img class="icon-telegram" src="images/TelegramGold.svg" alt="Gold Telegram icon.">
<img class="icon" src="images/FacebookGold.svg" alt="Gold Facebook icon.">
<img class="icon" src="images/ViberGold.svg" alt="Gold Viber icon.">
</div>
<a class="lng-tel telephone" href="tel:+372 5564 4084">+372 5564 4084</a>
</div></div>`;


function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText;
  document.body.insertAdjacentElement('afterbegin', footer );
}

setFooter();