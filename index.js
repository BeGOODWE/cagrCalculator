$(document).ready(function(){
  $("button").click(function(){
    var price1 = $(".new").val();
    var price0 = $(".old").val();
    var t = $(".years").val();

    var cagr = ((price1/price0)**(1/t))-1
    var cagrPercentage = cagr * 100
    cagrPercentage = Math.round(cagrPercentage*100) / 100


    $(".result").text("CAGR is: " + cagrPercentage + "%");
  });
});
