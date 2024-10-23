import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

import { visuallyHidden } from './utils';
import { TypePatientsHead } from './types/types';

export default function PatientsTableHead({
  order,
  orderBy,
  headLabel,
  onRequestSort,
}: TypePatientsHead) {
  const onSort = (property: string) => (event: React.MouseEvent<HTMLSpanElement>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow>

        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{  
              background: 'rgb(200, 250, 214)',
              fontSize: '12px', 
              fontWeight: 700, 
              color: 'rgb(0, 167, 111)' , 
              }}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={onSort(headCell?.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


