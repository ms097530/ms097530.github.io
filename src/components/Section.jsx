import { createUseStyles } from "react-jss"
import styles from './Section-styles'

const useStyles = createUseStyles(styles)

export default function Section({ title, children })
{
    const classes = useStyles()
    const sectionName = title.toLowerCase().slice(3)
    return (
        <div className={`Section__${sectionName}`} id={`${sectionName}`}>
            {/* wrap title in div so can use pseudo element on wrapper and cover line behind text */}
            <div className={classes.container}>
                <h2 className={classes.title}>
                    {title}
                </h2>
            </div>
            {
                children
            }
        </div>
    )
}
