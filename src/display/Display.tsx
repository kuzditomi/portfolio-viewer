import { Report } from "../models";
import React from "react";

export interface DisplayProps {
  report: Report;
}

const Display: React.FC<DisplayProps> = ({ report }) => {
  return (
    <div className="display">
      <h2>{report.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Underlying</th>
          </tr>
        </thead>
        <tbody>
          {report.trades.map((trade, i) => (
            <tr key={i}>
              <td>{trade.underlying}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
