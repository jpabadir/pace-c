import React, { useState } from 'react';
import { Button } from 'antd';
import MenteeForm from '../MenteeForm/MenteeForm';

function MentorFormAndEmbedder() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  function embed() {
    setShowEmbedCode(!showEmbedCode);
  }

  return (
    <div style={{ paddingTop: '15px' }}>
      <div>
        <center>
          <h1>
            Click on the &quot;Generate iFrame Tag&quot; button to create an
            iFrame tag that can be embedded into your Website!
          </h1>
        </center>
        <center>
          <Button
            onClick={embed}
            type="primary"
            htmlType="submit"
            className="formSubmitButton"
            size="large"
            style={{ backgroundColor: '#35aa98', border: 'none' }}
          >
            Generate iFrame Tag
          </Button>
        </center>
      </div>
      <div>
        <center>
          {showEmbedCode && (
            <textarea
              style={{
                height: '120px',
                width: '330px',
                resize: 'none',
                marginTop: '10px',
                backgroundColor: '#35aa98',
                color: 'white',
              }}
              value='<iframe width="1000" height="500" src="http://localhost:3000/mentee-form-embed" frameborder="0" allowfullscreen></iframe>'
              disabled
            />
          )}
        </center>
        <br />
        <br />
        <center>
          <h2>The form below is an example of the mentee form:</h2>
        </center>
        <MenteeForm />
      </div>
    </div>
  );
}

export default MentorFormAndEmbedder;
