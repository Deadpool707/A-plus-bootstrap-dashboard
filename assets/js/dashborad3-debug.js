$(document).ready(function() {
  ///////////////////////////////////////////////////LINE CHARTS/////////////////////////////////
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [2, 44, 10, 8, 33, 7],
              backgroundColor: [
                  'rgba(231, 76, 60, 0.2)'

              ],
              borderColor: [
                  'rgba(231, 76, 60,1)'

              ],
              borderWidth: 1
          },{
              label: '# of Votes',
              data: [11, 22, 5, 33, 12, 12],
              backgroundColor: [
                  'rgba(46, 134, 193, 0.2)',

              ],
              borderColor: [
                  'rgba(46, 134, 193,1)',

              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  var ctx = document.getElementById("skills");
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ["Tokyo", "Newyork", "England", "Spain", "France", "Holand"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 10, 8, 11, 7],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
          }]
      },

  });

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
        $('#world-map').vectorMap({map: 'world_mill'});
  });
  ///////////////////////////////////////////// Start real time Chart
  $(function() {

    // We use an inline data source in the example, usually data would
    // be fetched from a server

    var data = [],
      totalPoints = 300;

    function getRandomData() {

      if (data.length > 0)
        data = data.slice(1);

      // Do a random walk

      while (data.length < totalPoints) {

        var prev = data.length > 0 ? data[data.length - 1] : 50,
          y = prev + Math.random() * 10 - 5;

        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }

        data.push(y);
      }

      // Zip the generated y values with the x values

      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
      }

      return res;
    }

    // Set up the control widget

    var updateInterval = 30;
    $("#updateInterval").val(updateInterval).change(function () {
      var v = $(this).val();
      if (v && !isNaN(+v)) {
        updateInterval = +v;
        if (updateInterval < 1) {
          updateInterval = 1;
        } else if (updateInterval > 2000) {
          updateInterval = 2000;
        }
        $(this).val("" + updateInterval);
      }
    });

    var plot = $.plot("#placeholder4", [ getRandomData() ], {
      series: {
        shadowSize: 0	// Drawing is faster without shadows
      },
      yaxis: {
        min: 0,
        max: 100
      },
      xaxis: {
        show: false
      }
    });

    function update() {

      plot.setData([getRandomData()]);

      // Since the axes don't change, we don't need to call plot.setupGrid()

      plot.draw();
      setTimeout(update, updateInterval);
    }

    update();

    // Add the Flot version string to the footer

    $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
  });
