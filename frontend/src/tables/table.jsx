import React from "react";
import { MaterialReactTable } from "material-react-table";
import PropTypes from 'prop-types';

const Table = (props) => {
  return (
    <div style={{ padding: "20px" }}>
      <MaterialReactTable 
        columns={props.columns} 
        data={props.data} />
    </div>
  );
};

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
  };

export default Table;