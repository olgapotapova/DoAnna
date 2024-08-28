var footerText = `
<div class="footer-page">
<div class="footer-social-media-pages"><div class="social-media-footer">
<a href="https://www.instagram.com/dotonaanna/" target="_blank"><img class="icon" src="images/InstagramGold.svg" alt="Gold Instagram icon."></a>
<a href="https://t.me/+WbtoXEQr3pZmZDE8" target="_blank"><img class="icon-telegram" src="images/TelegramGold.svg" alt="Gold Telegram icon."></a>
<a href="https://www.messenger.com/t/1511013257" target="_blank"> <img class="icon" src="images/Messenger.svg" alt="Gold Facebook icon."></a>
<a href="viber://chat?number=%2B37255614084" target="_blank"><img class="icon" src="images/ViberGold.svg" alt="Gold Viber icon."></a>
</div>
<a class="lng-tel telephone" href="tel:+37255614084">+372 5561 4084</a>
</div></div>`;


function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText;
  document.body.insertAdjacentElement('afterbegin', footer );
}

setFooter();