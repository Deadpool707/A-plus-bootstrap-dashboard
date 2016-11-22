$(document).ready(function() {
    /*!
     * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
     * Copyright 2013-2016 Start Bootstrap
     * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
     */
    $('#side-menu').metisMenu();


    //Loads the correct sidebar on window load,
    //collapses the sidebar on window resize.
    // Sets the min-height of #page-wrapper to window size
    $(function() {
        $(window).bind("load resize", function() {
            var topOffset = 50;
            var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
            if (width < 768) {
                $('div.navbar-collapse').addClass('collapse');
                topOffset = 100; // 2-row-menu
            } else {
                $('div.navbar-collapse').removeClass('collapse');
            }

            var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                $("#page-wrapper").css("min-height", (height) + "px");
            }
        });

        var url = window.location;
        // var element = $('ul.nav a').filter(function() {
        //     return this.href == url;
        // }).addClass('active').parent().parent().addClass('in').parent();
        var element = $('ul.nav a').filter(function() {
            return this.href == url;
        });

        while (true) {
            if (element.is('li')) {
                element = element.parent().addClass('in').parent();
            } else {
                break;
            }
        }
    });
    $('.custom-controls-stacked').prop('indeterminate', true);
    ///////////////////////////////////// collapses Panels////////////////////////////
    $(document).on('click', '.panel-heading span.clickable', function(e) {
        var $this = $(this);
        if (!$this.hasClass('panel-collapsed')) {
            $this.parents('.panel').find('.panel-body').slideUp();
            $this.addClass('panel-collapsed');
            $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        } else {
            $this.parents('.panel').find('.panel-body').slideDown();
            $this.removeClass('panel-collapsed');
            $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        }
    });
    //////////////////////////////////// Enable Tabs////////////////////
    $('#myTabs a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    });
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $(function() {
        $('[data-toggle="popover"]').popover()
    });
    $("#menu-toggle").click( function (){
        $("#wrapper").toggleClass("menuDisplayed");
        $(".glyphicon-remove").toggleClass("glyphicon-align-justify");
    });
    $(".icon-setting").click(function() {
      $(".setting-menu").toggle();

    });
    var colorLi=$(".colorlist li");
       colorLi
    .eq(0).css("backgroundColor", "#7FB800").end()
    .eq(1).css("backgroundColor","#C60031").end()
    .eq(2).css("backgroundColor","#5357A6").end()
    .eq(3).css("backgroundColor","#f39c12").end()
    .eq(4).css("backgroundColor","#F0A112").end();
	$(".colorlist li a").click(function() {
		$(".mainstyle").attr("href",$(this).attr('rel'));
		$.cookie("css",$(this).attr('rel'), {expires: 365, path: '/'});
		return false;
	});


});
if($.cookie("css")) {
$(".mainstyle").attr("href",$.cookie("css"));
}
