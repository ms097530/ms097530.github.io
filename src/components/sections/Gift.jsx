import { useEffect, useState } from 'react'
import axios from 'axios'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    container:
    {
        color: 'var(--white)'
    }
})

export default function Gift()
{
    const [joke, setJoke] = useState(null)
    const classes = useStyles()

    async function getJoke()
    {
        const res = await axios.get('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json',
                "User-Agent": 'Michael Schultz portfolio'
            }
        })
        // console.log(res)
        setJoke(res.data.joke)
    }

    useEffect(() =>
    {
        getJoke()
    }, [])

    const handleClick = async () =>
    {
        await getJoke()
    }

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
