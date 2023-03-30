import ContactBar from "./ContactBar"
import SocialBar from "./SocialBar"

export default function Footer()
{
    return (
        <div>
            <p>Built and designed by Michael Schultz</p>
            <ContactBar />
            <SocialBar />
            <p>Icons by <a href="https://icons8.com">Icons8</a></p>
        </div>
    )
}
