import { useEffect, useState } from 'react'
import axios from 'axios'
import { createUseStyles } from 'react-jss'
import _debounce from 'lodash/debounce';

const useStyles = createUseStyles({
    container:
    {
        color: 'var(--white)'
    }
})

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
            <h2>Gift</h2>
            <p>{joke}</p>
            <button onClick={handleClick}>
                GET JOKE
            </button>
        </div>
    )
}
