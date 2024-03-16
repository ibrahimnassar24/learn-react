import Contact from "../components/Contact";
import { getContact, updateContact } from "../models/contacts";

export default {
    path: "/contacts/:contactId",
    element: <Contact />,
    loader,
    action
};

async function loader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}

async function action({ request, params }) {
    let formData = await request.formData();
    return updateContact(params.contactId, {
        favorite: formData.get("favorite") === "true",
    });
}