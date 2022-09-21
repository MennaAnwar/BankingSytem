$(document).ready(function(){
    $("#select1").change(function () {
        $('#cust2').val($('#select1 option:selected').text())
      })
}
)
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('error');
const myParam2 = urlParams.get('state');
if (myParam == "Incorrect_Credential") {
    $('#loginAlert').show();
    $('#amountAlert').hide();
    myParam = '/transfer';
} else if (myParam == "Invalid_Amount") {
    $('#amountAlert').show();
    myParam = '/transfer';
}
if (myParam2 == "Successfully_Transfered") {
    $('#successAlert').show().delay(5000).fadeOut();
    myParam = '/customers';
}


function active(element){
    $(element).parent().addClass('current');
    $(element).parent().nextAll().removeClass('current');
    $(element).parent().prevAll().removeClass('current');

}

function transfer(){
    window.location.href = 'transfer.html'
}

