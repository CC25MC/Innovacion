import React, { Component } from "react";
import { Container, Row } from "reactstrap";
// import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: "grid",
          title: "Acceso Inmediato ",
          desc: "Acceso inmediato a una gran cantidad de libros y audiolibros.",
        },
        {
          icon: "edit",
          title: "Uso Cómodo y Sencillo",
          desc: "Para brindarte una experiencia comoda y rapida.",
        },
        {
          icon: "help-circle",
          title: "Soporte a cualquier hora",
          desc:
            "Donde podras preguntar cualquier duda o inquietud, no estaras solo!",
        },
        {
          icon: "layers",
          title: "Diseño Intuitivo y Creativo",
          desc: "Elaborado para la mejor comprensión del sistema.",
        },
        {
          icon: "shield",
          title: "Seguridad y Transparencia",
          desc: "ofreciendo la confianza y veracidad que te mereces",
        },
        {
          icon: "tablet",
          title: "Multiplataforma",
          desc: "Facilidad de acceso desde la comodidad de tu Smartphone.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            <SectionTitle
              subtitle="Servicios"
              title="Servicios que proporcionamos"
              desc="Ofrecemos a nuestros usuarios la posibilidad de afrontar y superar situaciones de vida difíciles mediante nuestros servicios."
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
