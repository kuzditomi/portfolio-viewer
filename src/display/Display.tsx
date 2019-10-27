import { Report } from "../models";
import React from "react";
import "./display.scss";
import TradeRow from "./TradeRow";

export interface DisplayProps {
  report: Report;
}

const Display: React.FC<DisplayProps> = ({ report }) => (
  <div className="display">
    <h2>{report.name}</h2>
    <table>
      <thead>
        <tr>
          <th>Underlying</th>
          <th>Option type</th>
          <th>Option target</th>
          <th>Position</th>
          <th>Expiration</th>
          <th>Days remaining</th>
        </tr>
      </thead>
      <tbody>
        {report.trades.map((trade, i) => (
          <TradeRow trade={trade} key={i} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Display;
