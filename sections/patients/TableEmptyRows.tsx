import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TypeTableEmptyRows } from './types/types';

export default function TableEmptyRows({ emptyRows, height }: TypeTableEmptyRows) {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}
