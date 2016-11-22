$(document).ready(function() {
  $(".sparkline1").sparkline([5,6,7,2,0,4,2,4,5,6], {
    type: 'bar',
    height: '50px',
    barWidth: 7,
    barColor: '#3f7f00'});
    $(".sparkline2").sparkline([4,6,7,7,4,3,2,1,4,4,2,1,4,4], {
    type: 'discrete',
    width: '80',
   height: '40',
    lineColor: '#00ff00'});
    $(".sparkline3").sparkline([5,6,0,1,-3,-2,1,-2,0,0,1,1 ], {
    type: 'tristate',
    height: '40',
    barWidth: 6,
    zeroAxis: false});
});
