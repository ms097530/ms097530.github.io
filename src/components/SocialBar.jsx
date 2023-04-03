import { ReactSVG } from "react-svg"
import { createUseStyles } from "react-jss"
import styles from './SocialBar-styles'

const useStyles = createUseStyles(styles)

export default function SocialBar()
{
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <ul className={classes.links}>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/michael-schultz-/">
                        <ReactSVG src="/img/linkedin.svg" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/ms097530">
                        <ReactSVG src="/img/github.svg" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://codepen.io/mseagle">
                        <ReactSVG src="/img/codepen.svg" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
