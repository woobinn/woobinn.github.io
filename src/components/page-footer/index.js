import React from 'react';
import './style.scss';

function PageFooter({ author }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href="mailto:lee@leewoobin.com">{author}</a>. All rights reserved. Powered by zoomkoding.
      </p>
    </footer>
  );
}

export default PageFooter;
