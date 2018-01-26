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
var crust = $("#crust").val();
var cheese = $("#cheese").val();
var sauce = $("#sauce").val();
$("input:checkbox[name=meatToppings]:checked").each(function(){
      var meatToppings = $(this).val();
      $('#toppings').append(meatToppings+ "<br>");
    });
$("input:checkbox[name=vegtableToppings]:checked").each(function(){
      var vegtableToppings = $(this).val();
      $('#toppings').append(vegtableToppings+ "<br>");
    });
    
  alert(crust + cheese + sauce);
});
});
