import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { ItemUseContext } from "../../content/item-contex";

export default function History() {
  const { history, setHistory } = ItemUseContext();
  const r = {
    color: "red",
  };

  function deleteAll() {
    setHistory([]);
  }
  const totalsum = history
    .map((x) => x.sum)
    .reduce((x, y) => x + y, 0)
    .toFixed(2);
  const totalquantity = history
    .map((x) => x.quantity)
    .reduce((x, y) => x + y, 0);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={r}>No.</TableCell>
            <TableCell style={r}>Date</TableCell>
            <TableCell align="center" style={r}>
              Item (s)
            </TableCell>
            <TableCell align="center" style={r}>
              Total Quantity (s)
            </TableCell>
            <TableCell align="right" style={r}>
              Sum (Rm)
            </TableCell>
            <TableCell align="right" onClick={deleteAll} style={r}>
              <DeleteIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.length === 0 ? (
            <TableRow>
              <TableCell align="justify" style={r}>
                NO PURCHASE HISTORY
              </TableCell>
            </TableRow>
          ) : (
            history.map((i, index) => {
              const { date, quantity, sum, item } = i;
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell align="center">
                    {item?.map((e, index) => {
                      return <p key={index}>{e}</p>;
                    })}
                  </TableCell>
                  <TableCell align="center">{quantity}</TableCell>
                  <TableCell align="right">{sum}</TableCell>
                </TableRow>
              );
            })
          )}
          <TableRow>
            <TableCell style={r}>Total </TableCell>
            <TableCell></TableCell>

            <TableCell align="center" style={r}>
              {history.length === 0 ? "" : totalquantity}
            </TableCell>
            <TableCell align="right" style={r}>
              {history.length === 0 ? "" : totalsum}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
