// from data.js
var tableData = data;

// from index.html - link to objects
var button = d3.select("#datetime");

var form = d3.select(".form-control");

var table = d3.select("tbody");

var field = d3.select("input");

var input = field.property("value");

// event  handlers
button.on("click", TableFilter);
form.on("submit", TableFilter);

// create function to filter the table results
function TableFilter() {
    d3.event.preventDefault();

    table.html("");

    tableData.filter() {

    };

    tableData.forEach(function(sighting) {
        var row = table.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}