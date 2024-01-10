// nineTextEl = $('#nineText');
// tenTextEl = $('#tenText');
// elevenTextEl = $('#elevenText');
// twelveTextEl = $('#twelveText');
// thirteenTextEl = $('#thirteenText');
// fourteenTextEl = $('#fourteenText');
// fifteenTextEl = $('#fifteenText');
// sixteenTextEl = $('#sixteenText');
// seventeenTextEl = $('#seventeenText');

// // Array of query selectors
// const textAreas = [
//    nineTextEl, 
//     tenTextEl, 
//     elevenTextEl,
//     twelveTextEl,
//     thirteenTextEl,
//     fourteenTextEl,
//     fifteenTextEl,
//     sixteenTextEl,
//     seventeenTextEl
// ];

// Array of query selectors
const textAreas = [
    $('#nineText'), 
    $('#tenText'), 
    $('#elevenText'),
    $('#twelveText'),
    $('#thirteenText'),
    $('#fourteenText'),
    $('#fifteenText'),
    $('#sixteenText'),
    $('#seventeenText')
];

$(document).ready(function () {

    function displayTime() {
        $('#currentDate').text(dayjs().format('ddd MMM D, YYYY'))
    }

    setInterval(displayTime, 1000)

    function updateHour() {
        let currentHour = dayjs().hour()
        let timeBlocksEl = $('.time-block')

        timeBlocks.each(function () {
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
            updateHour()

            setInterval(updateHour, 15000)


            $('saveBtn').click(function (e) {
                e.preventDefault();
            // Loop through each query selector???
            $.each(textAreas, function(i, selector) {

                if (textAreas[i] !== '') {
                // grab the element using the current query selector
                const currentTextEl = $(selector);
            
                // grab the text content of the element
                const textContent = currentTextEl.text();
            
                // Save the text content to local storage with a key based on the index
                localStorage.setItem(`textElement${i + 1}`, textContent);
                
                console.log(textContent);
            }
        else {
            console.log("nothing logged");
        }
    });
            console.log('Loop completed.');
            console.log(e);
            })
            // load any saved data from localStorages 
        })



    }
})

// OLD PSEUDOCODE/NOTES FOR STORING TO LOCAL
// $('saveBtn').click(function (event) {
//     event.preventDefault();
//     // validate the fields?
//     // grab values of the textareas (class of the text description)
//     // save the values to local storage using the ids as the keys and the values of the textareas for the values
//     // 

 
// // load any saved data from localStorages    
// })