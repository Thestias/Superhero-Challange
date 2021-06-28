import { Container, Row } from "react-bootstrap"
import CharacterCard from "../CharacterCard/CharacterCard"


function Home() {
    let team = JSON.parse(window.localStorage.getItem('team'))

    if (team === null || team.lenght === 0) {
        return <h1 className="text-center mt-5 bg-warning rounded p-3">No tenes un equipo!</h1>
    } else {
        return (
            <Container className="d-flex h-100 mt-4" >
                <Row>
                    {Object.keys(team['characters']).map((key, index) => {
                        return <CharacterCard key={index} CharacterData={team['characters'][key]} />
                    })}
                </Row>
            </Container >
        )
    }
}

export default Home