var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["HTML", "JQUERY", "JAVASCRIPT", "PYTHON", "CSS", "RUBY", "API"],
    datasets: [{
      backgroundColor: [
        "#adddcf",
        "#3498db",
        "#e8e7e5",
        "#bfb1d5",
        "#f0e0a2",
        "#fed1be",
        "#777777"
      ],
      data: [93, 67, 80, 73, 87, 38, 65]
    }]
  }
});


new Chart(ctx, {
    data: data,
    type: 'polarArea',
    options: options
});