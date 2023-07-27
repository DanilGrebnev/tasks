'use client'
import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Header } from '@/components'
import { Form as FormCmp } from '@/components/Form'
import { Button } from '@/components/Button'
import { Portal } from '@/smart/Portal'

const Form = () => {
    const [toggleModal, setToggleModal] = useState(false)

    return (
        <section id='task2'>
            <Header />
            <Button
                onClick={() => setToggleModal(true)}
                btnType='transparent'
            >
                Показать форму
            </Button>

            {toggleModal && (
                <Portal>
                    <FormCmp onClose={setToggleModal} />
                </Portal>
            )}
        </section>
    )
}

export default Form
