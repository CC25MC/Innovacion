import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
// import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : "grid", title : "Acceso Inmediato ", desc : "Consulta tus cuotas, pagos y recibos, de forma rapida." },
                { icon : "edit", title : "Uso Cómodo y Sencillo", desc : "Para brindarte una experiencia comoda y rapida." },
                { icon : "help-circle", title : "Soporte a cualquier hora", desc : "Podrás preguntar cualquier inquietud mediante los canales correspondientes." },
                { icon : "layers", title : "Diseño Intuitivo y Creativo", desc : "Elaborado para la mejor comprensión del sistema." },
                { icon : "shield", title : "Seguridad y Transparencia", desc : "ofreciendo total veracidad en las informaciones consultadas." },
                { icon : "tablet", title : "Multiplataforma", desc : "Facilidad de acceso desde la comodidad de tu Smartphone." },
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
                desc="Automatiza los pagos de condominio mediante nuestros servicios."
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