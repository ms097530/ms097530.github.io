import projectData from '../../data/project-data.js'
import { createUseStyles } from 'react-jss'
import { ReactSVG } from 'react-svg'
import styles from './Projects-styles.js'

const useStyles = createUseStyles(styles)

export default function Projects()
{
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {
                projectData.map((project, i) =>
                {
                    return (
                        <div className={classes.card} key={i}>
                            <h3 className={classes.title}>{project.title}</h3>
                            <p className={classes.summary}>{project.summary}</p>
                            <ul className={`${classes.techUsed} ${classes.electrolizeBody}`}>
                                {
                                    project.techUsed.map((tech, j) => <li key={j}>{tech}</li>)
                                }
                            </ul>
                            <ul className={`${classes.links} ${classes.electrolizeBody}`}>
                                <li>
                                    <a href={project.github}
                                        target='_blank'>
                                        <ReactSVG src='/img/github.svg' />
                                    </a>
                                </li>
                                <li>
                                    <a href={project.liveSite}
                                        target='_blank'>
                                        View
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
