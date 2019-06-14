var groceryList= $('.grocery-list');
var submit1 = $('.submit-button1');

submit1.on("click", appendgroceryList);

function appendgroceryList() {
  var firstItem = $('.first-item').val();
    $('.first-item').val("");

  groceryList.append(`
    <div class="name-card"><input type = "checkbox" class = "checkbox">Buy ${firstItem}!</div>
  `);

  var checkbox = $(".checkbox");
  checkbox.on("click",removeItem);

}

function removeItem() {
 event.target.parentNode.remove();
}





var errandList= $('.errand-list');
var submit2 = $('.submit-button2');

submit2.on("click", appenderrandList);

function appenderrandList() {
  var secondItem = $('.second-item').val();
      $('.second-item').val("");

  errandList.append(`
    <div class="name-card"><input type = "checkbox" class = "checkbox">${secondItem}!</div>
  `);

  var checkbox = $(".checkbox");
  checkbox.on("click",removeItem);

  }

  function removeItem() {
  event.target.parentNode.remove();
  }
  
  
  
  
  

var reminder= $('.reminder');
var submit3 = $('.submit-button3');

submit3.on("click", appendreminder);

function appendreminder() {
  var thirdItem = $('.third-item').val();
    $('.third-item').val("");

  reminder.append(`
    <div class="name-card"><input type = "checkbox" class = "checkbox">${thirdItem}!</div>
  `);

  var checkbox = $(".checkbox");
  checkbox.on("click",removeItem);
  }

  function removeItem() {
  event.target.parentNode.remove();
  }
  
  
  
  
  
  
var familyMember= $('.family-person');
var choreSubmit = $('.chore-submit');

choreSubmit.on("click", appendfamilyMember);

function appendfamilyMember(e) {
  var family = $('.family').val();
  var chore = $('.chore').val()
  var level = $("input[name='level']:checked").val();
  console.log(level)
    
 e.preventDefault();
if (level == "easy") {
    var table1 = $('.table1')
    table1.append(`<tr> <td class="chore-list">${family} </td><td class="family-person">${chore}</td> </tr>`);
}
else if (level == "medium") {
    var table2 = $('.table2')
    table2.append(`<tr> <td class="chore-list">${family} </td><td class="family-person">${chore}</td> </tr>`);
}
else {
    var table3 = $('.table3')
    table3.append(`<tr> <td class="chore-list">${family} </td><td class="family-person">${chore}</td> </tr>`);
}
$(".family").val("");
$(".chore").val(" ");

}


var eventSubmit = $('.event-submit');

eventSubmit.on("click", clear);
   
   function clear(){     
   $(".event").val("")  
   }
 
