import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import homeImg from "../../assets/images/doctor-img.png";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }
  callModal = () => {
    this.refs.child.openModal();
  };
  render() {
    return (
      <React.Fragment>
        <section className="hero-section" id="home">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="hero-wrapper mb-4">
                  <p className="font-16 text-uppercase">Registrate ya !</p>
                  <h1 className="hero-title mb-4">
                    Descubre los servicios que están a{" "}
                    <span className="text-primary">tu disposición </span>
                  </h1>

                  <p>
                    Friend Doctor, es un apoyo inmediato a la salud mental, un
                    equipo donde todos están dispuestos a brindar una mano
                    amiga. ❤
                  </p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary  mr-4">
                      Registrate
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={6} sm={8}>
                <div className="home-img mt-5 mt-lg-0">
                  <img
                    src={homeImg}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
            {/* Render ModalSection Component for Modal */}
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
