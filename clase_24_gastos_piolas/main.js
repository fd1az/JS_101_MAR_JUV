const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const form = document.querySelector('form');
const tipo = form.elements.tipo;
const descripcion = form.elements.descripcion;
const fecha = form.elements.fecha;
const monto = form.elements.monto;
const tabla = document.querySelector('#table');

const month = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const saveInLocalStorage = (todos) => {
  localStorage.setItem('movimientos', JSON.stringify(todos));
};

let state = JSON.parse(localStorage.getItem('movimientos')) || [];

const renderTable = (state) => {
  const tableHTML = `<table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tipo</th>
                <th scope="col">Fecha</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Monto</th>
            </tr>
        </thead>
        <tbody>
        ${state
          .map((mov, index) => {
            return ` 
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${mov.tipo == 1 ? 'Ingreso' : 'Gasto'}</td>
                    <td>${mov.fecha}</td>
                    <td>${mov.descripcion}</td>
                    <td class="${
                      mov.tipo == 1 ? 'text-success' : 'text-danger'
                    }">$ ${mov.monto}</td>
                </tr>
            `;
          })
          .join('')}
          
        </tbody>
    </table>`;

  tabla.innerHTML = tableHTML;
};

function sort(array, first) {
  var months = {
    Enero: 1,
    Febrero: 2,
    Marzo: 3,
    Abril: 4,
    Mayo: 5,
    Junio: 6,
    Julio: 7,
    Agosto: 8,
    Septiembre: 9,
    Octubre: 10,
    Noviembre: 11,
    Diciembre: 12,
  };
  return array.sort(
    (a, b) =>
      (months[a] < months[first]) - (months[b] < months[first]) ||
      months[a] - months[b]
  );
}

const renderChart = (state) => {
  //Obtenemos los valores de los Meses
  const numeroMes = [
    ...new Set(
      state.map((mov) => {
        return mov.fecha.split('-')[1];
      })
    ),
  ];

  //Filtramos los ingresos mes-acumulado
  const ingresos = state
    .filter((mov) => mov.tipo == 1)
    .reduce((acc, current) => {
      let mes = current.fecha.split('-')[1];
      return {
        ...acc,
        [mes]: acc[mes]
          ? parseFloat(acc[mes]) + parseFloat(current.monto)
          : parseFloat(current.monto),
      };
    }, {});

  //Filtramos los gastos mes-acumulado

  const gastos = state
    .filter((mov) => mov.tipo == 2)
    .reduce((acc, current) => {
      let mes = current.fecha.split('-')[1];

      return {
        ...acc,
        [mes]: acc[mes]
          ? parseFloat(acc[mes]) + parseFloat(current.monto)
          : parseFloat(current.monto),
      };
    }, {});

  //PARA VOS HERI, TEN PAZ.......
  numeroMes.forEach((num) => {
    num in gastos ? null : (gastos[num] = 0);
    num in ingresos ? null : (ingresos[num] = 0);
  });

  const meses = numeroMes.sort().map((num) => month[num - 1]);

  const valueBymesI = Object.keys(ingresos)
    .sort()
    .map((key) => ingresos[key]);

  const valueBymesG = Object.keys(gastos)
    .sort()
    .map((key) => gastos[key]);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [...meses],
      datasets: [
        {
          label: 'Ingresos',
          fill: false,
          data: [...valueBymesI],
          color: '#1d2d50',
          borderColor: '#4CAF50',
          backgroundColor: '#4CAF50',
        },
        {
          label: 'Gastos',
          fill: false,
          data: [...valueBymesG],
          color: '#1d2d50',
          borderColor: '#ff414d',
          backgroundColor: '#ff414d',
        },
      ],
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      },
    },
  });
};

const handlerSubmit = (e) => {
  e.preventDefault();
  state = [
    ...state,
    {
      descripcion: descripcion.value,
      monto: monto.value,
      tipo: tipo.value,
      fecha: fecha.value,
    },
  ];
  saveInLocalStorage(state);
  renderTable(state);
  renderChart(state);
  form.reset();
};

function init() {
  renderTable(state);
  renderChart(state);

  form.addEventListener('submit', handlerSubmit);
}

init();
