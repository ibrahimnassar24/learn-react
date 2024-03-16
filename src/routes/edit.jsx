import EditContact from "../components/EditContact";
import { getContact, updateContact } from "../models/contacts";
import { redirect } from "react-router-dom";

export default {
    path: "/contacts/:contactId/edit",
    element: <EditContact />,
    loader,
    action
};

async function loader({ params }) {
    const { contactId } = params;
    const contact = await getContact(contactId);
    return { contact };
}

async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}