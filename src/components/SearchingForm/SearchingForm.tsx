import {Field, Form, Formik, FormikHelpers} from 'formik'
import React from 'react'

interface Values {
    titleOfTheBook: string;
}

const SearchingFrom: React.FC = () => {
    return <div>
        <Formik
            initialValues={{
                titleOfTheBook: '',

            }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                }, 500)
            }}
        >
            <Form>
                <label htmlFor='titleOfTheBook'></label>
                <Field id='titleOfTheBook' name='titleOfTheBook' placeholder='Название книги'/>
                <button type='submit'>Найти</button>
            </Form>
        </Formik>
    </div>
}

export default SearchingFrom