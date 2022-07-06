import React from "react";
import { Tabs, Typography } from "antd";
import DetailMovieTab from "./DetailMovieTab";

export default function DetailPageMobile({ heThongRap }) {
  const { TabPane } = Tabs;
  const { Paragraph, Text } = Typography;
  return (
    <div>
      <TabPane tab={<img src={heThongRap.logo} className="w-10 h-10" />}>
        {heThongRap.cumRapChieu.map((cumRap, index) => {
          return (
            <div className="mx-4 mt-4">
              <div className="whitespace-normal text-left ">
                <Text type="success">{cumRap.tenCumRap}</Text>
                <Paragraph type="secondary">{cumRap.diaChi}</Paragraph>
              </div>
              <div
                className="border-b-2"
                style={{ minHeight: "100px", overflowY: "scroll" }}
              >
                <DetailMovieTab key={index} timeList={cumRap.lichChieuPhim} />
              </div>
            </div>
          );
        })}
      </TabPane>
    </div>
  );
}
