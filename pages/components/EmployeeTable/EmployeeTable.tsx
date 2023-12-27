import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Checkbox, 
  TableSortLabel 
} from '@mui/material';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import UserCell from '../UserCell/UserCell'
// Dummy data for the table's body
const rows: any = [
  {id :  '#88888' , contract: 'Tiempo indermandato' , schedule: 'Sede1', location:'Jornada', policy: 'Poltica de directores'  },
  {id :  '#88888' , contract: 'Tiempo indermandato' , schedule: 'Sede1', location:'Jornada', policy: 'Poltica de directores'  },
  {id :  '#88888' , contract: 'Tiempo indermandato' , schedule: 'Sede1', location:'Jornada', policy: 'Poltica de directores'  },
  {id :  '#88888' , contract: 'Tiempo indermandato' , schedule: 'Sede1', location:'Jornada', policy: 'Poltica de directores'  },
];

export default function CustomTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , border: 'none' }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{
                '& > *': {
                  borderBottom: 'unset'
                },
              }}>
            <TableCell style={{borderLeft:"none"}} padding="checkbox">
              <Checkbox
                 sx={{
                    color: 'grey', 
                    '&.Mui-checked': {
                      color: '#7A6FF0', 
                    },
                  }}
                inputProps={{
                  'aria-label': 'select all employees',
                }}
              />
            </TableCell>
            <TableCell style={{ display: 'flex', alignItems: 'center' }}>
              Empleados (10)
              <UnfoldMoreOutlinedIcon fontSize='small'/>
            </TableCell>
            <TableCell>
              ID 
            </TableCell>
            <TableCell style={{ display: 'flex', alignItems: 'center' }}>
              Contrato 
              <UnfoldMoreOutlinedIcon fontSize='small'/>
            </TableCell>
            <TableCell >
              Jornada 
            </TableCell>
            <TableCell style={{ display: 'flex', alignItems: 'center' }}>
              Sede 
              <UnfoldMoreOutlinedIcon fontSize='small'/>
            </TableCell>
            <TableCell  >
              Política de eventos 
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: number) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                 sx={{
                    color: 'grey', // Color when unchecked
                    '&.Mui-checked': {
                      color: '#7A6FF0', // Color when checked
                    },
                  }}
                  inputProps={{
                    'aria-labelledby': `enhanced-table-checkbox-${index}`,
                  }}
                />
              </TableCell>
              {/* Replace these TableCell contents with your actual row data */}
              <TableCell component="th" scope="row">
                <UserCell/>
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.contract}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.schedule}</TableCell>
              <TableCell align="right">{row.policy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
