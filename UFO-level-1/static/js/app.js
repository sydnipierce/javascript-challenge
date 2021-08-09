// from data.js
var tableData = data;

// from index.html - link to objects
var button = d3.select("#datetime")

var form = d3.select(".form-control")

var table = d3.select("tbody")

// event  handlers
button.on("click", TableFilter)
form.on("submit", TableFilter)

// create function to filter the table results
function TableFilter() {
    d3.event.preventDefault();

    table.html("")

    tableData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(weatherReport).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
}