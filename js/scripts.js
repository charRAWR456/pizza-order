function Pizza(size, crust, meats, veggies, cheese, sauce){
  this.size = size
  this.crust = crust
  this.meats = meats
  this.veggies = veggies
  this.cheese = cheese
  this.sauce = sauce
}

function Customer(name, number, address){
  this.name = name;
  this.address = address;
  this.number = number;
}

Customer.prototype.price = function(){


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
    var size = $("#size").val();
    var meats = $("input:checkbox[name=meatToppings]:checked").each(function(){
      var meatToppings = $(this).val();
      $('#toppings').append(meatToppings+ "<br>");
    });
    var veggies = $("input:checkbox[name=vegtableToppings]:checked").each(function(){
      var vegtableToppings = $(this).val();
      $('#toppings').append(vegtableToppings+ "<br>");
      $("#outputOrder").show();
    });
    var customerPizza = new Pizza(size, crust, meats, veggies, cheese, sauce)
    var customer = new Customer(name, number, address)
    console.log(customer)
    console.log(customerPizza)
    $('#outputOrder').append("with " + crust + ", " + cheese + ", and " + sauce + " sauce. " + "<br>" + "<br>" +  "If everything looks correct, your " + size + " pizza will be delivered to: " + "<br>" + address + "<br>"+"If we have any questions we will contact you at: " + "<br>" + number + "<br>" + "<br>" + "Thank you " + name + " for your order!");
  });
});
