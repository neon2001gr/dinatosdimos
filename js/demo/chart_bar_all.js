// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx2 = document.getElementById("allChartsSummary");
var myLineChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["1ο Σαλαμίνας", "2ο Σαλαμίνας", "Αιαντείου", "Αμπελακείων", "Σελήνια"],
    datasets: [{
      label: "Εκλογικά αποτελέσματα",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [dynatos['dimotika']['sal_1o'],dynatos['dimotika']['sal_2o'], dynatos['dimotika']['aianteio'], dynatos['dimotika']['ampelakia'],dynatos['dimotika']['selinia']]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

