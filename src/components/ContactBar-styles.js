export default {
    container:
    {
        display: 'flex',
        justifyContent: 'center'
    },
    email:
    {
        fontFamily: 'var(--electrolize)',
        color: 'var(--white)',
        letterSpacing: '0.03em',
        textDecoration: 'none',
        transition: 'color 300ms ease-in-out',
        '&:hover':
        {
            color: 'var(--dark-green)'
        }
    }
}