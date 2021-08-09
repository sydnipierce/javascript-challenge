// from data.js
var tableData = data;

// from index.html - link to objects
var button = d3.select("#datetime")

var form = d3.select(".form-control")

// event  handlers
button.on("click", TableFilter)
form.on("submit", TableFilter)

