import React from "react";

export interface FilterProps {
  label: string;
}

const Filter: React.FC<FilterProps> = ({ label, children }) => {
  return (
    <div className="filter flex flex-column">
      <span>{label}</span>
      {children}
    </div>
  );
};

export default Filter;
