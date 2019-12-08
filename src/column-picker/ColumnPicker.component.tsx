import React from "react";
import { Grid, Typography, Select, Input, MenuItem, Checkbox, ListItemText } from "@material-ui/core";
import { columns, columnTitles, ColumnsType } from './models';

export interface ColumnPickerStateProps {
  selectedColumns: string[]
}

export interface ColumnPickerDispatchProps {
  onColumnsSelected(selectedColumns: ColumnsType[]): void;
}

const ColumnPickerComponent: React.FC<ColumnPickerStateProps & ColumnPickerDispatchProps> = ({ selectedColumns, onColumnsSelected }) => {
  const columnsDisplay = () => {
    if(selectedColumns.length === columns.length){
      return 'All selected';
    }

    return 'Selected columns'
  }

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Columns
      </Typography>
      <Grid container spacing={2}>
        <Select
          multiple
          value={selectedColumns}
          onChange={(evt) => { onColumnsSelected(evt.target.value as any as ColumnsType[]) }}
          input={<Input />}
          renderValue={columnsDisplay}
        // MenuProps={MenuProps}
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
      </Grid>
    </>
  );
};

export default ColumnPickerComponent;
