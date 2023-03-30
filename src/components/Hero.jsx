import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    container:
    {
        color: 'var(--white)',
        fontFamily: 'var(--dosis-extra-light)',
        textAlign: 'center'
    },
    header:
    {
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        letterSpacing: '-0.04rem',
        lineHeight: '3.25rem'
    },
    body:
    {
        fontFamily: 'var(--electrolize)',
        fontSize: '1.5rem',
        color: 'var(--light-blue)',
        marginTop: '3.5rem',
        letterSpacing: '0.03rem',
        lineHeight: '3rem'
    },
    focus:
    {
        color: 'var(--bright-green)'
    }
})

export default function Hero()
{
    const classes = useStyles()
    return (
        <section className={classes.container} id="home">
            <h1 className={classes.header}>
                <span className={classes.focus}>Mike</span> is my name. <span className={classes.focus}>Coding</span> is my game.
            </h1>
            <h2 className={classes.header}>
                Need some web work done? Forget the spiders; give <span className={classes.focus}>me</span> a buzz.
            </h2>
            <p className={classes.body}>
                Hello World. I&apos;m a software engineer and web developer looking to bring you what you&apos;re looking for. Learn a bit about me below and let&apos;s talk!
            </p>
        </section>
    )
}
