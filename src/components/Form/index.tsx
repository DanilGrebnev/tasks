'use client'
import { FC, FormEvent, useEffect, useMemo } from 'react'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { TChangeEvent, IForm } from './type'
import {
    useIsValidInput,
    useInputDateWithMask,
    useInputStateNumberWithMask,
} from '@/lib/hooks/useInput'
import { getFromSessionStorage } from '@/lib/fn/getFromSessionStorage'

import { fetchData } from './fetchData'

import axios from 'axios'

import s from './s.module.scss'
import { CloseBtn } from './components/CloseBtn'

const regExpStateNumber = '\\D\\d{3}\\D{2}\\d{3}'
const regExpDate = '\\d{2}\\.\\d{2}\\.\\d{4}'

export const Form: FC<IForm> = ({ toggleModal }) => {
    //Гос.номер
    const [stateNumber, setStateNumber] = useInputStateNumberWithMask(
        getFromSessionStorage('stateNumber')
    )
    //Автомобиль
    const [automobile, setAutomobile] = useIsValidInput(
        getFromSessionStorage('automobile')
    )
    //Дата прибытия
    const [arrivalDate, setData] = useIsValidInput(
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
    const [whenIssued, setWhenIssued] = useInputDateWithMask(
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

    const dependencies = [
        stateNumber,
        arrivalDate,
        automobile,
        passportSeries,
        passportNumber,
        fullName,
        issuedBy,
        whenIssued,
    ]

    useEffect(() => {
        Object.entries(data).forEach(([key, value]) => {
            sessionStorage.setItem(key, value)
        })
    }, dependencies)

    const closeForm = () => {
        toggleModal && toggleModal(false)
    }

    return (
        <form
            className={s.form}
            onSubmit={e => {
                e.preventDefault()
                fetchData(data)
            }}
        >
            <CloseBtn closeForm={closeForm} />
            <h2>Транспортные средства и водители</h2>
            <Input
                required
                autoFocus
                maxLength={9}
                minLength={9}
                name='stateNumber'
                header='Гос-номер'
                value={stateNumber}
                onChange={setStateNumber}
                pattern={regExpStateNumber}
                placeholder='Укажите гос-номер'
            />
            <Input
                required
                name='automobile'
                value={automobile}
                onChange={setAutomobile}
                header='Транспортное средство'
                placeholder='Транспортное средство'
                upperCase
            />
            <Input
                required
                name='arrivalDate'
                header='Ориентировочная дата прибытия к покупателю'
                value={arrivalDate}
                onChange={(e: any) => {
                    setData(e)
                    console.log(arrivalDate)
                }}
                Placeholder='Дата *'
                type='date'
            />
            <h3>Данные о водителе</h3>
            <Input
                required
                name='fullName'
                header='ФИО'
                value={fullName}
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
                    maxLength={4}
                    minLength={4}
                    id='passport-input'
                    type='tel'
                    value={passportSeries}
                    onChange={(e: TChangeEvent) => {
                        setpassportSeries(e, new RegExp('\\d', 'g'))
                    }}
                    placeholder='серия'
                />
                <Input
                    required
                    name='passportNumber'
                    placeholder='номер'
                    type='tel'
                    maxLength={6}
                    minLength={6}
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
                maxLength={10}
                minLength={10}
                pattern={regExpDate}
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
