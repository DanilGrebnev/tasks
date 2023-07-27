'use client'
import { FC, useEffect } from 'react'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { TChangeEvent, IForm } from './type'
import {
    useIsValidInput,
    useIsValidInputDate,
    useIsValidInputStateNumber,
} from '@/lib/hooks/useIsValid'
import { getFromSessionStorage } from '@/lib/fn/getFromSessionStorage'

import s from './s.module.scss'

export const Form: FC<IForm> = ({ onClose }) => {
    //Гос.номер
    const [stateNumber, isValidStateNumber, setStateNumber] =
        useIsValidInputStateNumber(getFromSessionStorage('stateNumber'))
    //Автомобиль
    const [automobile, setAutomobile] = useIsValidInput(
        getFromSessionStorage('automobile')
    )
    //Дата прибытия
    const [arrivalDate, isValidDate, setData] = useIsValidInputDate(
        getFromSessionStorage('arrivalDate')
    )
    //Серия паспорта
    const [passportSeries, setpassportSeries] = useIsValidInput(
        getFromSessionStorage('passportSeries')
    )
    //Номер паспорта
    const [passportNumber, setPassportNumber] = useIsValidInput(
        getFromSessionStorage('passportNumber')
    )
    //ФИО
    const [fullName, setFullName] = useIsValidInput(
        getFromSessionStorage('fullName')
    )
    //Кем выдан
    const [issuedBy, setIssuedBy] = useIsValidInput(
        getFromSessionStorage('issuedBy')
    )
    //Когда выдан
    const [whenIssued, isValidWhenIssued, setWhenIssued] = useIsValidInputDate(
        getFromSessionStorage('whenIssued')
    )

    const data = {
        stateNumber,
        automobile,
        arrivalDate,
        fullName,
        passportSeries,
        passportNumber,
        issuedBy,
        whenIssued,
    }

    useEffect(() => {
        const entris = [...Object.entries(data)]

        entris.forEach(([key, value]) => {
            sessionStorage.setItem(key, value)
        })
    }, [
        stateNumber,
        arrivalDate,
        automobile,
        passportSeries,
        passportNumber,
        fullName,
        issuedBy,
        whenIssued,
    ])

    const closeForm = () => {
        onClose && onClose(false)
    }

    return (
        <form
            className={s.form}
            onSubmit={e => {
                e.preventDefault()
                console.log('Сработала отправка формы')
            }}
        >
            <div
                className={s.closeBtn}
                onClick={closeForm}
            >
                &times;
            </div>
            <h2>Транспортные средства и водители</h2>

            <Input
                required
                value={stateNumber}
                onChange={setStateNumber}
                name='stateNumber'
                header='Гос-номер'
                placeholder='Укажите гос-номер'
                maxLength={9}
                autoFocus
            />

            <Input
                required
                value={automobile}
                name='automobile'
                onChange={setAutomobile}
                header='Транспортное средство'
                placeholder='Транспортное средство'
            />

            <Input
                required
                name='arrivalDate'
                header='Ориентировочная дата прибытия к покупателю'
                placeholder='Дата *'
                value={arrivalDate}
                maxLength={10}
                onChange={setData}
            />

            <h3>Данные о водителе</h3>

            <Input
                required
                value={fullName}
                header='ФИО'
                name='fullName'
                onChange={setFullName}
                placeholder='Укажите ФИО водителя'
            />

            <div className={s.passport}>
                <label htmlFor='passport-input'>
                    <h4>Паспортные данные</h4>
                </label>
                <Input
                    required
                    name='passportSeries'
                    placeholder='серия'
                    maxLength={4}
                    type='tel'
                    id='passport-input'
                    value={passportSeries}
                    onChange={(e: TChangeEvent) =>
                        setpassportSeries(e, new RegExp('\\d', 'g'))
                    }
                />
                <Input
                    required
                    name='passportNumber'
                    placeholder='номер'
                    type='tel'
                    maxLength={6}
                    value={passportNumber}
                    onChange={(e: TChangeEvent) =>
                        setPassportNumber(e, new RegExp('\\d', 'g'))
                    }
                />
            </div>

            <Input
                required
                value={issuedBy}
                name='issuedBy'
                header='Кем выдан'
                aria-required
                placeholder='Кем выдан'
                onChange={setIssuedBy}
            />
            <Input
                required
                value={whenIssued}
                name='whenIssued'
                header='Когда выдан'
                placeholder='Когда выдан'
                onChange={setWhenIssued}
            />
            <div className={s['btn-group']}>
                <Button btnType='full'>Отправить</Button>
                <Button
                    onClick={closeForm}
                    btnType='transparent'
                >
                    Отменить
                </Button>
            </div>
        </form>
    )
}
