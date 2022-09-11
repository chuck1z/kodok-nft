import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PDFExpoer,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "./assetdata";
const AssetInvestment = () => {
  return (
    <div className="border gap-4 place-item-center h-fit ml-14 mr-14 mt-14 p-4 border-[#d7dbec] rounded-lg">
          <span>Performance Overview</span>
          <GridComponent className="mt-4">
              <ColumnsDirective>
                  {ordersGrid.map((item, index) => (
                      <ColumnDirective key={index} {...item} />
                ))}
              </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default AssetInvestment;
