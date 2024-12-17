import { MaterialReactTable, MRT_EditActionButtons, useMaterialReactTable } from "material-react-table";
import tableColumns from "./columns";
import PropTypes from 'prop-types';
import useFetchData from "../../hooks/useFetchData";

const ViewTable = ({ apiRoute, id}) => {
    // Fetches data from api based on apiRoute
    const { data, loading, error } = useFetchData(`${apiRoute}/${id}`);
    
    const columns = tableColumns[apiRoute];
    if (apiRoute && columns){
        return (
            <MaterialReactTable
            columns={columns}
            data={data}
            loading={loading}
            error={error}
            />
        );
    }
    return null;
    
}


export default ViewTable;