var footerIcons = `<div id="menu-right" class="menu-right">
        <nav>
            <ul>
                <li><a href="about-me.html" class="lng-minust">Minust</a></li>
                <li><a href="singing-studio.html" class="lng-vokalstudio">Laulastuudio</a></li>
                <li><a href="game-test.html" class="lng-kuulamismäng">Kuulamismäng</a></li>
                <li><a href="reviews.html" class="lng-tagasaside">Tagasaside</a></li>
                <li><a href="contact.html" class="lng-kontakt">Kontakt</a></li>
                <li><img src="/images/Pattern.svg" alt="Pattern from notes."></li>
            </ul>
        </nav>
    </div>`;

var footerText = `<div class="footer-main-page">
<h3 class="telephone">Tel. +372 5561 40 84</h3>
</div>`;

function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText;
  document.body.insertAdjacentElement('afterbegin', footer );
}

setFooter();