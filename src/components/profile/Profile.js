import React, { Component } from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';

class Profile extends Component {
  state = {
    view: '',
    active: 'personalInfo'
  };

  onClick = e => {
    console.log();
    e.target.classList.add('active');
  };

  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={4}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="first">Tab 1</NavItem>
              <NavItem eventKey="second">Tab 2</NavItem>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
              <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      //  <div className="row">
      //   <div className="col-md-3">
      //     <ul className="list-group">
      //       <button
      //         className="list-group-item list-group-item-action border-0"
      //         name="personalInfo"
      //         onClick={this.onClick}
      //       >
      //         <i className="fas fa-user-circle" /> Personl Info
      //       </button>
      //       <button
      //         className="list-group-item list-group-item-action border-0"
      //         name="myGames"
      //         onClick={this.onClick}
      //       >
      //         <i className="fas fa-list-ul" /> My Games
      //       </button>
      //       <button
      //         className="list-group-item list-group-item-action border-0"
      //         name="tradeRequests"
      //         onClick={this.onClick}
      //       >
      //         <i className="fas fa-exchange-alt" /> Trade Requests
      //       </button>
      //       <button
      //         className="list-group-item list-group-item-action border-0"
      //         name="wishlist"
      //         onClick={this.onClick}
      //       >
      //         <i className="far fa-star" /> Wishlist
      //       </button>
      //     </ul>
      //   </div>
      // </div>
    );
  }
}

export default Profile;
