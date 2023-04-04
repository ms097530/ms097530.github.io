import projectData from '../../data/project-data.js'
import { createUseStyles } from 'react-jss'
import { ReactSVG } from 'react-svg'
import { useInView } from 'react-intersection-observer'
import styles from './Projects-styles.js'


const useStyles = createUseStyles(styles)

export default function Projects()
{
    const classes = useStyles()
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px'
    })

    return (
        <div className={`${classes.container} ${inView ? classes.animate : ''}`} ref={ref}>
            {
                projectData.map((project, i) =>
                {
                    return (
                        // TODO: consider refactoring into separate component
                        <section className={classes.card} key={i}>
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
                        </section>
                    )
                })
            }
        </div>
    )
}
