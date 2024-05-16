import React from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";
import { FaMusic } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaPersonBooth } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
function Dashboard() {
    const data = [
        {
            name: "12",
            uv: 4000,
            customers: 2400,
            amt: 2400,
        },
        {
            name: "1",
            uv: 3000,
            customers: 1398,
            amt: 2210,
        },
        {
            name: "2",
            uv: 2000,
            customers: 9800,
            amt: 2290,
        },
        {
            name: "3",
            uv: 2780,
            customers: 3908,
            amt: 2000,
        },
        {
            name: "4",
            uv: 1890,
            customers: 4800,
            amt: 2181,
        },
        {
            name: "5",
            uv: 2390,
            customers: 3800,
            amt: 2500,
        },
        {
            name: "6",
            uv: 3490,
            customers: 4300,
            amt: 2100,
        },
    ];

    return (
        <main className="main-container" style={{ backgroundColor: "#242424" }}>
            <div className="main-title font-bold pb-10 text-2xl">
                <h3>DASHBOARD</h3>
            </div>

            <div className="main-cards">
                <div className="card">
                    <div className="card-inner">
                        <h3>PRODUCTS</h3>
                        <FaMusic className="card_icon" />
                    </div>
                    <h1>300</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>CATEGORIES</h3>
                        <FaList className="card_icon" />
                    </div>
                    <h1>12</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>CUSTOMERS</h3>
                        <FaPersonBooth className="card_icon" />
                    </div>
                    <h1>33</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>ALERTS</h3>
                        <FaBell className="card_icon" />
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className="charts">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="customers" fill="#1FDF64" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="customers"
                            stroke="#1FDF64"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Dashboard;
