const fullSum = () => {
    const line1 = document.getElementById('td1')
    const line2 = document.getElementById('td2')
    const line3 = document.getElementById('td3')
    const line4 = document.getElementById('td4')
    const line5 = document.getElementById('td5')
    const line6 = document.getElementById('td6')

    let kitPrice1 = line1.value * 27900
    let kitPrice2 = line2.value * 14600
    let kitPrice3 = line3.value * 10500
    let kitPrice4 = line4.value * 55000
    let kitPrice5 = line5.value * 43800
    let kitPrice6 = line6.value * 13500

    document.getElementById('kit-price')
        .innerHTML = (kitPrice1 + kitPrice2 + kitPrice3 + kitPrice4 + kitPrice5 + kitPrice6)
        .toLocaleString('ru-Ru') + ' руб'
}


const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true

const timeout = 800

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index]
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink
                .getAttribute('href')
                .replace('#', '')

            const currentPopup = document.getElementById(popupName)
            popupOpen(currentPopup)
            e.preventDefault()
        })
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index]
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault()
        })
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open')
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'))
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open')
        if (doUnlock) {
            bodyUnlock()
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper')
        .offsetWidth + 'px'
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index]
            el.style.paddingRight = lockPaddingValue
        }
    }
    body.style.paddingRight = lockPaddingValue
    body.classList.add('lock')

    unlock = false
    setTimeout(function () {
        unlock = true
    }, timeout)
}

function bodyUnlock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index]
                el.style.paddingRight = '0px'
            }
        }
        body.style.paddingRight = '0px'
        body.classList.remove('lock')
    }, timeout)

    unlock = false
    setTimeout(function () {
        unlock = true
    }, timeout)
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open')
        popupClose(popupActive)
    }
})

$('.art-stranger').mask('+7 (999) 999-99-99');

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        let range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};


$('input[type="tel"]').click(function () {
    $(this).setCursorPosition(4);  // set position number
});
