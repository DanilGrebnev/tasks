import axios from 'axios'

export const fetchData = async (data: any) => {
    try {
        const res = await Promise.resolve({ status: 'OK' })

        console.log(res)

        alert('Отправка успешна')
    } catch (err) {
        console.log(err)
        alert('Ошибка отправки')
    }
}
