import { useEffect, useState } from 'react'
import axios from 'axios'
import { createUseStyles } from 'react-jss'
import _debounce from 'lodash/debounce';
import styles from './Gift-styles'

const useStyles = createUseStyles(styles)

export default function Gift()
{
    const [joke, setJoke] = useState('A dad joke sure would be nice right about now...')
    const classes = useStyles()

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

    const handleClick = _debounce(getJoke, 1000)

    return (
        <div className={classes.container}>
            <h2>Bad jokes are the spice of life, or so they say. Don&apos;t ask who “they” is...</h2>
            <h2>Here’s a dad joke!</h2>
            <p>{joke}</p>
            <button onClick={handleClick}>
                GET JOKE
            </button>
        </div>
    )
}
