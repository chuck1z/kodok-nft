import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Crosshair,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { chartdata, LinePrimaryXAxis, LinePrimaryYAxis } from "./chartdata";

const LineChart = () => {
  return (
    <div className="border gap-4 place-item-center h-fit ml-14 mr-14 mt-14 p-4 border-[#d7dbec] rounded-lg">
      <span>Performance Overview</span>
      <span className="ml-4">(USDC)</span>
      <div className="mt-4">
        <ChartComponent
          id="line-chart"
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          crosshair={{ enable: true, lineType: "Vertical" }}
          tooltip={{
            enable: true,
            shared: true,
            format: "${point.y} USDC",
          }}
        >
          <Inject
            services={[LineSeries, DateTime, Legend, Crosshair, Tooltip]}
          />
          <SeriesCollectionDirective>
            {chartdata.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default LineChart;
