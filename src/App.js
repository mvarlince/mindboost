import { useState } from 'react';
import './App.css';
import Affirmation from './component/Affirmation';
import NewAffirm from './component/NewAffirm';



function App() {
  const [content, setContent] = useState()
  const [updatedContent, setUpdatedContent] = useState()
  return (
    <>
      <div className='everything'>
        < Affirmation content={content} setContent={setContent} updatedContent={updatedContent} setUpdatedContent={setUpdatedContent} />
        <NewAffirm content={content} setContent={setContent} />
      </div>
    </>
  );
}

export default App;
