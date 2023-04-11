import React from 'react';
import '../CSS/card.css';

const CharacterCard = ({character}) => {
    const view = () => {
        console.log("e");
    }
    return (
        <div className='char-card' onClick={view}>
            <div className='img-div'>
                <img src={character.img} className='char-img' />
            </div>
            <div className='card-content'>
                <p className='ui header card-content-item char-name'>{character.name}</p>
            </div>
        </div>
    )
}

export default CharacterCard