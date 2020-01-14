import React from "react";
import { Select, Input, MenuItem, Checkbox, ListItemText } from "@material-ui/core";
import { columns, columnTitles, ColumnsType } from './models';

export interface ColumnPickerStateProps {
  selectedColumns: string[]
}

export interface ColumnPickerDispatchProps {
  onColumnsSelected(selectedColumns: ColumnsType[]): void;
}

const ColumnPickerComponent: React.FC<ColumnPickerStateProps & ColumnPickerDispatchProps> = ({ selectedColumns, onColumnsSelected }) => (
  <Select
    multiple
    value={selectedColumns}
    onChange={(evt) => { onColumnsSelected(evt.target.value as any as ColumnsType[]) }}
    input={<Input />}
    renderValue={() => 'Displayed columns'}
  >
    {
      columns.filter(c => c !== 'action').map(column => (
        <MenuItem key={column} value={column}>
          <Checkbox checked={selectedColumns.indexOf(column) > -1} />
          <ListItemText primary={columnTitles[column]} />
        </MenuItem>
      ))
    }
  </Select>
);

export default ColumnPickerComponent;
