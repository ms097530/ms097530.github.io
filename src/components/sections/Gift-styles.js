export default {
    container:
    {
        color: 'var(--white)',
        marginBottom: '3rem',
        padding: '2rem 3rem',
        '@media (min-width: 700px)':
        {

            border: '2px solid var(--off-white)',
            borderRadius: '45px'
        }
    },
    electrolizeBody:
    {
        fontFamily: 'var(--electrolize)',
        fontSize: '1.25rem',
        letterSpacing: '0.03em',
        lineHeight: '2.0rem'
    },
    heading:
    {
        fontFamily: 'var(--dosis-extra-light)',
        fontSize: '2rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        lineHeight: '3rem'
    },
    joke:
    {
        color: 'var(--light-blue)',
        marginTop: '2rem',
        marginBottom: '3rem'
    },
    button:
    {
        fontSize: '1.25rem',
        fontFamily: 'var(--dosis-semibold)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '1rem 2rem',
        color: 'var(--light-blue-full)',
        border: '2px solid var(--light-blue-full)',
        backgroundColor: 'transparent',
        transition: 'color 300ms ease-in-out, background-color 300ms ease-in-out, border 300ms ease-in-out',
        '&:hover':
        {
            color: 'var(--white)',
            backgroundColor: 'var(--dark-blue)',
            border: '2px solid var(--dark-blue)'
        },
        '&:active':
        {
            transform: 'translateY(0.5rem)'
        }
    }
}