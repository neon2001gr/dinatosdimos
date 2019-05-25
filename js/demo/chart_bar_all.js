// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx2 = document.getElementById("allChartsSummary");
var myLineChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["Δυνατός Δήμος", "Το νησί μας", "Κοντά στον Δημότη", "Πρωτοβουλία Πολιτών", "Ανασυγκρότηση Σαλαμίνας", "Βήμα στους Πολίτες", "Λαική Συσπείρωση"],
    datasets: [{
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [dynatos['synoliko'],nisi['synoliko'],konta['synoliko'],protovoulia['synoliko'],anasygkrotisi['synoliko'],vima['synoliko'],laiki['synoliko'],]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: '%'
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

