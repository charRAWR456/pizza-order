function Pizza(size, crust, topping1, topping2, cheese, sauce){
  this.size = size
  this.crust = crust
  this.topping1 = topping1
  this.topping2 = topping2
  this.cheese = cheese
  this.sauce = sauce
}

function Customer(name, number, address, pizza){
  this.name = name;
  this.pizza = Pizza();
  this.address = address;
  this.number = number;
}

Customer.prototype.orderInfo = function(){
  return this.name + this.number + this.address + this.pizza;

}

$(document).ready(function(){


  $("#orderTypeButton").click(function(){
    if ($("input:radio[name=orderType]:checked").val() == "delivery"){
      $(".address").show();
      $("#customerOrder").show();
    }

    if ($("input:radio[name=orderType]:checked").val() == "carryOut"){
      $("#customerOrder").show();
      $(".address").hide();
    }
  });

$("#submitOrderButton").click(function(event){
event.preventDefault();
var name = $("#customerName").val();
var number = $("#customerNumber").val();
var address = $("#customerAddress").val();
var crust = $("#crust").val();
var cheese = $("#cheese").val();
var sauce = $("#sauce").val();

$('#outputOrder').append("with " + crust + ", " + cheese + ", and " + sauce + " sauce. " + "<br>" + "<br>" +  "If everything looks correct, your pizza will be delivered to: " + "<br>" + address + "<br>"+"If we have any questions we will contact you at: " + "<br>" + number + "<br>" +"<br>" + name + " for your order!");


$("input:checkbox[name=meatToppings]:checked").each(function(){
      var meatToppings = $(this).val();
      $('#toppings').append(meatToppings+ "<br>");
    });
$("input:checkbox[name=vegtableToppings]:checked").each(function(){
      var vegtableToppings = $(this).val();
      $('#toppings').append(vegtableToppings+ "<br>");
      $("#outputOrder").show();
    });

});
});
