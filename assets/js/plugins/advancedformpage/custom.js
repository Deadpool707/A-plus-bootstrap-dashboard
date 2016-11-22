$(document).ready(function() {
    /////////////////////////////////// Ion Range Slide//////////////////////////////////
    $("#range_01").ionRangeSlider();
    $("#range_02").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });

    $("#range_03").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
    });
    $("#range_04").ionRangeSlider({
        type: "double",
        grid: true,
        from: 1,
        to: 5,
        values: [0, 10, 100, 1000, 10000, 100000, 1000000]
    });
    /////////////////////////////////////////////////// Knob Inputs////////////////////////////
    $(".dial").knob({
        "width": "30px",
    });
    $(".dial1").knob({
        "width": "30px",

    });
    $(".dial2").knob({
        "width": "30px",
    });
    $(".dial3").knob({
        "width": "30px",

    });
    $(".dial4").knob({
        "width": "30px",

    });
    $(".dial5").knob({
        "width": "30px",

    });
    ///////////////////////////////////////////// Dual List box///////////////////////////
    var demo2 = $('.demo2').bootstrapDualListbox({
        nonSelectedListLabel: 'Non-selected',
        selectedListLabel: 'Selected',
        preserveSelectionOnMove: 'moved',
        moveOnSelect: false,
        nonSelectedFilter: 'ion ([7-9]|[1][0-2])'
    });
    ////////////////////////////////////////// Touch SPin/////////////////////
    $("input[name='touch1']").TouchSpin({
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '%'
    });
    $("input[name='touch2']").TouchSpin({
        min: -1000000000,
        max: 1000000000,
        stepinterval: 50,
        maxboostedstep: 10000000,
        prefix: '$'
    });
    $("input[name='touch3']").TouchSpin();
    //////////////////////////// Data picker///////////////////////////
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker({
        locale: 'ru'
    });
    $('#datetimepicker3').datetimepicker({
        format: 'LT'
    });
    $('#datetimepicker4').datetimepicker();
    $('#datetimepicker5').datetimepicker({
        defaultDate: "11/1/2013",
        disabledDates: [
            moment("12/25/2013"),
            new Date(2013, 11 - 1, 21),
            "11/22/2013 00:53"
        ]
    });
    $('#datetimepicker8').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down"
        }
    });
    $('#datetimepicker9').datetimepicker({
        viewMode: 'years'
    });
    $('#datetimepicker10').datetimepicker({
        viewMode: 'years',
        format: 'MM/YYYY'
    });
    $('#datetimepicker11').datetimepicker({
        daysOfWeekDisabled: [0, 6]
    });
    //////////////////////// Date Range Picker/////////////////////
    $('input[name="daterange"]').daterangepicker();
    $('input[name="daterange"]').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
            format: 'MM/DD/YYYY h:mm A'
        }
    });
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);
    ////////////////////////////////////////////////////// Color Picker ///////////////////
    $('#cp3').colorpicker({
        color: '#AA3399',
        format: 'rgba'
    });

    $('#cp2').colorpicker();
});
