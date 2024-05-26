document.addEventListener("DOMContentLoaded", () => {
    const optionElements = document.querySelectorAll(".option");
    
    optionElements.forEach(option => {
        option.addEventListener("click", function() {
            openOption(this.dataset.option);
        });
    });

    const closeButton = document.querySelectorAll('.close');

    closeButton.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('active');
        });
        
        button.addEventListener('mouseout', function() {
            this.classList.remove('active');
        });

        button.addEventListener('click', function() {
            closeModal();
        });
    });
});

function openOption(optionNumber) {
    const modal = document.getElementById('modal');
    const modalOptions = document.getElementById('modal-options');
    const modalTitle = document.getElementById('modal-title');
    
    let optionsHtml = '';
    let titleText = '';
    
    switch(parseInt(optionNumber)) {
        case 1:
            optionsHtml = `
                <li><a href="#">Łatwy</a></li>
                <li><a href="#">Średni</a></li>
                <li><a href="#">Trudny</a></li>
            `;
            titleText = 'Wybierz poziom gry:';
            break;
        case 2:
            optionsHtml = `
                <li><a href="#" onclick="showSettings('graphics-settings')">Grafika</a></li>
                <li><a href="#" onclick="showSettings('controls-settings')">Sterowanie</a></li>
                <li><a href="#" onclick="showSettings('interface-settings')">Interfejs</a></li>
                <li><a href="#" onclick="showSettings('audio-settings')">Audio</a></li>
                <li><a href="#" onclick="showSettings('roz-settings')">Rozgrywka</a></li>
            `;
            titleText = 'Ustawienia:';
            break;
        case 3:
            optionsHtml = `
                <li><a href="#">Statystyki dla kampanii</a></li>
                <li><a href="#">Statystyki gry wieloosobowej</a></li>
                <li><a href="#">Czas w grze</a></li>
            `;
            titleText = 'Statystyki:';
            break;
        case 4:
            optionsHtml = `
                <li><a href="#">Twórcy</a></li>
                <li><a href="#">Sponsorzy</a></li>
                <li><a href="#">Dotacje</a></li>
            `;
            titleText = '';
            break;
        case 5:
            optionsHtml = `
                <li><a href="#">Tak</a></li>
                <li><a href="#">Nie</a></li>
            `;
            titleText = 'Czy na pewno chcesz wyjść?';
            break;
        default:
            optionsHtml = '';
    }
    
    modalTitle.textContent = titleText;
    modalOptions.innerHTML = optionsHtml;
    modal.style.display = 'block';
}

function showSettings(settingsId) {
    const allSettings = document.querySelectorAll('.hidden-settings');
    allSettings.forEach(setting => {
        setting.style.display = 'none';
    });

    const settings = document.getElementById(settingsId);
    settings.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    const settings = document.querySelectorAll('.hidden-settings');
    settings.forEach(setting => {
        setting.style.display = 'none';
    });
}
