
import { CustomLink } from "../customLink";




export const LinkMenu = ({ links }) => {
    

    return (
        <>
            {links.map(link => (<li style={{}} key={link.id}><CustomLink link={link} ></CustomLink></li>))}
        </>
    )
}




