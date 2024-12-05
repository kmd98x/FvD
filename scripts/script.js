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



const listHeadings = document.querySelectorAll('footer section div h4');

listHeadings.forEach((heading) => {
	const list = heading.nextElementSibling;

	heading.addEventListener('click', () => {
		list.classList.toggle('show');
        console.log("clicked")
	});
});




