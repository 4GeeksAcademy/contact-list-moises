import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const CardContact = ({ contact }) => {
    const { actions } = useContext(Context)

    const eliminarContacto = () => {
        console.log(contact)
        actions.deleteContact(contact.id);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center bg-light mb-3 rounded shadow-sm">
            <div className="d-flex align-items-center w-75">
                <div className="col-md-3 d-flex justify-content-center">
                    <img
                        className="rounded-circle"
                        src="https://picsum.photos/170/170/"
                        alt="Contact"
                        style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6">
                    <h5 className="card-title mb-1">{contact.name}</h5>
                    <p className="card-text mb-1">{contact.address}</p>
                    <p className="card-text mb-1">{contact.phone}</p>
                    <p className="card-text mb-1">{contact.email}</p>
                </div>
            </div>
            <div className="col-md-3 d-flex justify-content-end align-items-center">
                <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">
                    <i className="fa-solid fa-pen-to-square fa-lg"></i>
                </Link>
                <button type="button" className="btn btn-link p-0" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id}>
                    <i className="fa fa-trash fa-lg"></i>
                </button>
            </div>
            <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            If you delete this contact, all related data will be lost!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>Yes, Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default CardContact