import { Form, Button, FormControl } from "react-bootstrap"
import { character_search } from "./utils/search_character";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Loading, isLoading } from '../LoadingComponent/LoadingComponent.js';
import { useState } from "react";
import { Redirect, Route } from "react-router-dom";


function SearchForm() {

    const [loading, setLoading] = useState(false)

    /*

    Setting Up Formik

    */

    // When submitting the form, also takes in a history hook to redirect
    const onSubmit = values => {
        let found_characters = character_search(values.search)
        if (found_characters !== 'Error 400 something!') {
            setLoading(false)
            return (
                <Route>
                    <Redirect to={{ pathname: "/search", state: { found_characters } }}></Redirect>
                </Route >
            )
        }
    }

    // Validating Form Fields
    const validationSchema = yup.object({
        search: yup.string().required('This field is required'),
    })

    const formik = useFormik({
        initialValues: { 'search': '' },
        onSubmit,
        validationSchema
    })

    // End Formik
    // TODO: Create a more reusable Button loading!
    return (
        <Form className="d-flex gap-3 ms-auto" onSubmit={formik.handleSubmit}>
            <FormControl size="sm" type="text" placeholder="Search" name="search" {...formik.getFieldProps('search')} />
            <Button variant="warning" onClick={() => setLoading(true)}>{isLoading(loading) ? <Loading /> : 'Search'}</Button>
        </Form>
    )
}

export default SearchForm