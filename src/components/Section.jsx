import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    title:
    {
        fontFamily: 'var(--dosis-extra-light)',
        fontSize: '3rem',
        color: 'var(--white)',
        textDecoration: 'underline',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginTop: '4rem',
        marginBottom: '4rem',
    }
})

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
