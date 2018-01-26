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

  $("#orderTypeButton").click(function(event){
    event.preventDefault();
    if ($("input:radio[name=orderType]:checked").val() == "delivery"){
      $(".address").show();
      $("#customerOrder").show();
    }

    if ($("input:radio[name=orderType]:checked").val() == "carryOut"){
      $("#customerOrder").show();
      $(".address").hide();
    }

  });
});
