export default {
    container:
    {
        color: 'var(--white)',
        fontFamily: 'var(--dosis-extra-light)',
        textAlign: 'center',
        minHeight: '90vh',
        display: 'grid',
        alignItems: 'center',
        maxWidth: '700px',
        // transition timing for when animate class is added via intersection observer
        '& > div > *':
        {
            transition: 'transform 800ms ease-in-out',
            transform: 'translateX(-150%)',
            '&:nth-child(1)':
            {
                transitionDelay: '250ms'
            },
            '&:nth-child(2)':
            {
                transitionDelay: '500ms'
            },
            '&:nth-child(3)':
            {
                transitionDelay: '750ms'
            },
            '&:nth-child(4)':
            {
                transitionDelay: '1500ms'
            }
        },
        '@media (min-width: 700px)':
        {
            textAlign: 'left'
        }
    },
    header:
    {
        fontSize: '2.5rem',

        marginBottom: '0rem',
        letterSpacing: '-0.04em',
        lineHeight: '2.75rem',
        '@media (min-width: 700px)':
        {
            fontSize: '3rem',
            lineHeight: '3.25rem'
        }
    },
    body:
    {
        fontFamily: 'var(--electrolize)',
        fontSize: '1.25rem',
        color: 'var(--light-blue)',
        marginTop: '3.5rem',
        letterSpacing: '0.03em',
        lineHeight: '3rem',
        '@media (min-width: 700px)':
        {
            fontSize: '1.5rem'
        }
    },
    focus:
    {
        color: 'var(--bright-green)'
    },
    animate:
    {
        '& > div > *':
        {
            transform: 'translateX(0)'
        }
    }
}