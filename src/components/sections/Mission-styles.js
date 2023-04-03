export default {
    container:
    {
        '@media (min-width: 700px)':
        {
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
        }
    },
    textContainer:
    {
        marginBottom: '2rem',
        '@media (min-width: 700px)':
        {
            maxWidth: '50%',
            marginInline: 'auto',
            marginBottom: '0'
        }
    },
    text:
    {
        color: 'var(--off-white)',
        fontFamily: 'var(--electrolize)',
        fontSize: '1.25rem',
        letterSpacing: '0.03em',
        lineHeight: '2.25rem',
        marginBottom: '2rem'
    },
    imgContainer:
    {
        maxWidth: '200px',
        marginInline: 'auto',
        overflow: 'hidden',
        border: '3px solid var(--more-off-white)',
        '& img':
        {
            width: '100%',
            filter: 'drop-shadow(0px 4px 20px rgba(238, 238, 238, 0.35))'
        },
        '@media (min-width: 700px)':
        {
            maxWidth: '300px',
            borderTop: 'none',
            borderRight: 'none',
            overflow: 'visible'
        }
    }
}