export default {
    links:
    {
        listStyleType: 'none',
        display: 'flex',
        paddingInlineStart: 'none',
        justifyContent: 'center',
        gap: '1.5rem',
        '& a':
        {
            fill: 'var(--off-white)',
            transition: 'fill 300ms ease-in-out'
        },
        '& a:hover':
        {
            fill: 'var(--dark-green)'
        }
    }
}