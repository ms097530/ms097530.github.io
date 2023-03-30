import { createUseStyles } from "react-jss"

import ContactBar from "./ContactBar"
import SocialBar from "./SocialBar"

const useStyles = createUseStyles({
    container:
    {
        fontFamily: 'var(--electrolize)',
        fontSize: '1rem',
        color: 'var(--white)',
        borderTop: '1px solid var(--white)',
        paddingTop: '1.5rem'
    },
    link:
    {
        color: 'var(--bright-green)'
    }
})

export default function Footer()
{
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <p>Built and designed by Michael Schultz</p>
            <ContactBar />
            <SocialBar />
            <p>Icons by <a className={classes.link} href="https://icons8.com">Icons8</a></p>
        </div>
    )
}
