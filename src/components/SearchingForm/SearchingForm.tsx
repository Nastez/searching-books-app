import {Field, Form, Formik} from 'formik'
import React from 'react'
import s from './SearchingFrom.module.css'
import {useDispatch} from 'react-redux'
import {actions} from '../../redux/searchingForm-reducer'

type Values = {
    titleOfTheBook: string;
}

const SearchingFrom: React.FC = () => {

    const dispatch = useDispatch()

    const sendTitleOfTheBook = (titleOfTheBook: string) => {
        dispatch(actions.setTitleOfTheBook(titleOfTheBook))
    }

    let delayTimer: NodeJS.Timeout

    const doSearchOnCLick = (value: string) => {
        clearTimeout(delayTimer)
        sendTitleOfTheBook(value)
    }

    const doSearch = (values: string) => {
        clearTimeout(delayTimer)
        delayTimer = setTimeout(() => {
            sendTitleOfTheBook(values)
        }, 1000)
    }

    return <div>
        <Formik
            initialValues={{
                titleOfTheBook: ''
            }}
            onSubmit={(
                values: Values,
            ) => {
                doSearch(values.titleOfTheBook)
            }
            }
        >
            {({values, handleChange, handleSubmit}) => {
                return <Form onChangeCapture={e => {
                    handleSubmit()
                }}>
                    <div className={s.searchFormBlockWithButton}>
                        <Field className={s.searchingForm} id='titleOfTheBook' name='titleOfTheBook'
                               placeholder='Title of the book' onChange={handleChange}/>
                        <button type='button' className={`${s.searchingFormBtn} ${s.searchingFormBtnText}`}
                                onClick={() => {
                                    doSearchOnCLick(values.titleOfTheBook)
                                }}>Search
                        </button>
                    </div>
                </Form>
            }}
        </Formik>
    </div>
}

export default SearchingFrom