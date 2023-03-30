

export default function Section({ title, children })
{
    const classTail = title.toLowerCase().slice(3)
    return (
        <div className={`Section__${classTail}`}>
            <h2>{title}</h2>
            {
                children
            }
        </div>
    )
}
