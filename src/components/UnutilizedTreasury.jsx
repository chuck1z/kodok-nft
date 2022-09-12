import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Search,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { employeesGrid, employeesData, contextMenuItems } from "./treasurydata";
const AssetInvestment = () => {
  return (
    <div className="border gap-4 place-item-center ml-14 mr-14 mt-14 p-4 border-[#d7dbec] rounded-lg overflow-x-auto">
      <span className="font-extrabold text-xl text-indigo-900">
        Performance Overview
      </span>
      <GridComponent
        className="mt-4"
        id="gridcomp"
        allowPaging
        allowSorting
        dataSource={employeesData}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Sort, ContextMenu, Filter, Search, Page]} />
      </GridComponent>
    </div>
  );
};

export default AssetInvestment;
