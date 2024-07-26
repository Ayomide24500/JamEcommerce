import { BsThreeDots } from "react-icons/bs";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RecentOrder = () => {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Orders Per Day",
        data: [10, 20, 30, 40, 50, 60, 70],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Orders Per Month",
        data: [100, 200, 300, 400, 500, 600, 700],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Period",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Orders",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="lg:w-[90%] w-full h-[430px] lg:h-[390px] bg-white shadow-sm rounded-md flex flex-col p-4">
      <div className="h-[50px] w-full flex justify-between items-center">
        <p className="font-medium lg:text-[17px] text-[13px]">Recent Orders</p>
        <div className="text-[24px] font-medium">
          <BsThreeDots />
        </div>
      </div>
      <div className="flex-grow h-[70%] lg:flex lg:justify-center lg:items-center lg:w-[92%]">
        <Line
          data={data}
          options={options}
          className="text-[12px] lg:w-full w-[80%]"
        />
      </div>
    </div>
  );
};

export default RecentOrder;
