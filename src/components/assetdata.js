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

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

export const employeesGrid = [
  {
    headerText: "Ecosytem",
    width: "170",
    template: gridEmployeeProfile,
    textAlign: "Center",
  },
  { field: "Name", headerText: "", width: "0", textAlign: "Center" },
  {
    field: "Title",
    headerText: "Assets",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "HireDate",
    headerText: "Investment Ratio (%)",
    width: "150",
    textAlign: "Center",
  },

  {
    field: "Country",
    headerText: "Invested Value (USDC)",
    width: "150",
    textAlign: "Center",
  },

  {
    field: "ReportsTo",
    headerText: "Current Value (USDC)",
    width: "140",
    textAlign: "Center",
  },
  {
    field: "EmployeeID",
    headerText: "Change",
    width: "125",
    textAlign: "Center",
  },
];

export const employeesData = [
  {
    EmployeeImage: "https://app.pathdao.io/images/cryptounicorns-logo.png",
    Name: "CryptoUnicorns",
    Title: "NFTs",
    HireDate: 0,
    Country: 0,
    ReportsTo: 24439.964,
    EmployeeID: "MOONBAG",
  },
  {
    Name: "Defy Disrupt",
    Title: "NFT",
    HireDate: 0,
    Country: 0,
    ReportsTo: 289.846,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1478639274333331459/iAOCeqEg_400x400.jpg",
    EmployeeID: "MOONBAG",
  },
  {
    Name: "Galaxy Fight Club",
    Title: "Tokens",
    HireDate: 0.09,
    Country: 4472,
    ReportsTo: 26752.451,
    EmployeeImage: "https://app.pathdao.io/images/galaxy-fight-club-logo.png",
    EmployeeID: 498.2,
  },
  {
    Name: "Walken",
    Title: "NFTs",
    HireDate: 2.27,
    Country: 117110,
    ReportsTo: 516693.08,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1470737569033949188/QdW1Ybv0_400x400.jpg",
    EmployeeID: 341.2,
  },
  {
    Name: "Cantina Royale",
    Title: "Tokens",
    HireDate: 2.91,
    Country: 150000,
    ReportsTo: 619500,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1510922035689672711/LjIWtSmY_400x400.jpg",
    EmployeeID: 313,
  },
  {
    Name: "Genopets",
    Title: "NFTs",
    HireDate: 1.17,
    Country: 60000,
    ReportsTo: 176000,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1403767575452872704/U0GT665X_400x400.jpg",
    EmployeeID: 119.3,
  },
  {
    Name: "DG Pals",
    Title: "NFTs",
    HireDate: 1.85,
    Country: 95000,
    ReportsTo: 235523.634,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1456615332286656512/Dheb8alq_400x400.jpg",
    EmployeeID: 147.9,
  },
  {
    Name: "League of Kingdoms",
    Title: "NFTs",
    HireDate: 4.12,
    Country: 212214.41,
    ReportsTo: 417240,
    EmployeeImage:
      "https://app.pathdao.io/images/league-of-kingdoms-logo@3x.png",
    EmployeeID: 96.6,
  },
  {
    Name: "Aradena",
    Title: "Tokens",
    HireDate: 3.88,
    Country: 200000,
    ReportsTo: 350000,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1446207622454120450/_JzAyLOb_400x400.jpg",
    EmployeeID: 75,
  },
  {
    Name: "Rebel Bots",
    Title: "Tokens",
    HireDate: 0.44,
    Country: 22500,
    ReportsTo: 30992.5,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1422869626543919105/v9dTwhGw_400x400.png",
    EmployeeID: 37.7,
  },
  {
    Name: "Ultiverse",
    Title: "NFTs",
    HireDate: 0.09,
    Country: 4700,
    ReportsTo: 5869382,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1501073579164815361/VC1rhMfN_400x400.jpg",
    EmployeeID: 24.9,
  },
  {
    Name: "Castle Crush",
    Title: "NFTs",
    HireDate: 9.71,
    Country: 500000,
    ReportsTo: 506161.362,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1516389595147120648/Sl57a7JH_400x400.jpg",
    EmployeeID: 1.2,
  },
  {
    Name: "Avarik Sage",
    Title: "Tokens",
    HireDate: 1.94,
    Country: 100000,
    ReportsTo: 100000.08,
    EmployeeImage: "https://app.pathdao.io/images/avarik-saga-logo.png",
    EmployeeID: 0,
  },
  {
    Name: "Stella Fantasy",
    Title: "Tokens",
    HireDate: 0.97,
    Country: 50000,
    ReportsTo: 50000.02,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1485873089326252035/gyA42HjH_400x400.png",
    EmployeeID: 0,
  },
  {
    Name: "Kingdom Raids",
    Title: "Tokens",
    HireDate: 0.97,
    Country: 50000,
    ReportsTo: 50000.01,
    EmployeeImage: "https://app.pathdao.io/images/kingdom-raids.png",
    EmployeeID: 0,
  },
  {
    Name: "Influence",
    Title: "NFTs",
    HireDate: 2.69,
    Country: 138667,
    ReportsTo: 138667,
    EmployeeImage: "https://app.pathdao.io/images/influenceth-logo.png",
    EmployeeID: 0,
  },
  {
    Name: "Axes Metaverse",
    Title: "Tokens",
    HireDate: 1.94,
    Country: 100000,
    ReportsTo: 100000,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1459577858591006725/uagRQTSH_400x400.jpg",
    EmployeeID: 0,
  },
  {
    Name: "Cradles",
    Title: "Tokens",
    HireDate: 1.94,
    Country: 100000,
    ReportsTo: 100000,
    EmployeeImage: "https://app.pathdao.io/images/cradles-logo.png",
    EmployeeID: 0,
  },
  {
    Name: "Defy Disrupt",
    Title: "Tokens",
    HireDate: 1.94,
    Country: 100000,
    ReportsTo: 100000,
    EmployeeImage:
      "https://pbs.twimg.com/profile_images/1478639274333331459/iAOCeqEg_400x400.jpg",
    EmployeeID: 0,
  },
  {
    Name: "Mirror World",
    Title: "Tokens",
    HireDate: 1.46,
    Country: 75000,
    ReportsTo: 75000,
    EmployeeImage: "https://app.pathdao.io/images/mirror-world-logo.jpeg",
    EmployeeID: 0,
  },
];
