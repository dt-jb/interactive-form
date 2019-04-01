
//Puts focus on name field upon page load
$('#name').focus();

//Disables 'select method' as a payment method and preselects credit card
$('#payment option[value="select_method"]').attr('disabled', true);
$('#payment option[value="credit card"]').attr('selected', true);

//creates a text field when "Job Role" => "Other" is select_method
$('#other_title').hide();
$('#title').change(function() {
  if ($('#title').val() === "other") {
    $('#other_title').show();
  }
})

//hides all color choices
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
    $('#color option[value="cornflowerblue"]').attr('selected', false);
    $('#color option[value="tomato"]').attr('selected', true);
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
  } else if ($("#design").val() === "js puns") {
    //$('#color option').hide();
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="tomato"]').attr('selected', false);
    $('#color option[value="cornflowerblue"]').attr('selected', true);
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
  } else {
    $('#colors-js-puns').hide();
  }
});
/*
const $jsFrameworks = $('input[name="js-frameworks"]');
const $express = $('input[name="express"]');
const $jsLibs = $('input[name="js-libs"]');
const $node = $('input[name="node"]');
*/

//
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

//shows payment info based on selection, and hides those not selected
const $selectpayment = $('#payment option[value="select_method"]');
const $creditCard = $("#credit-card");
const $paypal = $("#credit-card").next();
const $bitcoin = $("#credit-card").next().next();
const $paymentOptions = $('#payment option');
$paypal.hide();
$bitcoin.hide();

$('#payment').on('change', function(event) {
  if ($('#payment option[value="credit card"]').is(':selected')) {
    $creditCard.show();
    $paypal.hide();
    $bitcoin.hide();
  } else if ($('#payment option[value="paypal"]').is(':selected')) {
    $paypal.show();
    $bitcoin.hide();
    $creditCard.hide();
  } else if ($('#payment option[value="bitcoin"]').is(':selected')) {
    $bitcoin.show();
    $paypal.hide();
    $creditCard.hide();
  }
});

