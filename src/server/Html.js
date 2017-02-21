import React, {PropTypes} from 'react';

function Html(props) {
  return (
    <html>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: props.html}} />
        <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(props.state)}`}} />
        <script src="http://localhost:8080/build/app.js" />
      </body>
    </html>
  );
}

Html.propTypes = {
  html: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired
};

export default Html;
