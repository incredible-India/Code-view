
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Python Basic', 'C', 'C++', 'Java Basic', 'Ai', 'Android App'],
    ['2012/13',  165,      938,         522,             998,           450,      614.6],
    ['2014/15',  135,      1120,        599,             1268,          288,      682],
    ['2016/17',  157,      1167,        587,             807,           397,      623],
    ['2018/19',  139,      1110,        615,             968,           215,      609.4],
    ['2020/21',  136,      691,         629,             1026,          366,      569.6]
  ]);

  var options = {
    title : 'Monthly Users Production by Code_View',
    vAxis: {title: 'Cups'},
    hAxis: {title: 'Month'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
