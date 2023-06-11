$(document).ready(function() {
    // Senna düğmesine tıklanınca Ajax ile Senna verilerini getir ve HTML'e yerleştir
    $("#sennaBtn").click(function() {
      $.ajax({
        url: "json/legends.json",
        dataType: "json",
        success: function(data) {
          var sennaData = data.legends[0];
          var content = "<h2>" + sennaData.title + "</h2>";
          content += "<p>" + sennaData.paragraph + "</p>";
          content += "<div class='legend_images'>";
          sennaData.images.forEach(function(image) {
            content += "<img src='" + image + "'>";
          });
          content += "</div>";
          $("#legendContent").html(content);
        }
      });
    });
  
    // Schumacher düğmesine tıklanınca Ajax ile Schumacher verilerini getir ve HTML'e yerleştir
    $("#schumacherBtn").click(function() {
      $.ajax({
        url: "json/legends.json",
        dataType: "json",
        success: function(data) {
          var schumacherData = data.legends[1];
          var content = "<h2>" + schumacherData.title + "</h2>";
          content += "<p>" + schumacherData.paragraph + "</p>";
          content += "<div class='legend_images'>";
          schumacherData.images.forEach(function(image) {
            content += "<img src='" + image + "'>";
          });
          content += "</div>";
          $("#legendContent").html(content);
        }
      });
    });
  });
  