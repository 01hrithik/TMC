// Initialize Chart.js Charts
const chartsData = [
    {
      id: 'completion-rate',
      type: 'doughnut',
      labels: ['Completed', 'Pending'],
      data: [75, 25],
      colors: ['#4caf50', '#e0e0e0']
    },
    {
      id: 'work-hours',
      type: 'doughnut',
      labels: ['Utilized', 'Remaining'],
      data: [2169, 531],
      colors: ['#42a5f5', '#e0e0e0']
    },
    {
        id: 'morale-index',
        type: 'doughnut',
        labels: ['Morale'],
        data: [3.8],
        colors: ['#ff9800']
      },
    {
      id: 'team-roles',
      type: 'pie',
      labels: ['Developer', 'Designer', 'QA', 'Support'],
      data: [50, 20, 20, 10],
      colors: ['#ff7043', '#ab47bc', '#26c6da', '#66bb6a']
    }
  ];
  
  chartsData.forEach(chart => {
    const ctx = document.getElementById(chart.id).getContext('2d');
    new Chart(ctx, {
      type: chart.type,
      data: {
        labels: chart.labels,
        datasets: [{
          data: chart.data,
          backgroundColor: chart.colors
        }]
      }
    });
  });



  