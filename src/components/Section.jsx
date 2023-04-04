import { createUseStyles } from "react-jss"
import styles from './Section-styles'

const useStyles = createUseStyles(styles)

export default function Section({ title, children })
{
    const classes = useStyles()
    const sectionName = title.toLowerCase().slice(3)
    return (
        <div className={`Section__${sectionName}`} id={`${sectionName}`}>
            <h2 className={classes.title}>
                {title}
            </h2>
            {
                children
            }
        </div>
    )
}
