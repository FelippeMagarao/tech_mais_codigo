import logo from './minha_foto.jpg';
import Menu from '../components/Menu/Menu';
import { Botao } from '../components/Cartao/style';
import { Bar, Pie, Line} from 'react-chartjs-2';
import data from './data.json';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Dashboard = () => {
  // Contagem dos funcionários por departamento
  const countByDepartment = data.reduce((count, item) => {
    count[item.departamento] = (count[item.departamento] || 0) + 1;
    return count;
  }, {});

  const chartData = {
    labels: Object.keys(countByDepartment),
    datasets: [
      {
        data: Object.values(countByDepartment),
        backgroundColor: ['rgba(37, 99, 180, 0.6)', 'rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const salaryData = {
    labels: data.map(item => item.nome),
    datasets: [
      {
        label: 'Salário',
        data: data.map(item => item.salario),
        backgroundColor: 'rgba(26, 84, 209, 0.6)',
        borderColor: '#2632d8',
        borderWidth: 1,
      },
    ],
  };

  const ageData = {
    labels: data.map(item => item.nome),
    datasets: [
      {
        label: 'Idade',
        data: data.map(item => item.idade),
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
            <h2 style={{marginLeft: '220px', marginTop: '0px' }}>Contagem por Departamento</h2>
            <div style={{ width: '500px', height: '300px', marginTop: '100px', marginLeft: '220px'}}>
            <Pie data={chartData} />
          </div>
        </div>
        <div style={{ flex: 1 }}>
        <h2 style={{ marginTop: '0px', marginLeft: '80px' }}>Salários</h2>
          <div style={{ width: '500px', height: '300px', marginTop: '120px', marginLeft: '-150px'}}>
          <Bar data={salaryData} />
          </div>
        </div>
        <div style={{ flex: 1 }}>
        <h2 style={{ marginTop: '0px', marginLeft: '100px' }}>Idade</h2>
          <div style={{ width: '500px', height: '300px', marginTop: '120px', marginLeft: '-100px'}}>
          <Line data={ageData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;