//  VALIDATION SECTION
const nameReg = /^[A-Za-z \-\']+$/i;
const emailReg = /^[^@.]+@[\w]+\.[a-z]{2,4}$/i;
const ccReg = /^[0-9]{13,16}$/;
const zipReg = /^[0-9]{5}$/;
const cvvReg = /^[0-9]{3}$/;

const $name = $('#name');
const $email = $('#mail');
const $cc = $("#cc-num");
const $zip = $('#zip');
const $cvv = $('#cvv');

//functionality currently being carried out in individual input fields below
function validStyle (valid, input) {
  if (!valid || input.val() == "") {
    input.css('border-color', 'red');
  } else {
    input.css('border-color', '');
  }
}

//functionality currently being carried out in individual input fields below
function preventSub(validator) {
  $('form').submit(function(event) {
    if (!validator) {
      event.preventDefault();
    }
    else {
      return true;
    }
  });
};

let $actMessage = $('<label>Please select at least one activity.</label>');

$('button').click(function(event) {
  if ($('label input:checked').length === 0) {
    event.preventDefault();
    //$('.activities').css('background-color', 'red');
    $('.activities').prepend($actMessage);
    $actMessage.css({'background-color': 'red', 'display': 'inline', 'color': 'white', 'border-radius': '3px', 'margin-bottom': '5px'});
  } else {
    $actMessage.detach();
    //$('.activities').css('background-color', '');
  }
  if ($('#name').val()==='') {
    event.preventDefault();
    $('#name').css('border-color', 'red');
  }
  if ($('#mail').val()==='') {
    event.preventDefault();
    $('#mail').css('border-color', 'red');
  }
  if ($('#payment option[value="credit card"]').is(':selected')) {
      if ($('#cc-num').val()==='') {
        event.preventDefault();
        $('#cc-num').css('border-color', 'red');
      }
      if ($('#zip').val()==='') {
        event.preventDefault();
        $('#zip').css('border-color', 'red');
      }
      if ($('#cvv').val()==='') {
        event.preventDefault();
        $('#cvv').css('border-color', 'red');
      }
  }
  else {
    return true;
  }
});

//Form validation
let $nameValid = false;
$('#name').on('input', function () {
  $nameValid = nameReg.test($('#name').val());
  // test Code (replaces validStyle() call)
  if (!$nameValid|| $('#name').val() == "") {
    $('#name').css('border-color', 'red');
  } else {
    $('#name').css('border-color', '');
  }
  // test Code (replaces preventSub() call)
  $('form').submit(function(event) {
    if (!$nameValid) {
      event.preventDefault();
    }
    else {
      return true;
    }
  });
});
let $emailMessage = $('<label>Please enter email.</label>');
let $emailValid = false;
$('#mail').one('focus', function () {
  $('#mail').before($emailMessage);
  $emailMessage.css({'background-color': 'red', 'display': 'inline',
    'color': 'white', 'border-radius': '3px', 'margin-bottom': '5px'});
});
$('#mail').on('input', function () {
  $emailValid = emailReg.test($('#mail').val());
  // test Code (replaces validStyle() call)
  if (!$emailValid|| $('#mail').val() == "") {
    $('#mail').css('border-color', 'red');
    $emailMessage.text('Please properly format email (i.e. "name@example.com").');
  } else {
    $('#mail').css('border-color', '');
    $emailMessage.html('<label></label>');
  }
  // test Code (replaces preventSub() call)
  $('form').submit(function(event) {
    if (!$emailValid) {
      event.preventDefault();
    }
    else {
      return true;
    }
  });
});

let $activitiesValid = false;
$('label input').on('change', function () {
  if ($('label input:checked').length === 0) {
    //$('.activities').css('background-color', 'red');
    $('.activities').prepend($actMessage);
    $actMessage.css({'background-color': 'red', 'display': 'inline', 'color': 'white', 'border-radius': '3px', 'margin-bottom': '5px'});
  } else {
    //$('.activities').css('background-color', '');
    $actMessage.detach();
    $activitiesValid = true;
  }
  preventSub($activitiesValid);

});

let $ccValid = false;
$('#cc-num').on('input', function () {
  if ($('#payment option[value="credit card"]').is(':selected')) {
    $ccValid = ccReg.test($('#cc-num').val());
    // test Code (replaces validStyle() call)
    if (!$ccValid|| $('#cc-num').val() == "") {
      $('#cc-num').css('border-color', 'red');
    } else {
      $('#cc-num').css('border-color', '');
    }
    // test Code (replaces preventSub() call)
    $('form').submit(function(event) {
      if (!$ccValid) {
        event.preventDefault();
      }
      else {
        return true;
      }
    });
  }
  else {
    alert('Please select payment method');
  }
});
//validates zipcode
let $zipValid = false;
$('#zip').on('input', function () {
  if ($('#payment option[value="credit card"]').is(':selected')) {
    $zipValid = zipReg.test($('#zip').val());
    // test Code (replaces validStyle() call)
    if (!$zipValid|| $('#zip').val() == "") {
      $('#zip').css('border-color', 'red');
    } else {
      $('#zip').css('border-color', '');
    }
    // test Code (replaces preventSub() call)
    $('form').submit(function(event) {
      if (!$zipValid) {
        event.preventDefault();
      }
      else {
        return true;
      }
    });
  } else {
      alert('Please select payment method');
  }
});
//validates cvv
let $cvvValid = false;
$('#cvv').on('input', function () {
  if ($('#payment option[value="credit card"]').is(':selected')) {
    $cvvValid = cvvReg.test($('#cvv').val());
    // test Code (replaces validStyle() call)
    if (!$cvvValid|| $('#cvv').val() == "") {
      $('#cvv').css('border-color', 'red');
    } else {
      $('#cvv').css('border-color', '');
    }
    // test Code (replaces preventSub() call)
    $('form').submit(function(event) {
      if (!$cvvValid) {
        event.preventDefault();
      }
      else {
        return true;
      }
    });
  } else {
      alert('Please select payment method');
  }
});
