$('#button').click(function(){
    var number = Number($('#value').val());
    //number = parseInt(number)+ 1
    // $('#value').val(number);
    //number += 1 
    $('#value').attr('value', ++number)
  })
