import { createUseStyles } from "react-jss"

import ContactBar from "./ContactBar"
import SocialBar from "./SocialBar"
import styles from './Footer-styles'

const useStyles = createUseStyles(styles)

export default function Footer()
{
    const classes = useStyles()
    return (
        <div className={classes.gradientContainer}>
            <div className={classes.container}>
                <p>Built and designed by Michael Schultz</p>
                <ContactBar />
                <SocialBar />
                <p>Icons by <a className={classes.link} href="https://icons8.com">Icons8</a></p>
            </div>
        </div>
    )
}
