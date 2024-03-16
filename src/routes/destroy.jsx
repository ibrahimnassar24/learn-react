import { redirect } from "react-router-dom";
import { deleteContact } from "../models/contacts";

export default {
    path: "/contacts/:contactId/destroy",
    action
}

async function action({ request, params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}