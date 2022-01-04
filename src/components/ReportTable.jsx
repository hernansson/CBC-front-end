import data from '../data/CovidReport.json'
import { DataGrid } from '@mui/x-data-grid';
const ReportTable = ()=>{

    console.log(data)
    const columns= Object.keys(data[0]).map(key=>({field:key,headerName:key,minWidth:150}))
    
    return (
        <div style={{ height: 600, width: '80%',marginLeft:'auto',marginRight:'auto' }}>
        <DataGrid
        getRowId={(row) => row.EmployeeID}
          rows={data}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    )
}

export default ReportTable