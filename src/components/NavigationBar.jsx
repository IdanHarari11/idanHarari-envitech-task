import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import * as data from "../Legends.json";
import './myStyle.css'

// Navigation Bar;
const NavigationBar = ({ onLegentChange }) => {
    // Get the data from json file
    const legends = data.default;

    // Output to app.js for input to Legent;
    const legendHandle = (LegentId) => {
        onLegentChange(LegentId);
    };

    return (
      <div>
        <Navbar className="app-bar" expand="lg">
          <Container className="app-bar" fluid>
            <Navbar.Brand href="#" value="home">
              <h2>Envitech Task</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ paddingLeft: "1rem" }}
                navbarScroll
              >
                {/* Build the dropdowns by the MonitorType values */}
                {legends.MonitorType.map((mnitorType, ind) => (
                  <NavDropdown
                    key={ind}
                    className="nav-item"
                    style={{ paddingLeft: "3rem" }}
                    title={mnitorType.Name}
                    id="navbarScrollingDropdown"
                  >
                    {/* Build the dropdown items by the Monitor values  */}
                    {legends.Monitor.map(
                      (mnitor, ind) =>
                        // Display only the Monitors that Associated with MonitorType
                        mnitor.MonitorTypeId === mnitorType.Id && (
                          <NavDropdown.Item
                            key={ind}
                            onClick={() => legendHandle(mnitorType.LegentId)}
                          >
                            {mnitor.Name}
                          </NavDropdown.Item>
                        )
                    )}
                  </NavDropdown>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavigationBar
