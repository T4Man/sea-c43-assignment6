//javascript for donutMaster.html CodeFellows Foundations 1 Assignment 6
var TopPotShop = function(shopLoc, minCustPerHour, maxCustPerHour,
    avgDonutPerCust, businessHours) {
  this.shopLoc = shopLoc;
  this.min = minCustPerHour;
  this.max = maxCustPerHour;
  this.avg = avgDonutPerCust;
  this.hrs = businessHours;
  this.donutsPerHour = function() {
    return (Math.random() * (this.max - this.min + 1) +
    this.min) * this.avg;
  };
    this.donutsPerDay = function() {
    return this.donutsPerHour() * this.hrs;
  };
};
//---------------------------------------------------------------------
var DonutMaster = function() {
  this.stores = [];
  this.addNewShop = function(shopLoc, minCustPerHour,
      maxCustPerHour, avgDonutPerCust, businessHours) {
    var newShop = new TopPotShop(shopLoc, minCustPerHour,
      maxCustPerHour, avgDonutPerCust, businessHours);
    this.stores.push(newShop);
    };

  this.generateReport = function() {
    this.reportOut = [];
    for (var index = 0; index < this.stores.length; index++){
      this.reportOut.push(this.stores[index].shopLoc,
      this.stores[index].hrs,
      Math.round(this.stores[index].donutsPerHour()),
      Math.round(this.stores[index].donutsPerDay()));
    }
  };
};
//---------------------------------------------------------------------
var dm = new DonutMaster();

dm.addNewShop("Belltown", 8, 43, 4.5, 14);
dm.addNewShop("Capitol Hill", 4, 37, 2.00, 14);
dm.addNewShop("South Lake Union", 9, 12, 6.33, 11);
dm.addNewShop("Roosevelt",2, 28, 1.25, 11);
dm.addNewShop("Ballard", 8, 58, 3.75, 12);
dm.addNewShop("Pioneer Square", 4, 48, 4, 11);

dm.generateReport();

$(function(){
  $('#0').html(dm.reportOut[0]);
  $('#1').html(dm.reportOut[1]);
  $('#2').html(dm.reportOut[2]);
  $('#3').html(dm.reportOut[3]);
  $('#4').html(dm.reportOut[4]);
  $('#5').html(dm.reportOut[5]);
  $('#6').html(dm.reportOut[6]);
  $('#7').html(dm.reportOut[7]);
  $('#8').html(dm.reportOut[8]);
  $('#9').html(dm.reportOut[9]);
  $('#10').html(dm.reportOut[10]);
  $('#11').html(dm.reportOut[11]);
  $('#12').html(dm.reportOut[12]);
  $('#13').html(dm.reportOut[13]);
  $('#14').html(dm.reportOut[14]);
  $('#15').html(dm.reportOut[15]);
  $('#16').html(dm.reportOut[16]);
  $('#17').html(dm.reportOut[17]);
  $('#18').html(dm.reportOut[18]);
  $('#19').html(dm.reportOut[19]);
  $('#20').html(dm.reportOut[20]);
  $('#21').html(dm.reportOut[21]);
  $('#22').html(dm.reportOut[22]);
  $('#23').html(dm.reportOut[23]);

$('#dmTable').hide();
$('#tableButton').on('click', function(){
  $('#dmTable').fadeToggle("slow", "linear");
});

$('.shopList').hide();
$('#listStores').on('click', function(){
  $('.shopList').slideToggle("slow", "linear");
});

$('#BelltownShop').hide();
$('#store1').on('click', function(){
  $('#BelltownShop').slideToggle("slow", "linear");
});

$('#CapHillShop').hide();
$('#store2').on('click', function(){
  $('#CapHillShop').slideToggle("slow", "linear");
});

$('#SLUshop').hide();
$('#store3').on('click', function(){
  $('#SLUshop').slideToggle("slow", "linear");
});

$('#RooseveltShop').hide();
$('#store4').on('click', function(){
  $('#RooseveltShop').slideToggle("slow", "linear");
});

$('#BallardShop').hide();
$('#store5').on('click', function(){
  $('#BallardShop').slideToggle("slow", "linear");
});

$('#PioneerSquareShop').hide();
$('#store6').on('click', function(){
  $('#PioneerSquareShop').slideToggle("slow", "linear");
});
});

