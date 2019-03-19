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
/*
const $earlyWorkshops = $('label input:odd');
const $lateWorkshops = $('label input:even').slice(1);

$('label input').on('change', function(e) {
  $earlyWorkshops.each(function(i) {
    if($earlyWorkshops.eq(i).prop('checked')) {
      $earlyWorkshops.not($earlyWorkshops.eq(i)).hide();
      $earlyWorkshops.not($earlyWorkshops.eq(i)).parent().hide();
    }
    if($earlyWorkshops.eq(i).not(prop('checked'))) {
      $earlyWorkshops.show();

    }
  })
});
*/
/*
$('#design').on('change', function() {
  if($("#design").val() === "js puns") {
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
  }
  if ($("#design").val() === "heart js") {
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
  }

});
*/
