import { redirect } from "react-router-dom";
import { createContact } from "../models/contacts";

export default {
    path: "/create",
    action
}

async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
  }