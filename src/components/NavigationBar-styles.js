export default {
    links:
    {
        fontFamily: 'var(--dosis-regular)',
        fontSize: '1.25rem',
        textTransform: 'uppercase',
        color: 'var(--off-white)',
        '--bs-nav-link-color': 'var(--off-white)',
        '--bs-nav-link-hover-color': 'var(--light-blue)',
        '&:hover':
        {
            color: 'var(--light-blue)',
        },
        '& a':
        {
            transition: 'color 300ms ease-in-out',
        }
    },
    submenu:
    {
        borderInline: '1px solid var(--off-white)',
        // bootstrap md breakpoint
        '@media (min-width: 768px)':
        {
            borderInline: 'none'
        }
    }
}