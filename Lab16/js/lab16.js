//Author: Jonathan Palafox
//created: 12/5/2021
//license: Public Domain
//






var myUrl = "https://xkcd.com/info.0.json ";



$("#content").toggleClass("padding");
$("#output").toggleClass("font");

$("#alt").toggleClass("font");
$("#activate").click(function(){


  var comicObj = $.ajax({
       url: myUrl,
      type: "GET",
      dataType : "json",
      success: function(data) {
          console.log(data);
          var imgUrl = data.img;
          var title = data.title;
          var alt = data.alt;

          $("#image").attr("title", title);
          $("#output").text(title);

          $("#image").attr("src", imgUrl, "alt", alt);

          $("#image").attr("alt", alt);
          $("#alt").text(alt);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
           }
  })
})
