var headerText = `<div class="menu-right-container">           
    <header>
        <div id="menu-btn" class="menu-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
    <div id="menu-right" class="menu-right">
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
    </div>
</div>`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();






