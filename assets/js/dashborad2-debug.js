$(document).ready(function() {
    Morris.Area({
      element: 'area-example',
      data: [
        { y: '1.1.', a: 100, b: 10 },
        { y: '2.1.', a: 75,  b: 65 },
        { y: '3.1.', a: 50,  b: 30 },
        { y: '4.1.', a: 75,  b: 65 },
        { y: '5.1.', a: 50,  b: 100 },
        { y: '6.1.', a: 75,  b: 55 },
        { y: '7.1.', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      fillOpacity: 0.4,
    hideHover: 'auto',
    behaveLikeLine: true,
    resize: true,
    pointFillColors: ['#ffffff'],
    pointStrokeColors: ['black'],
    lineColors: ['#884EA0', '#A04000'],
    });

    Morris.Bar({
       element: 'bar-example',
       data: [
          {y: 'Jan 2014', a: 200, b: 1},
          {y: 'Feb 2014', a: 75,  b: 65},
          {y: 'Mar 2014', a: 50,  b: 140},
          {y: 'Apr 2014', a: 75,  b: 95},
          {y: 'May 2014', a: 80,  b: 40},
          {y: 'Jun 2014', a: 75,  b: 40}
       ],

       xkey: 'y',
       ykeys: ['a', 'b'],
       labels: ['Visitors', 'Conversions'],
       barColors: function (row, series, type) {
 if (type === 'bar') {
   var red = Math.ceil(255 * row.y / this.ymax);
   return "#7C8D1A";
 }
 else {
   return '#000';
 }
}
    });

    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 1,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });
    $("#sparkline1").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
    type: 'tristate'});
    $("#sparkline2").sparkline([5,6,7,2,0,-4,-2,4], {
    type: 'bar',
    barColor: '#00ff00'});
    $("#sparkline3").sparkline([4,6,7,7,4,3,2,1,4,4], {
    type: 'discrete',
    lineColor: '#7fff00'});
    $("#sparkline4").sparkline([5,6,7,2,2,4,-2,4], {
    type: 'bar',
    barColor: '#00ff00'});
    $("#sparkline5").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
    type: 'tristate'});
    $("#sparkline2").sparkline([5,6,7,2,0,-4,-2,4], {
    type: 'bar',
    barColor: '#00ff00'});
    $("#sparkline6").sparkline([4,6,7,7,4,3,2,1,4,4], {
    type: 'discrete',
    lineColor: '#7fff00'});
    $("#sparkline7").sparkline([5,6,7,2,2,4,-2,4], {
    type: 'bar',
    barColor: '#00ff00'});
    $("#sparkline8").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
    type: 'tristate'});
    $("#sparkline9").sparkline([5,6,7,2,0,-4,-2,4], {
    type: 'bar',
    barColor: '#00ff00'});
    $("#sparkline10").sparkline([4,6,7,7,4,3,2,1,4,4], {
    type: 'discrete',
    lineColor: '#7fff00'});
    $("#sparkline11").sparkline([5,6,7,2,2,4,-2,4], {
    type: 'bar',
    barColor: '#00ff00'});
    $("#sparkline12").sparkline([4,6,7,7,4,3,2,1,4,4], {
    type: 'discrete',
    lineColor: '#7fff00'});
    $("#sparkline13").sparkline([5,6,7,2,2,4,-2,4], {
    type: 'bar',
    barColor: '#00ff00'});
    $("#sparkline14").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
    type: 'tristate'});
});
