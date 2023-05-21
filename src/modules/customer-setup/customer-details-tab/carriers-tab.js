import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Row, Col, Card } from "antd";
import PrimaryLabel from "../../../component/labels/primary-label";

const data = [
  {
    name: "Jan",
    "Carrier A": "40",
    "Carrier B": "24",
    "Carrier C": "24",
    "Carrier D": "38",
  },
  {
    name: "Feb",
    "Carrier A": "30",
    "Carrier B": "13",
    "Carrier C": "22",
    "Carrier D": "98",
  },
  {
    name: "Mar",
    "Carrier A": "20",
    "Carrier B": "98",
    "Carrier C": "22",
    "Carrier D": "28",
  },
  {
    name: "Apr",
    "Carrier A": "27",
    "Carrier B": "39",
    "Carrier C": "20",
    "Carrier D": "13",
  },
  {
    name: "May",
    "Carrier A": "18",
    "Carrier B": "48",
    "Carrier C": "21",
    "Carrier D": "24",
  },
  {
    name: "Jun",
    "Carrier A": "23",
    "Carrier B": "38",
    "Carrier C": "25",
    "Carrier D": "58",
  },
  {
    name: "Jul",
    "Carrier A": "34",
    "Carrier B": "43",
    "Carrier C": "21",
    "Carrier D": "88",
  },
  {
    name: "Aug",
    "Carrier A": "40",
    "Carrier B": "24",
    "Carrier C": "24",
    "Carrier D": "54",
  },
  {
    name: "Sep",
    "Carrier A": "30",
    "Carrier B": "13",
    "Carrier C": "22",
    "Carrier D": "43",
  },
  {
    name: "Oct",
    "Carrier A": "20",
    "Carrier B": "98",
    "Carrier C": "22",
    "Carrier D": "38",
  },
  {
    name: "Nov",
    "Carrier A": "27",
    "Carrier B": "39",
    "Carrier C": "20",
    "Carrier D": "99",
  },
  {
    name: "Dec",
    "Carrier A": "18",
    "Carrier B": "48",
    "Carrier C": "21",
    "Carrier D": "77",
  },
];

const yAxisformatter = (number) => {
  return `${number.toString()}k`;
};

let ActivityTab = () => {
  return (
    <Card>
      <div className="d-flex justify-content-between my-5">
        <PrimaryLabel normal={true} className="text-large font-bold">
          01/01/2023
        </PrimaryLabel>

        <div className="d-flex actions">
          <div className="first">Daily</div>
          <div>Weekly</div>
          <div className="bg-light">Monthly</div>
          <div className="last">Yearly</div>
        </div>
      </div>

      <LineChart
        width={550}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis tickFormatter={yAxisformatter} axisLine={false} tickLine={false} />
        <CartesianGrid strokeDasharray="3 6"   
         vertical={false}
/>
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="Carrier A" stroke="#2E90FA" dot={false} />
        <Line type="linear" dataKey="Carrier B" stroke="#FDB022" dot={false}/>
        <Line type="linear" dataKey="Carrier C" stroke="#12B76A" dot={false}/>
        <Line type="linear" dataKey="Carrier D" stroke="#F97066" dot={false}/>
      </LineChart>
    </Card>
  );
};
export default ActivityTab;
