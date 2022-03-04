var todayDate = moment().format('dddd, MMM Do YYYY');
$("#today").html(todayDate);

$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, text);
    });
});

function hourTracker() {
    var currentHour = moment().hour();
};

$('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('hour')[1]);

    if (blockHour < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('future');
        $(this).removeClass('present');
    }
    else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
        $(this).removeClass('future');
    }
    else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
});

$('#8am .description').val(localStorage.getItem('8am'));
$('#9am .description').val(localStorage.getItem('9am'));
$('#10am .description').val(localStorage.getItem('10am'));
$('#11am .description').val(localStorage.getItem('11am'));
$('#12pm .description').val(localStorage.getItem('12pm'));
$('#1pm .description').val(localStorage.getItem('1pm'));
$('#2pm .description').val(localStorage.getItem('2pm'));
$('#3pm .description').val(localStorage.getItem('3pm'));
$('#4pm .description').val(localStorage.getItem('4pm'));
$('#5pm .description').val(localStorage.getItem('5pm'));

hourTracker();