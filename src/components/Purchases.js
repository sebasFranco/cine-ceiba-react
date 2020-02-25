import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { deletePurchase } from '../actions/actionOfPurchase';

export class PurchasesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      purchases: [],
      componentfetch: true,
    }
  }

  deletePurchase = e =>{
    deletePurchase(e);
  }

  componentDidMount() {
    fetch('http://localhost:8082/Purchase')
      .then(response => response.json())
      .then(jsonData => this.setState({ purchases: jsonData, componentfetch: false}))
  }

  render() {


    if (this.state.componentfetch) {
      return "Cargando..."
    }

    return (
      <div>
        <TableContainer component={Paper}>
          <Table className="efwe" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>Silla</b></TableCell>
                <TableCell align="right"><b>Cliente</b></TableCell>
                <TableCell align="right"><b>Hora</b></TableCell>
                <TableCell align="right"><b>Dia</b></TableCell>
                <TableCell align="right"><b>Total</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.purchases.map(purchase => (
                <TableRow hover role="checkbox" key={purchase.id} tabIndex={-1} onClick={(e) => {this.deletePurchase(purchase)}}>
                  <TableCell component="th" scope="row">
                    {purchase.chair}
                  </TableCell>
                  <TableCell align="right">{purchase.idClient}</TableCell>
                  <TableCell align="right">{purchase.purchaseTime}</TableCell>
                  <TableCell align="right">{purchase.purchaseDay}</TableCell>
                  <TableCell align="right">{purchase.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}
