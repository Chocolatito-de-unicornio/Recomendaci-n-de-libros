document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recommendationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const bookTitle = document.getElementById("book-title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const review = document.getElementById("review").value;

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
  });
});
