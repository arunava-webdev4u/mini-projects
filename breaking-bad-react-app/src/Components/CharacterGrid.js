import React from 'react'
import CharacterCard from './CharacterCard'

function CharacterGrid({ characters }) {
    const charactersJSX = characters.map((character) => {
        return <CharacterCard key={character.char_id} character={character} />
    })

    return (
        <div className='cards-container'>
                {charactersJSX}
        </div>
    )
}

export default CharacterGrid