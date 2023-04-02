import projectData from '../../data/project-data.js'
import { createUseStyles, useTheme } from 'react-jss'
import { ReactSVG } from 'react-svg'

const useStyles = createUseStyles({
    container:
    {
        color: 'var(--white)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '3rem'
    },
    electrolizeBody:
    {
        fontFamily: 'var(--electrolize)',
        fontSize: '1.25rem'
    },
    card:
    {
        maxWidth: '500px',
        border: '2px solid var(--dark-green)',
        padding: '1rem 2rem'
    },
    title:
    {
        textTransform: 'uppercase',
        textDecoration: 'underline',
        fontFamily: 'var(--dosis-extra-light)',
        color: 'var(--bright-green)',
        fontSize: '2.5rem',
        marginBottom: '2.5rem'
    },
    summary:
    {
        textAlign: 'left',
        fontFamily: 'var(--electrolize)',
        color: 'var(--white)',
        fontSize: '1.25rem',
        letterSpacing: '0.03rem',
        lineHeight: '2.25rem'
    },
    techUsed:
    {
        color: 'var(--bright-green)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        fontSize: '1rem',
        // fontFamily: 'var(--electrolize)'
    },
    links:
    {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        listStyleType: 'none',
        gap: '2rem',
        '& a':
        {
            color: 'var(--white)',
            fill: 'var(--off-white)',
            transition: 'color 300ms ease-in-out, fill 300ms ease-in-out',
            textDecoration: 'none',
            '&:hover':
            {
                color: 'var(--light-blue)',
                fill: 'var(--light-blue)'
            }
        }
    }
})

export default function Projects()
{
    const theme = useTheme()
    console.log(theme)
    const classes = useStyles({ theme })
    console.log(classes)
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
