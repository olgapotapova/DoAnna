const select = document.querySelector('select');
const allLang = ['ru', 'en', 'ee'];


select.addEventListener('change', changeURLLanguage);

// to url with language
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    const selectedLang = select.value;
    localStorage.setItem('selectedLang', selectedLang);
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    //Seach language from local storage
    const selectedLangLocalStorage = localStorage.getItem('selectedLang');
    if (selectedLangLocalStorage) {
    // Set language by local storage
        select.value = selectedLangLocalStorage;
        location.href = window.location.pathname + '#' + selectedLangLocalStorage;

    }else if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
        select.value = hash;

    }
           
    language = select.value;
    document.querySelector('title').innerHTML = langArr['laulustuudio'][language];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][language];
        }
    }    
}


changeLanguage();