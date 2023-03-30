

export default function Section({ title, children })
{
    const sectionName = title.toLowerCase().slice(3)
    return (
        <div className={`Section__${sectionName}`} id={`${sectionName}`}>
            <h2>
                {title}
            </h2>
            {
                children
            }
        </div>
    )
}
