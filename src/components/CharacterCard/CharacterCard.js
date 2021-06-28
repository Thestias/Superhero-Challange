import { useState } from "react";
import { Card, Col, Button, Modal, Container, Row, Image } from "react-bootstrap"
import AddtoTeam from '../CreateTeam/CreateTeam'

function CharacterCard(props) {

    const [show, setShow] = useState(false);
    const CharacterData = props.CharacterData;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col className="mw-25">
            < Card className="mb-4 shadow mb-5 bg-body rounded text-white" style={{ "max-width": "300px" }}>
                <Card.Title className="bg-warning text-center mb-0 p-2 h2">{CharacterData.name}</Card.Title>
                <Card.Img src={CharacterData.image.url} alt={CharacterData.name + '-img'} />
                <Card.Header className="bg-dark text-center h5 h-100 mb-0 d-flex justify-content-around">
                    <AddtoTeam data={CharacterData} />
                    <Button variant="primary" onClick={handleShow}>Info</Button>
                </Card.Header>
            </Card >
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header className="bg-warning">
                    <Modal.Title>{CharacterData.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body className="show-grid bg-dark text-white">
                    <Container>
                        <Row>
                            <Col xs={12} md={6}>
                                <Image style={{ "max-height": "450px" }} src={CharacterData.image.url} alt={CharacterData.name + '-img'} rounded />
                            </Col>
                            <Col xs={6} md={6}>
                                <p>{'Peso: ' + CharacterData.appearance.weight[1] + ' / ' + CharacterData.appearance.weight[0]}</p>
                                <p>{'Altura: ' + CharacterData.appearance.height[1] + ' / ' + CharacterData.appearance.height[0]}</p>
                                <p>{'Color de ojos: ' + CharacterData.appearance['eye-color']}</p>
                                <p>{'Color de pelo: ' + CharacterData.appearance['hair-color']}</p>
                                <p>{'Base: ' + CharacterData.work.base}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

                <Button variant="warning" onClick={handleClose}>
                    Close
                </Button>
            </Modal>
        </Col >
    )
}

export default CharacterCard