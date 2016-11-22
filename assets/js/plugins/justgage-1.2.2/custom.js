
$(document).ready(function() {
var g = new JustGage({
    id: "gauge",
    value: 67,
    min: 0,
    max: 100,
    title: "Visitors"
  });
  var gg = new JustGage({
    id: "gauge1",
    value: getRandomInt(350, 980),
    min: 350,
    max: 980,
    title: "Lone Ranger",
    label: "miles traveled"
  });
  var g5 = new JustGage({
    id: "gauge2",
    value: getRandomInt(350, 980),
    min: 0,
    max: 100,
    title: "Green",
    label: "",
    levelColorsGradient: true,
  });
  var g5 = new JustGage({
    id: "gauge3",
    value: 72,
    min: 0,
    max: 100,
    donut: true,
    gaugeWidthScale: 0.6,
    counter: true,
    hideInnerShadow: true
  });

  var g1, g2, g3, g4;
    var g1 = new JustGage({
      id: "g1",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Big Fella",
      label: "pounds"
    });

    var g2 = new JustGage({
      id: "g2",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Small Buddy",
      label: "oz"
    });

    var g3 = new JustGage({
      id: "g3",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Tiny Lad",
      label: "oz"
    });

    var g4 = new JustGage({
      id: "g4",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Little Pal",
      label: "oz"
    });
    setInterval(function() {
      g1.refresh(getRandomInt(50, 100));
      g2.refresh(getRandomInt(50, 100));
      g3.refresh(getRandomInt(0, 50));
      g4.refresh(getRandomInt(0, 50));
    }, 2500);
});
