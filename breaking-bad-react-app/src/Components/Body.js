import React from 'react'
import Spinner from './Spinner';
import CharacterGrid from './CharacterGrid';

const Body = ({ isLoading, characters }) => {
    const renderContext = () => {
        if (isLoading)
            return <Spinner />
        else
            return <CharacterGrid characters={characters} />
    }
    return (
        <div className='body'>
            {renderContext()}
        </div>
    )
}

export default Body;