import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  roomlist: {
    borderRadius: 3,
    backgroundColor: '#BDBDBD',
    width: '85%',
  },
  table: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'flex-start',
  },
  joinButton: {
  },
});

const columns = [
    { id: 'id', label: 'ID', minWidth: 20 },
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'size',
    label: 'Size',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  { id: 'owner', label: 'Owner', minWidth: 100, },
];

/*const rows = [
    {id: 7781, name: 'First room test for Blyatitude', size: 6, owner: 'NhgrtPlayer', owner_id: 12}
];*/

const generateRows = (number) => {
  const rowsToReturn = [];
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  for (let i = 0; i < number; i++) {
    const row = {
      id: getRndInteger(1000, 10000),
      name: 'First room test for Blyatitude',
      size: getRndInteger(1, 13),
      owner: 'NhgrtPlayer',
      owner_id: getRndInteger(1, 9999),
    };
    rowsToReturn.push(row);
  }
  return (rowsToReturn);
}

const rows = generateRows(47);

export default function RoomList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const classes = useStyles();

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const renderTableRow = (row) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.format && typeof value === 'number' ? column.format(value) : value}
              </TableCell>
            );
          })}
        </TableRow>
      );
    }

    return (
        <Paper className={classes.roomlist}>
          <Table className={classes.table} stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (renderTableRow(row));
              })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          <Button
          variant="contained"
          color="primary"
          className={classes.joinButton}
          >
            JOIN ROOM
          </Button>
        </Paper>
    );
}