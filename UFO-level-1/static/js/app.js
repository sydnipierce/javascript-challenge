// from data.js
var tableData = data;

// from index.html - link to objects
var button = d3.select("#filter-btn");

var form = d3.select("form");

// create function to filter the table results
function TableFilter() {
    d3.event.preventDefault();

    var table = d3.select("tbody");

    var field = d3.select("input");

    var fieldValue = field.property("value");

    table.html("");

    var tableFilter = tableData.filter(sighting => sighting.datetime == fieldValue);

    tableFilter.forEach(function(sighting) {
        var row = table.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};

// event  handlers
button.on("click", TableFilter);
form.on("submit", TableFilter);