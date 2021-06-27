import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useFormik } from 'formik';
import { login } from './utils/authenticate.js'
import Loading from '../LoadingComponent/LoadingComponent.js';
import { Form, Button, Row } from 'react-bootstrap';
import * as yup from 'yup';

function LoginForm() {

    const history = useHistory()
    const { isLogged, setIsLogged } = useAuth() // Importing the Auth context
    const [loading, setLoading] = useState(false)
    const [LoginErrors, setLoginErrors] = useState(false)

    function isLoading() {
        // Checks if an API call was made, if so then replaces the text in the button with a Loading component
        if (loading === true) { return <Loading /> }
        else { return 'Enviar' }
    }

    /*

    Setting Up Formik

    */

    const initialValues = {
        email: '',
        password: ''
    }

    // When submitting the form, also takes in a history hook to redirect
    const onSubmit = values => {
        let login_status = login(values.email, values.password)
        login_status.then(data => {
            if (data === 'Logged in') {
                setIsLogged(true)
                setLoading(false)
                history.push('/')
            } else {
                setLoading(false)
                setLoginErrors(data)
            }
        })
    }

    // Validating Form Fields
    const validationSchema = yup.object({
        email: yup.string().email('Invalid Email').required('This field is required'),
        password: yup.string().required('This field is required')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    // End Formik


    return (
        <Row className="w-50 mx-auto">
            <Form method="POST" onSubmit={formik.handleSubmit}>

                <Form.Group controlId="formBasicEmail" className="my-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" {...formik.getFieldProps('email')} />
                    {/* Error Handling */}
                    {formik.touched.email && formik.errors.email ? <p className="mt-1 text-danger">{formik.errors.email}</p> : null}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" {...formik.getFieldProps('password')} />
                    {/* Error Handling */}
                    {formik.touched.password && formik.errors.password ? <p className="m-0 mt-1 text-danger">{formik.errors.password}</p> : null}
                </Form.Group>

                <Button className="mt-4" variant="dark" type="submit" onClick={() => setLoading(true)}>{isLoading()}</Button>
                {LoginErrors ? <p className="mt-1 text-danger">{LoginErrors}</p> : null}
            </Form>
        </Row>
    )
}

export default LoginForm