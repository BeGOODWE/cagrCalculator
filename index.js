$(document).ready(function(){
  $(".cagrButton").click(function(){
    var price1 = $(".new").val();
    var price0 = $(".old").val();
    var t = $(".years").val();

    var cagr = ((price1/price0)**(1/t))-1
    var cagrPercentage = cagr * 100
    cagrPercentage = Math.round(cagrPercentage*100) / 100


    $(".result").text("CAGR is: " + cagrPercentage + "%");
  });
});

$(document).ready(function(){
  $(".fvButton").click(function(){
    var cagr = $(".fvCAGR").val() / 100;
    var price0 = $(".fvOld").val();
    var t = $(".fvYears").val();

    var price1 = ((cagr + 1)**t)*price0
    price1 = Math.round(price1*100) / 100
    $(".fvResult").text("New price is: " + price1);
  });
});

$(document).ready(function(){
  $(".pvButton").click(function(){
    var cagr = $(".pvCAGR").val() / 100;
    var price1 = $(".pvNew").val();
    var t = $(".pvYears").val();

    var price0 = price1 / ((cagr + 1)**t)
    price0 = Math.round(price0*100) / 100
    $(".pvResult").text("Old price is: " + price0);
  });
});
