export default {
    gradientContainer:
    {
        backgroundImage: 'linear-gradient(to right, transparent 15%, var(--white) 15%, var(--white) 85%, transparent 85%)',
        paddingTop: '1px',
        marginTop: '6rem'
    },
    container:
    {
        fontFamily: 'var(--electrolize)',
        fontSize: '1rem',
        color: 'var(--white)',
        backgroundColor: 'var(--off-black)',
        paddingTop: '1.5rem',
        '@media (min-width: 700px)':
        {
            fontSize: '1.25rem',
            paddingTop: '2.5rem'
        }
    },
    link:
    {
        color: 'var(--bright-green)',
        textDecoration: 'none',
        transition: 'color 300ms ease-in-out',
        '&:hover':
        {
            color: 'var(--dark-green)'
        }
    }
}