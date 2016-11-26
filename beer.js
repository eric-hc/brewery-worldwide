function searchBrewery() {
    var query = document.getElementById("brewery_query").value;
    $.ajax({
    type: "GET",
    url: "http://localhost:3000/test?query=" + query,
    success: function(result) {
        console.log(result);
        var output  = "";
        for (item in result) {
            output += "<li>" + result[item].name + "</li>";
        }
        document.getElementById("output").innerHTML=(output);
    },
    error: function(result) {
        console.log("Error");
        document.getElementById("output").textContent=("Something went wrong");
    }
    });
}