import { createUseStyles } from "react-jss"
import { useInView } from "react-intersection-observer"
import styles from './Hero-styles.js'

const useStyles = createUseStyles(styles)

export default function Hero()
{
    const classes = useStyles()
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        rootMargin: '-30% 0px'
    })

    return (
        <section className={`${classes.container} ${inView ? classes.animate : ''}`} id="home" ref={ref}>
            <div>
                <h1 className={classes.header}>
                    <span className={classes.focus}>Mike</span> is my name. <span className={classes.focus}>Coding</span> is my game.
                </h1>
                <h2 className={classes.header}>
                    Need some web work done?
                </h2>
                <h2 className={classes.header}>
                    Forget the spiders; give <span className={classes.focus}>me</span> a buzz.
                </h2>
                <p className={classes.body}>
                    Hello World. I&apos;m a software engineer and web developer looking to bring you what you&apos;re looking for. Learn a bit about me below and let&apos;s talk!
                </p>
            </div>
        </section>
    )
}
