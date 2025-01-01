// Task Completion Chart
const taskCompletionCtx = document.getElementById('taskCompletionChart').getContext('2d');
new Chart(taskCompletionCtx, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Pending'],
    datasets: [{
      data: [89, 36],
      backgroundColor: ['#4CAF50', '#FF9800'],
    }]
  },
  options: {
    responsive: true,
  }
});

// Team Productivity Chart
const productivityCtx = document.getElementById('productivityChart').getContext('2d');
new Chart(productivityCtx, {
  type: 'doughnut',
  data: {
    labels: ['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5','Member 6','Member 7','Member 8'],
    datasets: [{
      label: 'Hours Worked',
      data: [40, 35, 45, 50, 38,30,30,30],
      backgroundColor: '#4CAF50',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    }
  }
});
