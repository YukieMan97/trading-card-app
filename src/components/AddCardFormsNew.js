import React, {useEffect, useRef, useState} from "react";
import { getCardList, addCard, deleteCard } from "../services/cardList";
import {Link} from "react-router-dom";
import '../App.css'

function AddCardFormsNew() {
    const [alert, setAlert] = useState(false);
    const [nameInput, setItemInput] = useState('');
    const [urlInput, setUrlInput] = useState('');
    const [desInput, setDesInput] = useState('');
    const [list, setList] = useState([]);
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;
        if(list.length && !alert) {
            return;
        }
        getCardList().then(items => {
                if(mounted.current) {
                    setList(items);
                }
            })
        return () => mounted.current = false;
    }, [alert, list])

    useEffect(() => {
        if(alert) {
            setTimeout(() => {
                if(mounted.current) {
                    setAlert(false);
                }
            }, 1000)
        }
    }, [alert])

    const handleSubmit = (e) => {
        e.preventDefault();
        addCard(nameInput, urlInput, desInput).then(() => {
                if(mounted.current) {
                    setItemInput('');
                    setUrlInput('');
                    setDesInput('');
                    setAlert(true);
                }
        })
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        deleteCard(id).then(() => {
            if (mounted.current) {
                getCardList().then(items => {
                        if(mounted.current) {
                            setList(items);
                        }
                    })
            }
        })
    }


    return (
    <div className="wrapper">
        {alert && <h2> Card Added </h2>}
        <form onSubmit={handleSubmit}>
            <label>
                <p>Card Name</p>
                <input
                    type="text"
                    onChange={event => setItemInput(event.target.value)} value={nameInput} />
            </label>
            <label>
                <p>Image URL</p>
                <input
                    type="text"
                    onChange={event => setUrlInput(event.target.value)} value={urlInput} />
            </label>
            <label>
                <p>Description</p>
                <input
                    type="text"
                    onChange={event => setDesInput(event.target.value)} value={desInput} />
            </label>
            <button type="submit">Add Card</button>
        </form>
        <div className="grid-container3">
            {list.length === 0
                ? "No cards to display"
                : list.map(item =>
                    <div key={item.name} className="grid-item">
                        <button
                            className="delete-btn"
                            onClick={(e) => {handleDelete(e, item._id)}}>
                            delete
                        </button>
                        <br/>
                        <text>{item.name}</text>
                        <br/>
                        <img src={item.url} alt={item.name + " image"}/>
                        <br/>
                        <Link to={{ pathname: "/view-current-card", state: {item}}}>View Card</Link>
                    </div>
                )}
        </div>
    </div>
    )
}

export default AddCardFormsNew;