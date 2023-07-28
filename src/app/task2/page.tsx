'use client'
import { useState } from 'react'
import { Header } from '@/components'
import { Button } from '@/components'
import { Portal } from '@/smart/Portal'
import { Form } from '@/components'

const Task2 = () => {
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
                    <Form toggleModal={setToggleModal} />
                </Portal>
            )}
        </section>
    )
}

export default Task2
