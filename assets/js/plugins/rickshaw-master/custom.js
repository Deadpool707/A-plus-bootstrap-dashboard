$(document).ready(function() {
  var graph = new Rickshaw.Graph( {
    element: document.querySelector("#chart"),
    series: [{
        color: '#e67e22',
        data: [
            { x: 0, y: 40 },
            { x: 1, y: 49 },
            { x: 2, y: 38 },
            { x: 3, y: 30 },
            { x: 4, y: 32 } ]
    }]
});
graph.render();

var myGraph = new Rickshaw.Graph({
    element: document.querySelector("#mychart"),
    renderer: 'lineplot',
    series: [
    {
      name: "Series 1",
      color: "steelblue",
      data: [{x: 0, y:10,},{x: 1, y:3,},{x: 2, y:8,},{x: 3, y:15,},{x: 4, y:12,},
             {x: 5, y:8,},{x: 6, y:3,},{x: 7, y:5,},{x: 8, y:2,},{x: 9, y:1,},{x: 10, y:4,},
      ]
    },
    {
      name: "Series 2",
      color: "green",
      data: [{x: 0, y:5,},{x: 1, y:3,},{x: 2, y:8,},{x: 3, y:6,},{x: 4, y:3,},
             {x: 5, y:12,},{x: 6, y:13,},{x: 7, y:14,},{x: 8, y:12,},{x: 9, y:8,},{x: 10, y:9,},
      ]
    }],

  });
  myGraph.render();
  //multiple areas
        var graph = new Rickshaw.Graph({
            renderer: 'area',
            element: document.querySelector('#chartt'),
            series: [ {
                    data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 20 }, { x: 4, y: 16 } ],
                    color: 'rgba(18, 243, 62,0.5)',
                    stroke: 'rgba(18, 243, 62,0.7)'
                }, {
                    data: [ { x: 0, y: 22 }, { x: 1, y: 25 }, { x: 2, y: 38 }, { x: 3, y: 44 }, { x: 4, y: 46 } ],
                    color: 'rgba(18, 216, 243,0.5)',
                    stroke: 'rgba(0,0,0,0.15)'
                } ]

        });
        graph.renderer.unstack = true;
        graph.render();
//
});
