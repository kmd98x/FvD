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




function footerLinks () {
    const footerHeadings = document.querySelectorAll("footer .header-link");

    footerHeadings.forEach(heading => {
        heading.addEventListener("click", () => {
            console.log("clicked")

            
        })
    })

}

footerLinks()