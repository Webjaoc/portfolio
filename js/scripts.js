

const btnColors = document.getElementById('bottons_colors');
const btnColorsIcons = document.getElementById('bottons_colors_icon');
const btnColorsText = document.getElementById('bottons_colors_text');

btnColors.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    if(btnColorsIcons.src.includes("moon.svg")){
        btnColorsIcons.src = "assets/icons/sun.svg";
        btnColorsText.textContent ="Ligth Mode";
    }else{
        btnColorsIcons.src ="assets/icons/moon.svg";
        btnColorsText.textContent = "Dark Mode";
    }
});


const flagsElement = document.getElementById("flags");





const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style; 

toggleColors.addEventListener("click", (e) => {
    rootStyles.setProperty("--primary-color", e.target.dataset.color);
});


const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const recuestJson = await fetch(`./language/${language}.json`);
    const texts = await recuestJson.json();

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});





