import { Box, ListItemText, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import cardStyles from './CardsStyle';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';
function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Jon Spanicopodopolis', 'LR1234567890', 6.0),
  createData('Jim Brewer', 'LR1234567890', 9.0),
  createData('Steve Bannon', 'LR1234567890', 16.0),
  createData('Richard Hogarth', 'LR1234567890', 16.0),
];
export default function PendingLeaves() {
  const cStyles = cardStyles();
  return (
    <Box className={cStyles.card}>
      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: '2px dotted #99999A',
              padding: '0px',
            },
          }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: '0px' }}>
                <Typography fontSize={'1.1rem'} fontWeight={600} color={'#333'}>
                  Employee
                </Typography>
              </TableCell>
              <TableCell style={{ textAlign: 'center' }}>
                <Typography fontSize={'1.1rem'} fontWeight={600} color={'#333'}>
                  Request#
                </Typography>
              </TableCell>
              <TableCell style={{ textAlign: 'center' }}>
                <Typography fontSize={'1.1rem'} fontWeight={600} color={'#333'}>
                  Details
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component='th'
                  scope='row'
                  style={{ borderBottom: 'none', textAlign: 'left' }}
                >
                  <Typography>{row.name}</Typography>
                </TableCell>
                <TableCell
                  style={{ borderBottom: 'none', textAlign: 'center' }}
                >
                  <Typography>{row.calories}</Typography>
                </TableCell>
                <TableCell
                  style={{ borderBottom: 'none', textAlign: 'center' }}
                >
                  <InfoIcon sx={{ color: 'red' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <p style={{ margin: 0 }}>&nbsp;</p>
      <Link to='' style={{ color: 'red', textDecoration: 'none' }}>
        View All Contacts
      </Link>
    </Box>
  );
}
