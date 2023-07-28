import { Header, Footer, RedCmp, YellowCmp, GreenCmp } from '@/components'
import s from './s.module.scss'

const MyApp = () => {
    return (
        <section
            id='task1'
            className={s.task1}
        >
            <Header className={s.header} />

            <div className={s.leftColumn}>
                <RedCmp className={s.red}>Контент</RedCmp>
                <GreenCmp className={s.green}>Панель</GreenCmp>
            </div>

            <RedCmp className={s.red2}>Контент</RedCmp>

            <YellowCmp className={s.yellow} />

            <GreenCmp className={s.green2}>Панель</GreenCmp>

            <Footer className={s.footer} />
        </section>
    )
}

export default MyApp
