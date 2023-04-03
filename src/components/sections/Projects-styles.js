export default {
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
        fontSize: '1.25rem',
        letterSpacing: '0.03em'
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
        fontSize: '2.25rem',
        marginBottom: '2.5rem',
        letterSpacing: '0.08em',
        '@media (min-width: 700px)':
        {
            fontSize: '2.5rem'
        }
    },
    summary:
    {
        textAlign: 'left',
        fontFamily: 'var(--electrolize)',
        color: 'var(--white)',
        fontSize: '1.25rem',
        letterSpacing: '0.03em',
        lineHeight: '2.25rem'
    },
    techUsed:
    {
        color: 'var(--bright-green)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem 2rem',
        fontSize: '1rem',
        marginBottom: '1.5rem'
    },
    links:
    {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        listStyleType: 'none',
        paddingInlineStart: '1rem',
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
}