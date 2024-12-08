// JavaScript Document


// https://www.w3schools.com/jsref/jsref_obj_date.asp + chatGPT

// function getNextDay(date) {
//     // Clone the date object to avoid mutating the original date
//     let nextDay = new Date(date);
    
//     // Add one day to the date
//     nextDay.setDate(date.getDate() + 1);
    
//     return nextDay;
// }



// function displayDeliveryDate() {
//  const delivery_date = document.querySelector("delivery_date");

//  const today = new Date();
//  const tomorrow = getNextDay(today);

// //  delivery_date.innerHTML = tomorrow;
//  console.log(tomorrow)
// }

// displayDeliveryDate();



const listHeadings = document.querySelectorAll('footer section div h4, .productInformation h4');

listHeadings.forEach((heading) => {
	const list = heading.nextElementSibling;

	heading.addEventListener('click', () => {
		list.classList.toggle('show');
        console.log("clicked")
	});
});



const heart = document.querySelector('.heart-count');
const button = document.querySelectorAll('button');

button.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.classList.contains('liked')) {
			heart.innerText = parseInt(heart.innerText) - 1;
			button.classList.remove('liked');
		} else {
			heart.innerText = parseInt(heart.innerText) + 1;
			button.classList.add('liked');
		}
	});
})
heart.innerText = '0';


function hamburgerMenu() {

	const navigationMenu = document.querySelector(".navigationMenu");
	const openMenu = document.querySelector(".navBar button");
	const closeMenu = document.querySelector(".navigationMenu div section img:nth-of-type(1)");
	// console.log(navigationMenu, openMenu, closeMenu)

	let navIsOpen = false;

	[openMenu, closeMenu].forEach(element => {
		element.addEventListener("click",() => {
			if (navIsOpen == false) {
				navIsOpen = true;
				navigationMenu.classList.add("is-open")
			}
			else {
				navIsOpen = false;
				navigationMenu.classList.remove("is-open")
			}
		})
	})
}



function themeSwitcher() {
    const switcherButton = document.querySelector(".theme-switcher");
    const currentTheme = localStorage.getItem("theme");
    const icons = document.querySelectorAll(".theme-icon");  
 
    function updateIcons(theme) {
        const folder = theme === "dark" ? "images/darkmode" : "images/icons";
        icons.forEach(icon => {
            const fileName = icon.src.substring(icon.src.lastIndexOf("/") + 1); 
            icon.src = `${folder}/${fileName}`; 
        });
    }
 
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        updateIcons(currentTheme); 
    }
 
    switcherButton.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
 
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
 
        updateIcons(newTheme); 
    });
}



  








hamburgerMenu()
themeSwitcher()
changeIconColors()

