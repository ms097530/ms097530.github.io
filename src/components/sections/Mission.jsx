import { createUseStyles } from 'react-jss'
import { useInView } from 'react-intersection-observer'
import styles from './Mission-styles'

const useStyles = createUseStyles(styles)

export default function Mission()
{
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px'
    })

    const classes = useStyles()
    return (
        <div className={`${classes.container} ${inView ? classes.animate : ''}`} ref={ref}>
            <div className={classes.textContainer}>
                <p className={classes.text}>
                    I guarantee that you&apos;ll be blown away by the work I provide. I&apos;m a team player who isn&apos;t afraid of leading the charge or going solo.
                </p>
                <p className={classes.text}>
                    As such, I give results that speak for themselves. Frontend or backend, I offer the solutions that you need for your projects.
                </p>
            </div>
            <div className={classes.imgContainer}>
                <img className={classes.img} src="/img/headshot-small-nobg.png" alt="my headshot" />
            </div>
        </div>
    )
}
