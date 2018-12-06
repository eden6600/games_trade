import React, { Component } from 'react';
import { Consumer } from '../../../context';

class TradeReq extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { tradeReq } = value;

          if (tradeReq) {
            return (
              <div className="animated fadeIn">
                <table className="table text-center">
                  <thead className="thead">
                    <tr>
                      <th>From User</th>
                      <th>Request For</th>
                      <th>Trade For</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {tradeReq.map(req => {
                      return (
                        <tr>
                          <td>{req.fromUser}</td>
                          <td>{req.reqGame}</td>
                          <td>{req.tradeFor}</td>
                          <td>
                            <i
                              className="fas fa-check text-success mr-4"
                              style={{ cursor: 'pointer' }}
                            />
                            <i
                              className="fas fa-times text-danger"
                              style={{ cursor: 'pointer' }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          } else {
            return (
              <div className="alert alert-primary text-center">
                No Requests Has Been Received
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default TradeReq;
