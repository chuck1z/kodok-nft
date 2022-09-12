export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const employeesGrid = [
  {
    headerText: "Wallet",
    width: "170",
    field: "Name",
    textAlign: "Center",
  },
  {
    field: "Title",
    headerText: "Network",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "HireDate",
    headerText: "Asset Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Country",
    headerText: "Wallet Description",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "ReportsTo",
    headerText: "Invested Value",
    width: "140",
    textAlign: "Center",
  },
  {
    field: "EmployeeID",
    headerText: "Current Value",
    width: "125",
    textAlign: "Center",
  },
];

export const employeesData = [
  {
    Name: "0x97Cb7e59C13a66FdAE9ADE9d2847d00340871fbB",
    Title: "Ethereum",
    HireDate: "USDC",
    Country: "Fireblocks Main Treasury",
    ReportsTo: 4413064,
    EmployeeID: 4413064,
  },
  {
    Name: "0x10B649ada1007924b2e1faa25c108cAa4aABB3e0",
    Title: "Ethereum",
    HireDate: "USDC",
    Country: "Gnosis Main 2",
    ReportsTo: 2994447,
    EmployeeID: 2994447,
  },
  {
    Name: "0x37672dda85f3cb8da4098baac5d84e00960cb081",
    Title: "ERC-20",
    HireDate: "Path Liquidity Pool",
    Country: "Gnosis Main 1",
    ReportsTo: 2025467,
    EmployeeID: 1105742,
  },
  {
    Name: "0x97Cb7e59C13a66FdAE9ADE9d2847d00340871fbB",
    Title: "Ethereum",
    HireDate: "ETH",
    Country: "Fireblocks Main Treasury",
    ReportsTo: 271080,
    EmployeeID: 271080,
  },
  {
    Name: "0x37672dda85f3cb8da4098baac5d84e00960cb081",
    Title: "Polygon",
    HireDate: "KyberSwap Liquidity Pool",
    Country: "Gnosis Main 1",
    ReportsTo: 200000,
    EmployeeID: 202300,
  },
  {
    Name: "0x3D926A2639321690BE74A408aC1Ff61663E53214",
    Title: "Ethereum",
    HireDate: "USDC",
    Country: "Fireblokcs Asset Management",
    ReportsTo: 194117,
    EmployeeID: 194117,
  },
  {
    Name: "0x3D926A2639321690BE74A408aC1Ff61663E53214",
    Title: "Ethereum",
    HireDate: "USDT",
    Country: "Fireblocks Asset Management",
    ReportsTo: 147789,
    EmployeeID: 147789,
  },
  {
    Name: "0x97Cb7e59C13a66FdAE9ADE9d2847d00340871fbB",
    Title: "Polygon",
    HireDate: "USDT",
    Country: "Fireblocks Main Treasury",
    ReportsTo: 142816,
    EmployeeID: 142816,
  },
  {
    Name: "0x3D926A2639321690BE74A408aC1Ff61663E53214",
    Title: "Polygon",
    HireDate: "USDT",
    Country: "Fireblocks Asset Management",
    ReportsTo: 120160,
    EmployeeID: 120160,
  },
  {
    Name: "MEXC",
    Title: "MEXC",
    HireDate: "USDT",
    Country: "MEXC Market Maker Wallet",
    ReportsTo: 100000,
    EmployeeID: 150000,
  },
];
