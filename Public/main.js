// Json Info
async function getValue() {
  try {
    const result = await fetch("data/data.json")
    const response = await result.json();
    console.log({ response });


    const ticketHolder = document.querySelectorAll('.title')
    const ticketValue = document.querySelectorAll('.value')


    ticketHolder.forEach((hold, element) => {
      // console.log(element);
      let purchPurch = document.createElement('p');
      purchPurch.innerHTML = response.tickets[element].ticket_month;
      hold.appendChild(purchPurch);
    })
  } catch (error) {
    console.log(error);
  }
}

getValue();

async function getNumber() {
  try {
    const result = await fetch("data/data.json")
    const response = await result.json();
    console.log({ response });


    const ticketHolder = document.querySelectorAll('.title')
    const ticketValue = document.querySelectorAll('.value')


    ticketHolder.forEach((hold, element) => {
      // console.log(element);
      let purchPurch = document.createElement('h2');
      purchPurch.innerHTML = response.tickets[element].ticket_value;
      hold.appendChild(purchPurch);
    })
  } catch (error) {
    console.log(error);
  }
}
getNumber();



// Graphic
const areaChartOptions = {
  series: [
    {
      name: 'Tickets Solved',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Tickets Received',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Tickets Solved',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Tickets Received',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();