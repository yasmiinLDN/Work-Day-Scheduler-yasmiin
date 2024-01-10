nineTextEl = $('#nineText');
tenTextEl = $('#tenText');
elevenTextEl = $('#elevenText');
twelveTextEl = $('#twelveText');
thirteenTextEl = $('#thirteenText');
fourteenTextEl = $('#fourteenText');
fifteenTextEl = $('#fifteenText');
sixteenTextEl = $('#sixteenText');
seventeenTextEl = $('#seventeenText');

// Array of query selectors
const textAreas = [
    nineTextEl,
    tenTextEl,
    elevenTextEl,
    twelveTextEl,
    thirteenTextEl,
    fourteenTextEl,
    fifteenTextEl,
    sixteenTextEl,
    seventeenTextEl
];


$(document).ready(function () {

    function displayTime() {
        $('#currentDate').text(dayjs().format('ddd MMM D, YYYY'))
    }

    setInterval(displayTime, 1000)

    function updateHour() {
        let currentHour = dayjs().hour()
        let timeBlocksEl = $('.time-block')

        timeBlocksEl.each(function () {
            let blockHour = parseInt($(this).attr('id'))

            if (currentHour > blockHour) {
                $(this).addClass('past')
            }
            else if (currentHour === blockHour) {
                $(this).removeClass('past')
                $(this).addClass('present')
            }
            else {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addClass('future')
            }
        })
    }
    updateHour();

    setInterval(updateHour, 15000)


    $('.saveBtn').click(function (e) {
        e.preventDefault();
        const currentInputEl = $(this).parent().attr('id');
        // console.log(currentInputEl);
        const inputValue = $(this).siblings("textarea").val();
        localStorage.setItem(currentInputEl, inputValue);
    })
    // load any saved data from localStorages 

// separate your code by its behaviours and user workflow/interaction -- e.g. save function above should only happen once you've clicked the save button (after inputting text).

// .each loop performs the below function at each index of the chosen selector/array (in case its a selector called "time block")
// .each is an array method --> performs the function at each index of the array
$('.time-block').each( function() {
    const inputDiv = $(this).attr('id');
    // console.log(inputDiv);
    $(this).children(".description").val(localStorage.getItem(inputDiv));
})



})