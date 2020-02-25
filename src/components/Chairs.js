import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export class ChairsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Chairs: [],
      componentfetch: true,
    }
  }

  componentDidMount() {
    fetch('http://localhost:8082/chairs')
      .then(response => response.json())
      .then(jsonData => this.setState({ Chairs: jsonData, componentfetch: false}))
  }

  render() {


    if (this.state.componentfetch) {
      return "Cargando..."
    }

    return (
      <div style={{'display': 'flex','flexDirection': 'row'}}>
      <TableContainer component={Paper} style={{'width': '90%','margin':'15px'}}>
        <Table className="efwe" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>Nombre</b></TableCell>
              <TableCell align="right"><b>Estado</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.Chairs.map(Chair => (
              <TableRow hover id={Chair.id} key={Chair.id} tabIndex={-1}>
                <TableCell align="center">{Chair.name}</TableCell>
                <TableCell align="right">{Chair.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
  }
}
