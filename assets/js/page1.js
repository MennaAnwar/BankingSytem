function active(element){
    $(element).parent().addClass('current');
    $(element).parent().nextAll().removeClass('current');
    $(element).parent().prevAll().removeClass('current');

}

function transfer(){
    window.location.href = 'transfer.html'
}