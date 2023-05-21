
import {  Space, Button } from "antd";

import PaintIcon from "../../../assets/png/paint-1.png";
import FiledCard from "../../../component/close-icon/cards/fields-card";
import PrimaryLabel from "../../../component/labels/primary-label";


import { ReactComponent as FullSignalIcon } from "../../../assets/svg/full-signal.svg";
import SimpleTable from "../../../component/Tables/simple-table";

const columns = [
  {
    title: "CARRIER ",
    dataIndex: "carrier",
    key: "carrier",
    width: "40%",
    render: () => {
      return (
        <div className="carrier-column">
          <FullSignalIcon />
          <img src={PaintIcon} />
          <div>
            <Space
              direction="vertical"
              size="small"
              style={{
                display: "flex",
              }}
            >
              <PrimaryLabel normal={true} className="text-normal font-normal">
                CENTRAL FREIGHT LINER (CENF){" "}
              </PrimaryLabel>
              <FiledCard title={"Code: 1102"}></FiledCard>
            </Space>
          </div>
        </div>
      );
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: "15%",
  },
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
    width: "20%",
    render: () => {
      return (
        <div>
          <Space
            direction="vertical"
            size="small"
            style={{
              display: "flex",
            }}
          >
            <PrimaryLabel normal={true} className="text-normal font-normal">
              3M Company
            </PrimaryLabel>
            <FiledCard title={"Code: 1102"}></FiledCard>
          </Space>
        </div>
      );
    },
  },

  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: "25%",
    render: () => {
      return (
        <div style={{ marginLeft: "-10px" }}>
          <Button style={{ marginRight: "5px" }}>Debug</Button>

          <Button className="danger-btn">Disconnect</Button>
        </div>
      );
    },
  },
];

const data = [
  {
    key: "1",
    date: "2021 / 08 /29",
  },
  {
    key: "2",
    date: "2021 / 08 /29",
  },
  {
    key: "3",
    date: "2021 / 08 /29",
  },
  {
    key: "4",
    date: "2021 / 08 /29",
  },
];

const CarrierTab = () => {
  return (
    <SimpleTable
      columns={columns}
      data={data}
      scroll={{ x: 0, y: "calc(33vh)" }}
    />
  );
};
export default CarrierTab;
