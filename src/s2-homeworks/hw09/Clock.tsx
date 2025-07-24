import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'
import {log} from "node:util";

function Clock() {
    let [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)
    const start = () => {
        timerId = +setInterval(() => {
            setDisabled(true)
            setDate(new Date(restoreState('hw9-date', Date.now())))
        }, 1000)
        setTimerId(timerId)
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        setDisabled(false)
        clearInterval(timerId)// пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    }

    const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => { // пишут студенты // показать дату если наведена мышка
        if (e.target) {
            setShow(true)
        }
    }
    const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => { // пишут студенты // спрятать дату если мышка не наведена
        if (e.target) {
            setShow(false)
        }
    }
    let formatter = new Intl.DateTimeFormat("ru", {
        // day: "numeric",
        // month: "numeric",
        // year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })
    const stringTime = formatter.format(date) || <br/>
    let formatter1 = new Intl.DateTimeFormat("ru", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        // hour: "numeric",
        // minute: "numeric",
        // second: "numeric"
    })// часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = formatter1.format(date) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    let formatter2 = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
    })
    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = formatter2.format(date) || <br/>
    let formatter3 = new Intl.DateTimeFormat('en-US', {
        month: 'long'
    })// пишут студенты
    const stringMonth = formatter3.format(date) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={disabled} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!disabled} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
