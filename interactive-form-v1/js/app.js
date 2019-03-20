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

$('label input').on('change', function(e) {
  if ($jsFrameworks.prop('checked')) {
    $express.attr('disabled', true);
  } else {
    $express.removeAttr('disabled');
  }
  if ($express.prop('checked')) {
    $jsFrameworks.attr('disabled', true);
  } else {
    $jsFrameworks.removeAttr('disabled');
  }
  if ($jsLibs.prop('checked')) {
    $node.attr('disabled', true);
  } else {
    $node.removeAttr('disabled');
  }
  if ($node.prop('checked')) {
    $jsLibs.attr('disabled', true);

  } else {
    $jsLibs.removeAttr('disabled');
  }
  $totalCost.show().val(dollarTotal);

/*
  $checkbox.each($checkbox, function () {
    if (this.checked) {
      dollarTotal += 100;
    }
  });*/
});


let dollarTotal = 0;

for (var i = 0; i < $('label input:checked').length; i++) {
  if ($('label input:checked')[i] === $('label input')[0]) {
    dollarTotal += 200;
    console.log("Main is checked")
  } else {
    dollarTotal += 100;
  }
}
//adds event cost and tallies total cost of the events selected
const $totalCost = $('<h3>Total: $' + dollarTotal + '</h3>');
$('.activities').append($totalCost);
