import projectData from '../../data/project-data.js'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    container:
    {
        color: 'var(--white)'
    }
})

export default function Projects()
{
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {
                projectData.map((project, i) =>
                {
                    return (
                        <div key={i}>
                            <h3>{project.title}</h3>
                            <p>{project.summary}</p>
                            <ul>
                                {
                                    project.techUsed.map((tech, j) => <li key={j}>{tech}</li>)
                                }
                            </ul>
                            <ul>
                                <li>{project.github}</li>
                                <li>{project.liveSite}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
