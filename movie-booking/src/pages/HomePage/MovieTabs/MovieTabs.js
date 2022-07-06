import React, { useEffect, useState } from "react";
import { Tabs, Typography } from "antd";
import { movieService } from "../../../services/movieService";
import MovieTabItem from "./MovieTabItem";
const { TabPane } = Tabs;

export default function MovieTabs() {
  const { Paragraph, Text } = Typography;
  let [dataRaw, setDataRaw] = useState([]);
  useEffect(() => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        setDataRaw(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderContent = () => {
    return dataRaw.map((heThongRap, index) => {
      return (
        <TabPane
          tab={<img src={heThongRap.logo} className="w-10 h-10 mt-0" />}
          key={index}
        >
          <Tabs
            style={{ height: 500 }}
            tabPosition="left"
            defaultActiveKey="1"
            size="small"
            id="cumRap-panel"
          >
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="w-48 whitespace-normal text-left">
                      <Text ellipsis type="success">
                        {cumRap.tenCumRap}
                      </Text>
                      <Paragraph ellipsis={{ rows: 2 }} type="secondary">
                        {cumRap.diaChi}
                      </Paragraph>
                      <a href="/" style={{ color: "#fb4225" }}>
                        [chi tiết]
                      </a>
                    </div>
                  }
                  key={index}
                >
                  <div style={{ height: 500, overflowY: "scroll" }}>
                    {cumRap.danhSachPhim.map((movie, index) => {
                      return <MovieTabItem key={index} movie={movie} />;
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div className="mt-10 border mb-10 xl:mx-0 mx-10">
      <Tabs style={{ height: 500 }} tabPosition="left" defaultActiveKey="1">
        {renderContent()}
      </Tabs>
    </div>
  );
}
