

document.addEventListener("DOMContentLoaded", function () {

    const movieTitle = "Movie Title aus der DB";
    const movieDescription = "Movie Description aus der DB";

    document.querySelector("h1").textContent = movieTitle;
    document.querySelector("h2").textContent = movieDescription;


    const filmPlakatSrc = "URL des Filmbildes aus der DB";
    const filmPlakat = document.querySelector(".Film-Plakat");
    filmPlakat.src = filmPlakatSrc;


    const backButton = document.querySelector(".dropdown-content button:first-child");
    backButton.addEventListener("click", function () {
        
    });


    const homepageButton = document.querySelector(".dropdown-content button:last-child");
    homepageButton.addEventListener("click", function () {

    });
});
