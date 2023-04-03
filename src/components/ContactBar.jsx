import styles from './ContactBar-styles'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(styles)

export default function ContactBar()
{
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <a className={classes.email} href="mailto:mikewschultz9029@gmail.com">
                <p>
                    mikewschultz9029@gmail.com
                </p>
            </a>
        </div>
    )
}
