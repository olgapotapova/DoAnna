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
                <li><a href="DoAnna/about-me.html" class="lng-minust">Minust</a></li>
                <li><a href="DoAnna/singing-studio.html" class="lng-vokalstudio">Laulastuudio</a></li>
                <li><a href="DoAnna/game-test.html" class="lng-kuulamismäng">Kuulamismäng</a></li>
                <li><a href="DoAnna/reviews.html" class="lng-tagasaside">Tagasaside</a></li>
                <li><a href="DoAnna/contact.html" class="lng-kontakt">Kontakt</a></li>
                <li><img src="images/Pattern.svg" alt="Pattern from notes."></li>
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






