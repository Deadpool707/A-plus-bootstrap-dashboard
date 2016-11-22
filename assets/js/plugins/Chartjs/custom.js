
$(document).ready(function() {
  ///////////////////////////////////////////////////LINE CHARTS/////////////////////////////////
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
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
  ///////////////////////////////////////////////////Polar CHARTS/////////////////////////////////
  var polarData = {
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Dark Grey"
    ],
    datasets: [
        {
            data: [300, 150, 250, 140, 200],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(235, 55, 16, 0.2)",
                "rgba(16, 235, 26, 0.2)",
                "rgba(16, 156, 235, 0.2)",
                "rgba(235, 16, 83, 0.2)"
            ],
            hoverBackgroundColor: [
                "rgba(255, 255, 255, 0.1)",
                "rgba(255, 255, 255, 0.1)",
                "rgba(255, 255, 255, 0.1)",
                "rgba(255, 255, 255, 0.1)",
                "rgba(255, 255, 255, 0.1)"

            ]
        }]
};

    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myPolarArea = new Chart(ctx, {
        type: 'polarArea',
        data: polarData,
        options: {
            responsive: true,
            elements: {
                arc: {
                    borderColor: "#000000"
                }
            }
         },
        animation:{
            animateScale: true
        }
    });
    ///////////////////////////////////////////////////Donut CHARTS/////////////////////////////////
    var ctx = document.getElementById("skills");
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
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

    ///////////////////////////////////////////////////Pie CHARTS/////////////////////////////////

    var ctx = document.getElementById("Chart").getContext('2d');

var original = Chart.defaults.global.legend.onClick;
Chart.defaults.global.legend.onClick = function(e, legendItem) {
  update_caption(legendItem);
  original.call(this, e, legendItem);
};

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      label: 'apples',
      backgroundColor: "rgba(153,255,51,1)",
      data: [12, 19, 3, 17, 28, 24, 7],
    }, {
      label: 'oranges',
      backgroundColor: "rgba(235, 126, 16,1)",
      data: [30, 29, 5, 5, 20, 3, 10],
    }]
  }
});

var labels = {
  "apples": true,
  "oranges": true
};

var caption = document.getElementById("caption");

var update_caption = function(legend) {
  labels[legend.text] = legend.hidden;

  var selected = Object.keys(labels).filter(function(key) {
    return labels[key];
  });

  var text = selected.length ? selected.join(" & ") : "nothing";

  caption.innerHTML = "The chart is displaying " + text;
};
});
