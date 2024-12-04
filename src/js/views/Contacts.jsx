import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import CardContact from "../component/CardContact.jsx";

const Contacts = () => {

    const { store } = useContext(Context)
    console.log(store.listContacts)
    return (
        <div className="w-75 mx-auto mt-5">
            <h1 className="d-flex justify-content-center">Contact List</h1>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/AddContact">
                    <button className="btn btn-success">Add New Contact</button>
                </Link>
            </div>
            <ul className="list-group">
                {store.listContacts && store.listContacts.length > 0 && store.listContacts.map((contact, index) => {
                    return (
                        <CardContact contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};
export default Contacts;