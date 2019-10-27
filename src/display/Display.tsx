import { Report, OptionType } from "../models";
import React from "react";

export interface DisplayProps {
  report: Report;
}

const Display: React.FC<DisplayProps> = ({ report }) => {
  const daysRemaining = (date: Date): number => {
    const now = new Date();

    return Math.floor((Number(date) - Number(now)) / 1000 / 60 / 60 / 24);
  };

  return (
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
            <tr key={i}>
              <td>{trade.underlying}</td>
              <td>{trade.optionType === OptionType.Call ? 'CALL' : 'PUT'}</td>
              <td>{trade.optionTarget}</td>
              <td>{trade.position}</td>
              <td>{trade.expiration.toLocaleDateString()}</td>
              <td align="right">{daysRemaining(trade.expiration)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
