import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    text:
    {
        color: 'var(--off-white)',
        fontFamily: 'var(--electrolize)',
        fontSize: '1.25rem',
        letterSpacing: '0.03rem',
        lineHeight: '1.5rem'
    }
})

export default function Mission()
{
    const classes = useStyles()
    return (
        <div>
            <p className={classes.text}>
                I guarantee that you&apos;ll be blown away by the work I provide. I&apos;m a team player who isn&apos;t afraid of leading the charge or going solo.
            </p>
            <p className={classes.text}>
                As such, I give results that speak for themselves. Frontend or backend, I offer the solutions that you need for your projects.
            </p>
            <div className={classes.imgContainer}>
                <img className={classes.img} src="#" alt="my headshot" />
            </div>
        </div>
    )
}
