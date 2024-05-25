import React from 'react';

function RenderPropsComponent({ render }) {
  return (
    <div>
      {render()}
    </div>
  );
}

export default RenderPropsComponent;
