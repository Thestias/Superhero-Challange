import { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap'

function AddtoTeam(props) {

    // For the Modals
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let data = props.data;
    let [isdisable, setIsDisable] = useState({ 'all': false, 'heroes': false, 'villans': false })

    function checkTeamSize(orientation) {
        // Checks if as reached the maximmum ammount of characters or villans or heroes
        // TODO: Should inabilidate "add character" if already 6 members when appears
        let team = JSON.parse(window.localStorage.getItem('team'))

        if (orientation === 'heroes' && team.heroes_lenght === 3) {
            setIsDisable({ ...isdisable, 'heroes': true })
            return false
        } else if (orientation === 'villans' && team.villans_lenght === 3) {
            setIsDisable({ ...isdisable, 'villans': true })
            return false
        } else if (team.lenght === 6) {
            setIsDisable({ 'all': true, 'heroes': true, 'villans': true })
            return false
        } else if (!orientation) {
            console.log('1')
            let updateDisabled = {}
            if (team.heroes_lenght === 3) { updateDisabled['heroes'] = true }
            if (team.villans_lenght === 3) { updateDisabled['villans'] = true }
            if (team.lenght === 6) { updateDisabled['all'] = true }

            setIsDisable({ ...isdisable, ...updateDisabled })
        }
    }



    function removeTeamMember() {
        // Deletes the key from the localStorage
        checkTeamSize()
        let team = JSON.parse(window.localStorage.getItem('team'))
        team.lenght -= 1
        if (team.characters[props.data.id].orientation === 'villans') { team.villans_lenght -= 1 }
        else { team.heroes_lenght -= 1 }
        delete team.characters[props.data.id]
        window.localStorage.setItem('team', JSON.stringify(team))
    }

    function addTeamMember(orientation) {
        // Adds a character to localStorage
        if (checkTeamSize(orientation) === false) { return }
        let team = JSON.parse(window.localStorage.getItem('team'))
        team.lenght += 1
        if (orientation === 'villans') { team.villans_lenght += 1 }
        if (orientation === 'heroes') { team.heroes_lenght += 1 }
        team.characters[props.data.id] = {
            orientation,
            id: props.data.id,
            name: props.data.name,
            image: {
                url: props.data.image.url,
            },
            appearance: {
                weight: props.data.appearance.weight,
                height: props.data.appearance.height,
                'eye-color': props.data.appearance['eye-color'],
                'hair-color': props.data.appearance['hair-color'],
            },
            work: { base: props.data.work.base }
        }

        window.localStorage.setItem('team', JSON.stringify(team))
    }

    function IsMember() {
        let team = JSON.parse(window.localStorage.getItem('team'))

        if (team.characters[data.id]) {
            if (team.characters[data.id].id == data.id) {
                return true
            }
        } else { return false }
    }

    function CheckTeamMembers() {

        if (IsMember()) {
            return (
                <Button variant="danger" onClick={() => removeTeamMember()}>Remove Character</Button>
            )
        } else {
            return (
                <div>
                    <Button disabled={isdisable['all']} variant="primary" onClick={() => { checkTeamSize(); handleShow() }}>Add Character</Button>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        size="lg"
                    >
                        <Modal.Header>Add Character</Modal.Header>
                        <Modal.Body className="d-flex gap-3 align-self-center">
                            <Button disabled={isdisable['heroes']} variant="warning" onClick={() => { addTeamMember('heroes'); handleClose() }}>Como heroe</Button>
                            <Button disabled={isdisable['villans']} variant="warning" onClick={() => { addTeamMember('villans'); handleClose() }}>Como villano</Button>
                        </Modal.Body>

                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal >
                </div >
            )
        }
    }

    return CheckTeamMembers()
}


export default AddtoTeam