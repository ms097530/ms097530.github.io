export default {
    container:
    {
        position: 'relative',
        '@media (min-width: 700px)':
        {
            '&::after':
            {
                content: '""',
                position: 'absolute',
                width: '100%',
                top: '50%',
                left: '0',
                borderBottom: '1px solid var(--off-white)',
                zIndex: '1'
            }
        }
    },
    title:
    {
        width: 'fit-content',
        marginInline: 'auto',
        paddingInline: '2rem',
        position: 'relative',
        fontFamily: 'var(--dosis-extra-light)',
        fontSize: '3rem',
        color: 'var(--white)',
        textDecoration: 'underline',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginTop: '4rem',
        marginBottom: '4rem',
        // make sure title overlays container with pseudo element and cover line going behind with background color
        zIndex: '3',
        backgroundColor: 'var(--off-black)',
        '@media (min-width: 700px)':
        {
            textDecoration: 'none',

        }
    }
}