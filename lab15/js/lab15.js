var apiEndpoint = "https://xkcd.com/info.0.json"

$("#api-button").click(doAPIStuff);

function putTextOnPage(text){
  $("#output").html(text);
}

function doAPIStuff() {
  console.log("Doing API Stuff");
  $.ajax({
  
    url: apiEndpoint,

    data: { },

    type: "GET",

    dataType : "json",

    success: function( data ) {

      var textData = JSON.stringify(data);

      var str = "";

      var imageURL = data.img;
      var title = data.title;
      var alt = data.alt;

      str += "<h2>" + title + "</h1>";
      str += "<img src='" + imageURL + "' title='" + alt + "'>"

      putTextOnPage(str);

      console.log("Success:", textData);
    }
  })

  .fail(function( xhr, status, errorThrown ) {
    console.log("Failure.");
    putTextOnPage(errorThrown + " Status:" + status);

  })
  console.log("Asynchronously doing the next thing.");

}
