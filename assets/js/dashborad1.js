$(document).ready(function(){var a=document.getElementById("myChart"),a=(new Chart(a,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,10,8,11,7],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}),document.getElementById("Chart").getContext("2d")),e=Chart.defaults.global.legend.onClick;Chart.defaults.global.legend.onClick=function(a,r){g(r),e.call(this,a,r)};var r=(new Chart(a,{type:"bar",data:{labels:["M","T","W","T","F","S","S"],datasets:[{label:"apples",backgroundColor:"rgba(153,255,51,1)",data:[12,19,3,17,28,24,7]},{label:"oranges",backgroundColor:"rgba(235, 126, 16,1)",data:[30,29,5,5,20,3,10]}]}}),{apples:!0,oranges:!0}),t=document.getElementById("caption"),g=function(a){r[a.text]=a.hidden;var e=Object.keys(r).filter(function(a){return r[a]}),g=e.length?e.join(" & "):"nothing";t.innerHTML="The chart is displaying "+g},a=document.getElementById("skills1"),a=(new Chart(a,{type:"doughnut",options:{legend:{display:!1}},data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{data:[12,19,10,8,11,7],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]}}),document.getElementById("skills2")),a=(new Chart(a,{type:"doughnut",options:{legend:{display:!1}},data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,10,8,11,7],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]}}),document.getElementById("skills3"));new Chart(a,{type:"doughnut",options:{legend:{display:!1}},data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[2,2,3,4,5,1],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]}})});