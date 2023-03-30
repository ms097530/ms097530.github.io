import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    myTest: {
        color: 'var(--light-blue)'
    }
})

export default function Hero()
{
    const classes = useStyles()
    return (
        <div className={classes.myTest} id="home">Hero</div>
    )
}
