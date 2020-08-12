// When user clicks add-btn
$("#burger-submit").on("click", (event) => {
  event.preventDefault();

  // Make a newBurger object
  const newBurger = {
    author: $("#author").val().trim(),
    body: $("#burger-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newBurger);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBurger)
    .then(() => {
      const row = $("<div>");
      row.addClass("burger");

      row.append("<p>" + newBurger.author + " logged: </p>");
      row.append("<p>" + newBurger.body + "</p>");
      row.append("<p>On " + moment(newBurger.createdAt).format("MMMM Do YYYY, h:mm:ss a") + "</p>");

      $("#burger-area").prepend(row);
    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#burger-box").val("");
});

// When the page loads, grab all burgers
$.get("/api/all", (data) => {
  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {

      const row = $("<div>");
      row.addClass("burger");

      row.append("<p>" + data[i].author + " logged.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>On " + moment(data[i].createdAt).format("MMMM Do YYYY, h:mm:ss a") + "</p>");

      $("#burger-area").prepend(row);
    }
  }
});