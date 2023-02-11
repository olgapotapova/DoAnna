const select = document.querySelector('select');
const allLang = ['ru', 'en', 'ee'];


select.addEventListener('change', changeURLLanguage);

// to url with language
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}


function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['laulustuudio'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}


changeLanguage();