import { useState } from "react"
import { Container, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import CharacterCard from "../CharacterCard/CharacterCard"


function SearchPage() {
    // TODO: Here should be only when the API Call was successfull!!
    // TODO: Fails when entering without searching!
    const [isEmpty, setIsEmpty] = useState(false)
    const location = useLocation().state.data.results // Getting the data when redirected!

    const checkEmpty = () => {
        if (location.lenght === 0) {
            setIsEmpty(true)
        }
    }

    return (
        <Container className="d-flex h-100 mt-4">
            {checkEmpty()}
            {isEmpty ? <h1 className="h1">There are no characters with that name! </h1> :
                <Row>
                    {location.map((Character) => {
                        return <CharacterCard CharacterData={Character} />
                    })}
                </Row>
            }
        </Container>
    )
}

export default SearchPage