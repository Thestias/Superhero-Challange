import { useEffect } from "react"
import { useState } from "react"
import { Container, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import CharacterCard from "../CharacterCard/CharacterCard"


function SearchPage() {
    // TODO: Here should be only when the API Call was successfull!!
    // TODO: Fails when entering without searching!
    let location = useLocation().state.data // Getting the data when redirected!

    function checkEmpty() {
        if (location.response === 'error') {
            return (
                <h1 className="h3 mt-3">There are no characters with that name! </h1>
            )
        } else {
            location = location.results
            return (
                < Container className="d-flex h-100 mt-4" >
                    <Row>
                        {location.map((Character, index) => {
                            return <CharacterCard key={index} CharacterData={Character} />
                        })}
                    </Row>
                </Container >
            )
        }
    }

    return checkEmpty()
}

export default SearchPage