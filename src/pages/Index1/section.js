import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col
} from "reactstrap";


//Import Images
import homeImg from "../../assets/images/home-img.png";
import ModalSection from '../../components/common/ModalSection';

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }
    callModal = () => {
        this.refs.child.openModal();
    }
    render() {
        return (
            <React.Fragment>
                <section className="hero-section" id="home">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="hero-wrapper mb-4">
                                    <p className="font-16 text-uppercase">Registrate ya !</p>
                                    <h1 className="hero-title mb-4">Descubre los servicios que están a <span className="text-primary">tu disposición </span></h1>

                                    <p>Desde nuestro sitio podrás verificar toda la información que requieras, en cualquier momento, desde tu dispositivo movil o de escritorio.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary  mr-4">Registrate</Link>
                                        <Link onClick={this.callModal} to="#" className="video-play-icon text-success"><i className="mdi mdi-play play-icon-circle play play-iconbar"></i> APRENDE MÁS</Link>
                                    </div>

                                    
                                </div>

                            </Col>

                            <Col lg={6} sm={8}>
                                <div className="home-img mt-5 mt-lg-0">
                                    <img src={homeImg} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                         {/* Render ModalSection Component for Modal */}
                         <ModalSection ref="child" channel='vimeo' videoId='265045525' />
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;