//Morris charts snippet - js



  Morris.Area({
    element: 'area-example',
    data: [
      { y: '1.1.', a: 100, b: 90 },
      { y: '2.1.', a: 75,  b: 65 },
      { y: '3.1.', a: 50,  b: 40 },
      { y: '4.1.', a: 75,  b: 65 },
      { y: '5.1.', a: 50,  b: 40 },
      { y: '6.1.', a: 75,  b: 65 },
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
  lineColors: ['#188CBD', '#7C8D1A'],
  });

  Morris.Line({
        element: 'line-example',
        data: [
          {year: '2010', value: 20},
          {year: '2011', value: 10},
          {year: '2012', value: 5},
          {year: '2013', value: 2},
          {year: '2014', value: 20}
        ],
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value']
      });

      Morris.Donut({
        element: 'donut-example',
        data: [
         {label: "Android", value: 12},
         {label: "iPhone", value: 30},
         {label: "Other", value: 20}
       ],
       labelColor: '#404040',
       colors: [
          '#188CBD',
          '#7C8D1A',
          '#FAB027',
          '#979797'
        ],
      });

      Morris.Bar({
         element: 'bar-example',
         data: [
            {y: 'Jan 2014', a: 100, b: 90},
            {y: 'Feb 2014', a: 75,  b: 65},
            {y: 'Mar 2014', a: 50,  b: 40},
            {y: 'Apr 2014', a: 75,  b: 65},
            {y: 'May 2014', a: 50,  b: 40},
            {y: 'Jun 2014', a: 75,  b: 65}
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
