import { ReactDOM } from 'react';
import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import '../CSS/card.css';

const CharacterCard = ({ character }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>            
            <div className='char-card' onClick={handleFlip}>
                <div className='img-div'>
                    <img src={character.img} className='char-img' />
                </div>
                <div className='card-content'>
                    <p className='ui header card-content-item char-name'>{character.name}</p>
                </div>
            </div>

            <div className='char-card backside' onClick={handleFlip}>
                <div className='content'>
                    <div className='meta'>
                        <p className="ui bold">{character.name}</p>
                        <p>Nickname: {character.nickname}</p>
                        <p>Potrayed by: {character.portrayed}</p>
                        <p>Status: {character.status}</p>
                        <p className='date'>Birthday: {character.birthday}</p>
                    </div>
                    <div className="description">

                    </div>
                </div>
            </div>
        </ReactCardFlip>
      )

}

export default CharacterCard