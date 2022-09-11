const lineChartData = [
  [
    { x: new Date(2022, 7, 14), y: 10100 },
    { x: new Date(2022, 7, 21), y: 11200 },
    { x: new Date(2022, 7, 28), y: 14324 },
    { x: new Date(2022, 7, 35), y: 8324 },
    { x: new Date(2022, 7, 42), y: 7324 },
    { x: new Date(2022, 7, 49), y: 11324 },
    { x: new Date(2022, 7, 56), y: 12324 },
    { x: new Date(2022, 7, 63), y: 13324 },
    { x: new Date(2022, 7, 70), y: 14324 },
    { x: new Date(2022, 7, 77), y: 12324 },
    { x: new Date(2022, 7, 84), y: 11324 },
  ],
  [
    { x: new Date(2022, 7, 14), y: 123100 },
    { x: new Date(2022, 7, 21), y: 143100 },
    { x: new Date(2022, 7, 28), y: 103100 },
    { x: new Date(2022, 7, 35), y: 113100 },
    { x: new Date(2022, 7, 42), y: 93100 },
    { x: new Date(2022, 7, 49), y: 83100 },
    { x: new Date(2022, 7, 56), y: 123100 },
    { x: new Date(2022, 7, 63), y: 153100 },
    { x: new Date(2022, 7, 70), y: 173100 },
    { x: new Date(2022, 7, 77), y: 63100 },
    { x: new Date(2022, 7, 84), y: 43100 },
  ],
];

export const chartdata = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "Total Investment Value",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "Unutilized Treasury Value",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y-M-d",
  intervalType: "Auto",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}",
  rangePadding: "None",
  minimum: 0,
  intervalType: "Auto",
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};
