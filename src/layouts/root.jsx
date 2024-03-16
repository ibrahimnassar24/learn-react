import { Outlet, Link, NavLink, Form, redirect, useSubmit } from "react-router-dom";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useEffect } from "react";

export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();
    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q]);
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                            defaultValue={q}
                            onChange={(e) => {
                                submit (e.currentTarget.form);
                            }}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </Form>
                    <Form method="post" action="create">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink to={`contacts/${contact.id}`}
                                    className={({isActive, isPending}) => {
                                        return isActive
                                        ? "active"
                                        : isPending
                                        ? "pending"
                                        : "";
                                    }}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>

            </div>
            <div id="detail"
            className={navigation.state == "loading" ? "loading" : ""}>
                <Outlet />
            </div>
        </>
    );
}
