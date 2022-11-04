console.log("Hello there!");

/* Step 1: Grab toggle button with query selector*/

const checkbox = document.querySelector("#checkbox");
/* Step 2: Add event listener to that button from Step 1 and listen for click */
console.log(checkbox);
checkbox.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

/* Step 3: Inside of event listener add and remove (or simply toggle) "dark-theme" CSS class */
