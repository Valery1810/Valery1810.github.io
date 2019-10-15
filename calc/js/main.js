$(document).ready(function() {
  let tirSize, // размер
    pricePapper = 0, //цена за бумагу
    priceForma = 0, // цена за форму
    pricePrint = 0, //цена за печать
    sum = 0, //итого
    color_format = "";
  let typePapper = {
    "Выберите бумагу": 0,
    "Мелованная бумага (белая)": 6.8,
    "Бумага повышенной белизны (SPLENDORGEL)": 40.5,
    "Prestige Лён (белый)": 45
  };
  let typeColor = {
    "Выберите цветность": { file: 0, print: 0 },
    "Односторонняя черно-белая": { file: 14, print: 110 },
    "Двусторонняя черно-белая": { file: 28, print: 220 },
    "Односторонняя цветная": { file: 37, print: 110 },
    "Цветная с лицевой, ч/б с оборотной": { file: 51, print: 220 },
    "Двусторонняя цветная": { file: 74, print: 220 }
  };

  function typePaper(){
    let html = "";
    for(type in typePapper)
    {
    html += "<option value='"+typePapper[type]+"'>" + type + "</option>";
    }
    $("#pap").append(html);
    console.log(html);
  }

  function colorPaper(){
    let html = "";
    for(type in typeColor)
    {
    html += "<option value='"+type+"'>" + type + "</option>";

  }
    $("#col").append(html);

  }
  typePaper();
  colorPaper();
  $(".calculate").change(function() {

    tirSize=$("#tir").val()/30;
    pricePapper=$("#pap").val()*tirSize;
    priceForma=typeColor[$("#col").val()]["file"];
    pricePrint=typeColor[$("#col").val()]["print"]*tirSize;
    sum=pricePapper+priceForma+pricePrint;
    console.log(sum);
    $("#itogo").html(sum);

    if(color_format!=$("#col").val())
    {
    color_format = $("#col").val();
    $(".images img").hide(350);
      switch  (color_format) {
        
    case "Односторонняя черно-белая": 
    $("#10").show(350);
    break;
    case "Двусторонняя черно-белая": 
    $("#11").show(350);
    break;
    case "Односторонняя цветная": 
    $("#40").show(350);
    break;
    case "Цветная с лицевой, ч/б с оборотной": 
    $("#41").show(350);
    break;
    case "Двусторонняя цветная": 
    $("#44").show(350);
    break;
      }
    }
  });
});
