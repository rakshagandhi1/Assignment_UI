import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  ArcElement,
} from "chart.js";
import handwave from "../assets/hand-wave.png";
import earning from "../assets/earning.png";
import orders from "../assets/orders.png";
import balance from "../assets/balance.png";
import total_sales from "../assets/total_sales.png";
import product2 from "../assets/product2.jpg";
export default function GraphDetail() {
  const option = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          lineWidth: 0,
          drawOnChartArea: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
          drawBorder: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          lineWidth: 0,
          drawOnChartArea: false,
        },
      },
    },
  };
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Product A",
        data: [30, 20, 55, 35, 50, 15, 35, 50, 45, 40, 38, 42],
        backgroundColor: [
          "#F2EFFF",
          "#F2EFFF",
          "#F2EFFF",
          "#F2EFFF",
          "#F2EFFF",
          "#F2EFFF",
          "#F2EFFF",
          "#5A32EA",
          "#F2EFFF",
          "#F2EFFF",
          "#F2EFFF",
          "#F2EFFF",
        ],
        borderRadius: "yes",
      },
    ],
  };
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

  const doughnut_options = {
    plugins: {
      title: {
        display: true,
        color: "blue",
        font: {
          size: 30,
        },
        padding: {
          top: 0,
          bottom: 0,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };
  const doughnut_data = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [15, 30, 20, 35],
        borderColor: "#fff",
        backgroundColor: ["#F52C91", "#6038E9", "#9F6DEC", "#F1EFFC  "],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };
  return (
    <div className="Graph" style={{ padding: "30px" }}>
      <div className="header d-flex justify-content-between align-items-center flex-wrap">
        <h6 style={{ fontSize: "15px" }}>
          <b>Hello Shahrukh</b> <img src={handwave} alt="username" style={{ width: "18px" }} />
          ,
        </h6>
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <div className="graphDetails mt-4">
        <div className="graphBlock d-flex justify-content-center align-items-center gap-4">
          <div
            style={{
              backgroundColor: "#DDFFEC",
              borderRadius: "50%",
              padding: "22px",
            }}
          >
            <img src={earning} alt="earning" />
          </div>
          <div className="graphData">
            <p className="title">Earning</p>
            <h6 className="amount">$198k</h6>
            <h6 className="progress">
              <span>
                <b>
                  <i className="fa fa-arrow-up"></i>&nbsp; 37.8%
                </b>
              </span>
              &nbsp;this month
            </h6>
          </div>
        </div>
        <div className="graphBlock d-flex justify-content-center align-items-center gap-4">
          <div
            style={{
              backgroundColor: "#DDFFEC",
              borderRadius: "50%",
              padding: "22px",
            }}
          >
            <img src={orders} alt="orders"/>
          </div>
          <div className="graphData">
            <p className="title">Orders</p>
            <h6 className="amount">$2.4k</h6>
            <h6 className="progress">
              <span style={{ color: "#D02448" }}>
                <b>
                  <i className="fa fa-arrow-down"></i>&nbsp; $2%
                </b>
              </span>
              &nbsp;this month
            </h6>
          </div>
        </div>
        <div className="graphBlock d-flex justify-content-center align-items-center gap-4">
          <div
            style={{
              backgroundColor: "#E7DAFF",
              borderRadius: "50%",
              padding: "22px",
            }}
          >
            <img src={balance} alt="balance"/>
          </div>
          <div className="graphData">
            <p className="title">Balance</p>
            <h6 className="amount">$2.4k</h6>
            <h6 className="progress">
              <span style={{ color: "#D02448" }}>
                <b>
                  <i className="fa fa-arrow-down"></i>&nbsp; 2%
                </b>
              </span>
              &nbsp;this month
            </h6>
          </div>
        </div>
        <div className="graphBlock d-flex justify-content-center align-items-center gap-4">
          <div
            style={{
              backgroundColor: "#FFB4DC",
              borderRadius: "50%",
              padding: "22px",
            }}
          >
            <img src={total_sales} alt="total_sales"/>
          </div>
          <div className="graphData">
            <p className="title">Total Sales</p>
            <h6 className="amount">$89k</h6>
            <h6 className="progress">
              <span>
                <b>
                  <i className="fa fa-arrow-up"></i>&nbsp;11%
                </b>
              </span>
              &nbsp;this week
            </h6>
          </div>
        </div>
      </div>
      <div className="customerOverviewBlock mt-5">
        <div className="overviewBlock">
          <div className="d-flex justify-content-between align-items-center gap-4">
            <div>
              <h5>Overview</h5>
              <h6>Monthly Earning</h6>
            </div>
            <p>
              Quaterly <i className="fa fa-angle-down"></i>
            </p>
          </div>
          <div className="mt-4">
            <Bar options={option} data={data} />
          </div>
        </div>
        <div className="customersBlock">
          <h5>Customers</h5>
          <h6>Customers that buy products</h6>
          <div className="mt-4" style={{ position: "relative" }}>
            <label>
              <span>65% </span>
              <br /> Total New <br />
              Customers
            </label>
            <Doughnut
              options={doughnut_options}
              data={doughnut_data}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="productBlock mt-5">
        <div className="productHeading d-flex justify-content-between align-items-center gap-4 flex-wrap">
          <h5>Product Sell</h5>
          <div className=" d-flex justify-content-between align-items-center gap-4">
            <div className="form-group has-search">
              <span
                className="fa fa-search form-control-feedback"
                style={{ fontSize: "16px", fontWeight: "300" }}
              ></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                style={{ width: "100px" }}
              />
            </div>
            <p
              style={{
                fontSize: "12px",
                margin: "0",
                color: "#878A8A",
                fontWeight: "600",
              }}
            >
              Last 30 days &nbsp;{" "}
              <i
                className="fa fa-angle-down"
                style={{ fontSize: "16px", fontWeight: "600" }}
              ></i>
            </p>
          </div>
        </div>
        <div className="mt-4 table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col" className="text-center">
                  Stock
                </th>
                <th scope="col">Price</th>
                <th scope="col" className="text-center">
                  Total Sales
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="productDetailrow d-flex justify-content-start align-items-start gap-1 flex-nowrap">
                  <img src={product2} alt="product"/>
                  <div><span>Abstract 3D</span>
                  <p>
                    Loreum ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  </div>
                </td>
                <td className="text-center">32 in stock</td>
                <td>
                  <b>$ 45.99</b>
                </td>
                <td className="text-center">20</td>
              </tr>
              <tr>
                <td className="productDetailrow d-flex justify-content-start align-items-start gap-1 flex-nowrap">
                  <img src={product2} alt="product"/>
                  <div><span>Sarphens illustration</span>
                  <p>
                    Loreum ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  </div>
                </td>
                <td className="text-center">32 in stock</td>
                <td>
                  <b>$ 45.99</b>
                </td>
                <td className="text-center">20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
