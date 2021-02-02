import React, { useState } from 'react';
import MenteeForm from '../MenteeForm/MenteeForm';

function MentorFormAndEmbedder() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  function embed() {
    setShowEmbedCode(!showEmbedCode);
  }

  return (
    <div>
      <div>
        <MenteeForm />
        <button onClick={embed} type="button">
          Embed this form in your website
        </button>
      </div>
      <div>
        {showEmbedCode && (
          <textarea
            style={{
              height: '150px',
              resize: 'none',
              marginTop: '10px',
              backgroundColor: '#110a47',
              color: 'white',
            }}
            value='<iframe width="1000" height="500" src="http://localhost:3000/mentee-form-embed" frameborder="0" allowfullscreen></iframe>'
            disabled
          />
        )}
      </div>
    </div>
  );
}

export default MentorFormAndEmbedder;
