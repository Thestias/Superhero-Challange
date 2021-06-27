import { Form, Button, FormControl } from "react-bootstrap"
import { character_search } from "./utils/search_character";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Loading, isLoading } from '../LoadingComponent/LoadingComponent.js';
import { useState } from "react";
import { useHistory } from "react-router-dom";


function SearchForm() {

    const [loading, setLoading] = useState(false)
    let history = useHistory();

    /*

    Setting Up Formik

    */

    // When submitting the form, also takes in a history hook to redirect
    const onSubmit = values => {
        let found_characters = character_search(values.search)
        found_characters.then(characters_found => {
            if (characters_found !== 'Error 400 something!') {
                setLoading(false)
                history.push({ pathname: '/search', state: { data: characters_found } })


            } else {
                console.log(characters_found)
            }
        })
    }

    // Validating Form Fields
    const validationSchema = yup.object({
        search: yup.string().required('This field is required'),
    })

    const initialValues = { 'search': '' }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    // End Formik
    // TODO: Create a more reusable Button loading!
    return (
        <Form className="d-flex gap-3 ms-auto" onSubmit={formik.handleSubmit}>
            <FormControl size="sm" type="text" placeholder="Search" id="search" name="search" {...formik.getFieldProps('search')} />
            <Button variant="warning" type="submit" onClick={() => setLoading(true)}>{isLoading(loading) ? <Loading /> : 'Search'}</Button>
        </Form>
    )
}

export default SearchForm