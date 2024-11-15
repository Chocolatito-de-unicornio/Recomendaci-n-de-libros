document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recommendationForm");
  const addReviewLink = document.getElementById("add-review-link");

  addReviewLink.addEventListener("click", function (event) {
    event.preventDefault();
    const review = prompt("Escribe tu reseña:");
    if (review) {
      localStorage.setItem("review", review);
      alert("Reseña guardada!");
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const bookTitle = document.getElementById("book-title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const review = localStorage.getItem("review") || "";

    const recommendation = {
      bookTitle,
      author,
      genre,
      review,
    };

    let recommendations = localStorage.getItem("recommendations");
    if (recommendations) {
      recommendations = JSON.parse(recommendations);
    } else {
      recommendations = [];
    }

    recommendations.push(recommendation);
    localStorage.setItem("recommendations", JSON.stringify(recommendations));

    alert("Gracias por tu recomendación!");
    form.reset();
    localStorage.removeItem("review");
  });
});
