import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from "./pricing-box";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings1: [
        {
          title: "Plan Gratuito",
          price: 0,
          duration: "Free",
          features: [
            { title: "Audio", value: "10" },
            { title: "Libros", value: "10" },
            { title: "Videos", value: "---" },
            { title: "DoctorFriends", value: "---" },
          ],
        },
        {
          title: "Plan Standar",
          price: 3,
          duration: "Mes",
          features: [
            { title: "Audio", value: "30" },
            { title: "Libros", value: "30" },
            { title: "Videos", value: "10" },
            { title: "DoctorFriends", value: "1 Sesión" },
          ],
        },
        {
          title: "Plan Premium",
          price: 5,
          duration: "Mes",
          features: [
            { title: "Audio", value: "Ilimitados" },
            { title: "Libros", value: "Ilimitados" },
            { title: "Videos", value: "Ilimitados" },
            { title: "DoctorFriends", value: "10 Sesiones" },
          ],
        },
        {
            title: "Plan Premium +",
            price: 10,
            duration: "Mes",
            features: [
              { title: "Audio", value: "Ilimitados" },
              { title: "Libros", value: "Ilimitados" },
              { title: "Videos", value: "Ilimitados" },
              { title: "DoctorFriends", value: "ilimitadas" },
            ],
          },
      ],
      pricings2: [
        {
          title: "Plan Gratuito",
          price: 0,
          duration: "Free",
          features: [
            { title: "Audio", value: "10" },
            { title: "Libros", value: "10" },
          ],
        },
        {
          title: "Plan Standar",
          price: 3 * 12,
          duration: "Anual",
          features: [
            { title: "Audio", value: "30" },
            { title: "Libros", value: "30" },
            { title: "Videos", value: "10" },
            { title: "DoctorFriends", value: "1 Sesión" },
          ],
        },
        {
          title: "Plan Premium",
          price: 5*12,
          duration: "Anual",
          features: [
            { title: "Audio", value: "Ilimitados" },
            { title: "Libros", value: "Ilimitados" },
            { title: "Videos", value: "Ilimitados" },
            { title: "DoctorFriends", value: "10 Sesiones" },
          ],
        },
        {
            title: "Plan Premium +",
            price: 10*12,
            duration: "Anual",
            features: [
              { title: "Audio", value: "Ilimitados" },
              { title: "Libros", value: "Ilimitados" },
              { title: "Videos", value: "Ilimitados" },
              { title: "DoctorFriends", value: "ilimitadas" },
            ],
          },
      ],
      activeTab: "1",
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="pricing">
          <Container>
            <SectionTitle
              subtitle="Precio"
              title="Variedad de precios disponibles"
              desc="Con la intension de llegar a muchas personas y ayudar a los mas necesitados tenemos una amplia variedad de planes para satisfacer sus necesidades."
            />

            <Row>
              <Col lg={12}>
                <div className="text-center mb-4">
                  <Nav pills className="pricing-nav-tabs mb-4">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "1",
                        })}
                        onClick={() => {
                          this.toggleTab("1");
                        }}
                      >
                        Mensual
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "2",
                        })}
                        onClick={() => {
                          this.toggleTab("2");
                        }}
                      >
                        Anual
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
            </Row>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <PricingBox pricings={this.state.pricings1} />
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <PricingBox pricings={this.state.pricings2} />
                </Row>
              </TabPane>
            </TabContent>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
