$(function() {
		var d1 = [];
		for (var i = 0; i < 20; ++i) {
			d1.push([i, Math.sin(i)]);
		}

		var data = [{ data: d1, label: "Pressure", color: "#A7DA00" }];

		var markings = [
			{ color: "rgba(255,255,255,.1)", yaxis: { from: 1 } },
			{ color: "rgba(255,255,255,.1)", yaxis: { to: -1 } },
			{ color: "#44C0DB", lineWidth: 1, xaxis: { from: 2, to: 2 } },
			{ color: "#44C0DB", lineWidth: 1, xaxis: { from: 8, to: 8 } }
		];

		var placeholder = $("#placeholder1");

		var plot = $.plot(placeholder, data, {
			bars: { show: true, barWidth: 0.5, fill: 0.9 },
			xaxis: { ticks: [], autoscaleMargin: 0.02 },
			yaxis: { min: -2, max: 2 },
			grid: { markings: markings }
		});

		var o = plot.pointOffset({ x: 2, y: -1.2});

		// Append it to the placeholder that Flot already uses for positioning

		placeholder.append("<div style='position:absolute;left:" + (o.left + 4) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>Warming up</div>");

		o = plot.pointOffset({ x: 8, y: -1.2});
		placeholder.append("<div style='position:absolute;left:" + (o.left + 4) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>Actual measurements</div>");

		// Draw a little arrow on top of the last label to demonstrate canvas
		// drawing

		var ctx = plot.getCanvas().getContext("2d");
		ctx.beginPath();
		o.left += 4;
		ctx.moveTo(o.left, o.top);
		ctx.lineTo(o.left, o.top - 10);
		ctx.lineTo(o.left + 10, o.top - 5);
		ctx.lineTo(o.left, o.top);
		ctx.fillStyle = "#000";
		ctx.fill();

		// Add the Flot version string to the footer
		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
	});
///////////////////////////////////////////////////Start pie charts
  var dataSet = [{
      label: "Asia",
      data: 4119630000,
      color: "#005CDE"
  }, {
      label: "Latin America",
      data: 590950000,
      color: "#00A36A"
  }, {
      label: "Africa",
      data: 1012960000,
      color: "#7D0096"
  }, {
      label: "Oceania",
      data: 35100000,
      color: "#992B00"
  }, {
      label: "Europe",
      data: 727080000,
      color: "#DE000F"
  }, {
      label: "North America",
      data: 344120000,
      color: "#ED7B00"
  }];

  var options = {
      series: {
          pie: {
              show: true,
              label: {
                  show: true,
                  radius: 180,
                  formatter: function(label, series) {
                      return '<div style="border:1px solid grey;font-size:8pt;text-align:center;padding:5px;color:white;">' + label + ' : ' + Math.round(series.percent) + '%</div>';
                  },
                  background: {
                      opacity: 0.8,
                      color: '#000'
                  }
              }
          }
      },
      legend: {
          show: false
      },
      grid: {
          hoverable: true
      }
  };

  var options1 = {
      series: {
          pie: {
              show: true,
              tilt: 0.5
          }
      }
  };

  var options2 = {
      series: {
          pie: {
              show: true,
              innerRadius: 0.5,
              label: {
                  show: true
              }
          }
      }
  };

  $(document).ready(function() {
      $.plot($("#flot-placeholder1"), dataSet, options1);
      $.plot($("#flot-placeholder2"), dataSet, options2);
  });


  $.fn.showMemo = function() {
      $(this).bind("plothover", function(event, pos, item) {
          if (!item) {
              return;
          }
          console.log(item.series.data)
          var html = [];
          var percent = parseFloat(item.series.percent).toFixed(2);

          html.push("<div style=\"border:1px solid grey;background-color:",
          item.series.color, "\">", "<span style=\"color:white\">",
          item.series.label, " : ",
          $.formatNumber(item.series.data[0][1], {
              format: "#,###",
              locale: "us"
          }), " (", percent, "%)", "</span>", "</div>");
          $("#flot-memo").html(html.join(''));
      });
  }
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
