import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/tasks')
      .then(response => {
        const responseData = response.data.map(item => {
          return { name: item.title, value: item.priority === 'p' ? 1 : 2 };
        });

        setData(responseData);
      })
      .catch(error => console.error('Somethingg went wrong: ', error));
  }, []);

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div>
      <h2>Dashboard</h2>
      <h1>Total: {data.length}</h1>
      <h1>Last: {data[data.length - 1]?.name}</h1>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
