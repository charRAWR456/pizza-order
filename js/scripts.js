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

Pizza.prototype.price = function(){
  var pizzaPrice = 15.00;
  if (this.size === "Personal"){
    pizzaPrice -= 5;
  } else if(this.size === "Small"){
    pizzaPrice -= 2;
  }else if(this.size === "Medium"){
    pizzaPrice;
  }else if(this.size === "Large"){
    pizzaPrice += 5;
  }

  if (this.crust === "Stuffed Crust"){
    pizzaPrice += 3;
  }

  if (this.cheese === "Extra Cheese"){
    pizzaPrice += 3;
  }
  return pizzaPrice;
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

    customerPizza = new Pizza(size, crust, meats, veggies, cheese, sauce)
    customer = new Customer(name, number, address)


    $('#outputOrder').append("with " + customerPizza.crust + ", " + customerPizza.cheese + ", and " + customerPizza.sauce + " sauce. " + "<br>" + "<br>" +  "If everything looks correct, your " + customerPizza.size + " pizza will be" + "<b>" + " delivered to: " + "</b>" + "<br>" + customer.address + "<br>" + "<br>" + "If we have any questions we will" + "<b>" + " contact you at: " + "</b>" + "<br>" + customer.number + "<br>" + "<br>" + "Thank you " + "<b>" + name + "</b>" + " for your order! Your total is:"+"<b>" + " $" + customerPizza.price() + ".00." + "</b>");
  });
});
