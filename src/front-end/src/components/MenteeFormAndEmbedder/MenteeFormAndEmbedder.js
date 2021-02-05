import React, { useState } from 'react';
import { Button } from 'antd';
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
                backgroundColor: '#110a47',
                color: 'white',
              }}
              value='<iframe width="1000" height="500" src="http://localhost:3000/mentee-form-embed" frameborder="0" allowfullscreen></iframe>'
              disabled
            />
          )}
        </center>
      </div>
    </div>
  );
}

export default MentorFormAndEmbedder;
