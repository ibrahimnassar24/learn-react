import Root from "../layouts/root";
import { getContacts } from "../models/contacts";
import show from "./show";
import create from "./create";
import destroy from "./destroy";
import edit from "./edit";
import index from "./index.jsx";


export default {
    path: "/",
    element: <Root />,
    loader,
    children: [
        index,
        show,
        create,
        destroy,
        edit        
    ]
};

async function loader({request}) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    
    return { contacts, q };
}
