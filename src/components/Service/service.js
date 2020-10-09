import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : "grid", title : "Acceso inmediato ", desc : "To an English person, it will seem like English as skeptical." },
                { icon : "edit", title : "Easy to customize", desc : "If several languages coalesce, the grammar of the language." },
                { icon : "help-circle", title : "Soporte 24/7", desc : "Podrás preguntar cualquier inquietud mediante los canales correspondientes." },
                { icon : "layers", title : "Diseño Intuitivo y Creativo", desc : "Elaborado para la mejor comprensión del sistema." },
                { icon : "shield", title : "Seguridad y Transparencia", desc : "" },
                { icon : "tablet", title : "Ios/Android", desc : "Facilidad de acceso desde la comodidad de tu Smartphone." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
        <section className="section bg-light" id="services">
            <Container>
            <SectionTitle
                subtitle="Servicios"
                title="Servicios que proporcionamos"
                desc="Será tan simple como hacer una transferencia bancaria."
            />

                <Row>
                    <ServiceBox services={this.state.services} />
                </Row>
                

                {/* <Row className="mt-4">
                    <Col lg={12}>
                        <div className="text-center">
                            <Link to="#" className="btn btn-success">View more</Link>
                        </div>
                    </Col>
                </Row> */}
                
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Process;