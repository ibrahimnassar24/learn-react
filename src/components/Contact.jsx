import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getContact, updateContact } from "../models/contacts";




export default function Contact() {

  const { contact } = useLoaderData();
  const fitcher = useFetcher();

  return (
    <div id="contact">
      <div>
        <img
          key={contact?.avatar}
          src={contact?.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact?.first || contact?.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact?.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact?.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const fitcher = useFetcher();
  let favorite = contact?.favorite;

  if(fitcher.formData)
  {
    favorite = fitcher.formData.get("favorite") == true;
  }
  return (
    <fitcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fitcher.Form>
  );
}
