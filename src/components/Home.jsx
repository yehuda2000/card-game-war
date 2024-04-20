import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function Home({validName,showScoreTable}) {
    const [name,setName] = useState('')

    function handleNameInput(){
        validName(name)
    }
  return (
    <div>
        <h1>Ready for WAR ?</h1>
        <hr/>
        <input id='inputName' type="text" placeholder='Enter your name...' onChange={e=> setName(e.target.value)} />
        <h2 id='check'>{ name.length>1 ? <FontAwesomeIcon icon={faCheck} /> : null}</h2>
        <button id='start' className='HomeButtons' onClick={handleNameInput}>Start</button>
        <button id='scoreTable' className='HomeButtons' onClick={showScoreTable}>Score Table</button>
    </div>
  )
}
