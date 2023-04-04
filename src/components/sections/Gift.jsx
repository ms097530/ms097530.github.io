import { useEffect, useState } from 'react'
import axios from 'axios'
import { createUseStyles } from 'react-jss'
import _debounce from 'lodash/debounce';
import { useInView } from 'react-intersection-observer';
import styles from './Gift-styles'

const useStyles = createUseStyles(styles)

export default function Gift()
{
    const [joke, setJoke] = useState('A dad joke sure would be nice right about now...')
    const classes = useStyles()
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px'
    })

    async function getJoke()
    {
        try
        {
            const res = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json',
                    "User-Agent": 'Michael Schultz portfolio'
                }
            })
            setJoke(res.data.joke)
        }
        catch (e)
        {
            console.log(e.message)
        }
    }

    useEffect(() =>
    {
        getJoke()
    }, [])

    const handleClick = _debounce(getJoke, 250)

    return (
        <div className={`${classes.container} ${inView ? classes.animate : ''}`} ref={ref}>
            <h2 className={classes.heading}>
                Bad jokes are the spice of life, or so they say.
            </h2>
            <h2 className={classes.heading}>
                Don&apos;t ask who “they” is...
            </h2>
            <h2 className={classes.heading}>
                Here’s a dad joke!
            </h2>
            <p className={`${classes.joke} ${classes.electrolizeBody}`}>{joke}</p>
            <button className={classes.button} onClick={handleClick}>
                GET NEW JOKE
            </button>
        </div>
    )
}
