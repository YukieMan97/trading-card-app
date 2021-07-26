import React, { useEffect, useRef, useState } from "react"
import { updateCardName, getCurrentCard } from "../services/cardList";
import { withRouter } from 'react-router-dom'
import { Row } from "react-bootstrap";
import '../App.css'

function ViewCurrentCard(props) {
    const cardObj = props.location.state;
    const cardId = cardObj.item._id;
    const [card, setCard] = useState('');
    const [nameInput, setNameInput] = useState('');
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;
        if (!cardObj) {
            return;
        }
        getCurrentCard(cardId).then(card => {
            if (mounted.current) {
                setCard(card);
            }
        })
        return () => mounted.current = false;
    }, [nameInput])

    const handleUpdateName = (e, id) => {
        e.preventDefault();
        updateCardName(nameInput, id).then(() => {
            if (mounted.current) {
                setNameInput('');
            }
        })
    }

    return (
        <div>
            <h3>View Card</h3>
            {!cardObj
                ? ""
                : (
                    <div className="grid-container3">
                        <div className="grid-item">
                            <h4>{card.name}</h4>
                            <Row
                                className="update-name-row">
                                <label
                                    className="update-name-label">
                                    <input
                                        type="text"
                                        onChange={event => setNameInput(event.target.value)} value={nameInput}
                                    />
                                </label>
                                <button
                                    className="update-name-btn"
                                    onClick={(e) => { handleUpdateName(e, card._id) }}
                                >
                                    update name
                                </button>
                            </Row>
                            <br />
                            <img src={card.url} alt={card.name + "image"} />
                            <br />
                            <br />
                            <h5>{card.description}</h5>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default withRouter(ViewCurrentCard)