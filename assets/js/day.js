$(document).ready(function () {

    function displayTime() {
        $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))
    }

    setInterval(displayTime, 1000)

    function updateHour() {
        let currentHour = dayjs().hour()
        let timeBlocks = $('.time-block')

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


            $('saveBtn').click(function () {
                // grab values of the textareas (c;ass pf description)
                // save the values to local storage using the ids as the keys and the values of the textareas for the values
                // 
            })

            // load any saced data from localStorages 
        })



    }
})

