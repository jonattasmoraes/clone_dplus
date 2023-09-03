document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const higthHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const ActualPosition = window.scrollY;

    const higthHero = heroSection.clientHeight;
        if (ActualPosition < higthHero) {
            ocultElements();
        } else {
            showElements();
        }
    });

    //Seção de atrações, programação de abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeAbas();
            aba.classList.add('shows__list--is-active');
            expandirAba(aba);
            removeButtonActive(event.target);
        });
    }
    // Seção faq, Accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreFechaResposta);
    }
});

function ocultElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreFechaResposta(event) {
    const classe = 'faq__questions__item--is-open';
    const elementFather = event.currentTarget.parentElement;
    const aba = elementFather.querySelector('[data-tab-id]');

    elementFather.classList.toggle(classe);

    if (elementFather.classList.contains(classe)) {
        expandirAba(aba);
    } else {
        contrairAba(aba);
    }
}

function expandirAba(aba) {
    aba.style.height = aba.scrollHeight + 'px';
}

function contrairAba(aba) {
    aba.style.height = '0';
}

function removeButtonActive(elemento) {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

    elemento.classList.add('shows__tabs__button--is-active');
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}