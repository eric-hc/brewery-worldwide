function searchBrewery() {
  var query = document.getElementById("brewery_query").value;
  $.ajax({
    type: "GET",
    url: "http://ec2-35-161-117-156.us-west-2.compute.amazonaws.com:3000/test?query=" + query,
    success: function(result) {
      console.log(result);
      var output = "";
      var images_output = "";
        output += "<table>";
      for (var x =0;x< result.length;x++) {
        if(result[x].hasOwnProperty("website")&& result[x].hasOwnProperty("images")){
            output += "<tr><td><img src="+ result[x].images.icon + "></td> <td><a href=" + result[x].website + "  target='_blank'>" + result[x].name + "</a></td>               </tr>";  
        } else if(result[x].hasOwnProperty("website") && result[x].hasOwnProperty("images")!==true){
            output += "<tr><td><img src='https://s3-us-west-2.amazonaws.com/brewery-worldwide/brewery_placeholder.png'></td> <td><a href=" + result[x].website + "                   target='_blank'>" + result[x].name + "</a></td></tr>";
        } else {
            output += "<tr><td><img src='https://s3-us-west-2.amazonaws.com/brewery-worldwide/brewery_placeholder.png'></td> <td>"+ result[x].name + "</a></td></tr>";
        }
      }
      output += "</table>";
      document.getElementById("output").innerHTML = (output);
    },
    error: function(result) {
      console.log("Error");
      document.getElementById("output").textContent = ("Something went wrong, try viewing this page on http, instead of https");
    }
  });
}

$(document).ready(function() {
  $("#brewery_query").submit(function() {
    return false;
  });
  $("#brewery_query").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#search_button").click();
    }
  });
});