import {Field, Form, Formik, FormikHelpers} from 'formik'
import React from 'react'
import s from './SearchingFrom.module.css'
import {useDispatch} from 'react-redux'
import {actions} from '../../redux/searchingForm-reducer'

interface Values {
    titleOfTheBook: string;
}

const SearchingFrom: React.FC = () => {

    const dispatch = useDispatch()

    const sendTitleOfTheBook = (titleOfTheBook: string) => {
        dispatch(actions.setTitleOfTheBook(titleOfTheBook))
    }

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
                    sendTitleOfTheBook(values.titleOfTheBook)
                    setSubmitting(false)
                }, 500)
            }}
        >
            <Form>
                <div className={s.searchFormBlockWithButton}>
                    <div className={s.searchingFormBlock}>
                        <Field className={s.searchingForm} id='titleOfTheBook' name='titleOfTheBook'
                               placeholder='Title of the book'/>
                    </div>
                    <div>
                        <button type='submit' className={`${s.searchingFormBtn} ${s.searchingFormBtnText}`}>Search
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    </div>
}

export default SearchingFrom