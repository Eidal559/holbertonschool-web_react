import $ from "jquery";
import _ from "lodash";

$(document).ready(() => {
  // Append elements to the body
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append('<button id="btn">Click here to get started</button>');
  $("body").append('<p id="count"></p>');
  $("body").append("<p>Copyright - Holberton School</p>");

  // Initialize counter
  let count = 0;

  // Function to update counter
  const updateCounter = () => {
    count++;
    $("#count").text(`${count} clicks on the button`);
  };

  // Debounce button click event
  $("#btn").on("click", _.debounce(updateCounter, 500));
});
