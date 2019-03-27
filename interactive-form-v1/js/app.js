$('#name').focus();

//creates a text field when "Job Role" => "Other" is select_method
$('#other_title').hide();

$('#title').change(function() {
  if ($('#title').val() === "other") {
    $('#other_title').show();
  }
})

//hides all color choices
//$('#color option').hide();
$('#colors-js-puns').hide();
/*
unhides colors on change in the tshirt design select menu.  different colors are shown
depending on which option was selected.
*/
$('#design').on('change', function() {
  $('#colors-js-puns').show();
  $('#color option').hide();
  if($("#design").val() === "heart js") {
    $('#color option[value="tomato"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
  } else if ($("#design").val() === "js puns") {
    //$('#color option').hide();
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
  }
});

const $jsFrameworks = $('input[name="js-frameworks"]');
const $express = $('input[name="express"]');
const $jsLibs = $('input[name="js-libs"]');
const $node = $('input[name="node"]');


const $checkbox = $('label input');
let $dollarTotal = 0;
const $totalCost = $('<h3>Total: $' + $dollarTotal + '</h3>');
$('.activities').append($totalCost);


$checkbox.on('change', function(event) {

  if ($(event.target).is(':checked')) {
    if ($(event.target).parent().text().indexOf('Tuesday') >= 0) {

      //checks for conflicting events on Tuesday at 9am-12pm time slot
      if ($(event.target).parent().text().indexOf('9am') >= 0) {
        $checkbox.each(function(index, element){
          if ($(element).parent().text().indexOf('Tuesday 9am-12pm') >= 0) {
            $(element).attr('disabled', true);
            $(event.target).removeAttr('disabled');
          }
        });
      }

      //checks for conflicting events on Tuesday at 1-4pm time slot
      if ($(event.target).parent().text().indexOf('1pm') >= 0) {
        $checkbox.each(function(index, element){
          if ($(element).parent().text().indexOf('Tuesday 1pm-4pm') >= 0) {
            $(element).attr('disabled', true);
            $(event.target).removeAttr('disabled');
          }
        });
      }
    }

      //Addes to the dollar total based on the value of the event
      if ($(event.target).parent().text().indexOf('Main') >= 0) {
        $dollarTotal += 200
      } else {
        $dollarTotal += 100;
      }
    $totalCost.html('<h3>Total: $' + $dollarTotal + '</h3>');
  }

  //If a box is unchecked
  if ($(event.target).is(':checked')==false) {
    if ($(event.target).parent().text().indexOf('Tuesday') >= 0) {

      //re-enables events on Tuesday at 9am-12pm
      if ($(event.target).parent().text().indexOf('9am') >= 0) {
        $checkbox.each(function(index, element){
          if ($(element).parent().text().indexOf('Tuesday 9am-12pm') >= 0) {
            $(element).removeAttr('disabled');
          }
        });
      }

      //re-enables events on Tuesday at 1-4pm
      if ($(event.target).parent().text().indexOf('1pm') >= 0) {
        $checkbox.each(function(index, element){
          if ($(element).parent().text().indexOf('Tuesday 1pm-4pm') >= 0) {
            $(element).removeAttr('disabled');
          }
        });
      }
    }

    //subtracts from the dollar total depending on event upon unchecking
    if ($(event.target).parent().text().indexOf('Main') >= 0) {
      $dollarTotal -= 200
    } else {
      $dollarTotal -= 100;
    }
    $totalCost.html('<h3>Total: $' + $dollarTotal + '</h3>');
  }

});

/*
//adds event cost and tallies total cost of the events selected
const $totalCost = $('<h3>Total: $' + dollarTotal + '</h3>');
$('.activities').append($totalCost);


const $selectpayment = $('#payment option[value="select_method"]');
const $creditCard = $("#credit-card");
const $paypal = $("#credit-card").next();
const $bitcoin = $("#credit-card").next().next();
$paypal.hide();
$bitcoin.hide();

$('#payment').on('select', function() {
  $selectpayment.setAttribute('disabled', true);
  if ($('#payment option[value="credit card"]').prop('selected')) {
    $creditCard.show();
  }
  if ($('#payment option[value="paypal"]').prop('selected')) {
    $paypal.show();
  }
  if ($('#payment option[value="bitcoin"]:selected')) {
    $bitcoin.show();
  }
});
*/
