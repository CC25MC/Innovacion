import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from './pricing-box';

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pricings1 : [
               { title : "2 Habitaciones", price : 4, duration : "Mes",
                    features : [
                        { title : "Habitaciones", value : "2 hab" },
                        { title : "Baños", value : "1 baño" },
                    ]
                },
                { title : "3 Habitaciones", price : 5, duration : "Mes",
                    features : [
                        { title : "Habitaciones", value : "3 hab" },
                        { title : "Baños", value : "2 baños" },
                    ]
                },
                { title : "Penthouses", price : 9, duration : "Mes",
                    features : [
                        { title : "Habitaciones", value : "4 hab" },
                        { title : "Baños", value : "3 baños" },
                    ]
                },
                { title : "Penthouses Plus", price : 26, duration : "Mes",
                    features : [
                        { title : "Habitaciones", value : "----" },
                        { title : "Baños", value : "----" },
                    ]
                },
            ],
            pricings2 : [
                { title : "2 Habitaciones", price : 4*12, duration : "Anual",
                     features : [
                        { title : "Habitaciones", value : "2 hab" },
                        { title : "Baños", value : "1 baño" },
                     ]
                 },
                 { title : "3 Habitaciones", price : 5*12, duration : "Anual",
                     features : [
                        { title : "Habitaciones", value : "3 hab" },
                        { title : "Baños", value : "2 baños" },
                     ]
                 },
                 { title : "Penthouses", price : 9*12, duration : "Anual",
                     features : [
                        { title : "Habitaciones", value : "4 hab" },
                        { title : "Baños", value : "3 baños" },
                     ]
                 },
                 { title : "Penthouses Plus", price : 26*12, duration : "Anual",
                    features : [
                        { title : "Habitaciones", value : "----" },
                        { title : "Baños", value : "----" },
                    ]
                },
             ],
            activeTab: '1',
        }
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
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
                title="Verifica el precio de condomino de tu apartamento"
                desc="Una manera facil y sencilla de mantenerte al dia con tus pagos."
            />
                

                <Row>
                    <Col lg={12}>
                        <div className="text-center mb-4">
                            <Nav pills className="pricing-nav-tabs mb-4">
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleTab('1'); }} >Mensual</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleTab('2'); }}>Anual</NavLink>
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