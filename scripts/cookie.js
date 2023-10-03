var cookiesText = `<div class="modal" id="cookieModal">
<div class="modal-content">
    <p>This website uses cookies to ensure you get the best experience on our website.</p>
    <button id="acceptCookiesBtn">Accept</button>
</div>
</div>`;

// Define a function that checks if a cookie warning has already been shown
function isCookieWarningShown() {
    return localStorage.getItem('cookieWarningShown') === 'true';
}

// Define a function that shows a cookie warning
function showCookieWarning() {
    const modal = document.getElementById('cookieModal');
    modal.style.display = 'block';

    const acceptBtn = document.getElementById('acceptCookiesBtn');
    acceptBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        localStorage.setItem('cookieWarningShown', 'true');
    });
}

// Check is the cookie warning was already been shown and show if it had"t. 
window.onload = function() {
    if (!isCookieWarningShown()) {
        showCookieWarning();
    }
};

function setCookies() {
  var header =  document.createElement("div");
  header.innerHTML = cookiesText;
  document.body.insertAdjacentElement('afterbegin', header );
}

setCookies();