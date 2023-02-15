import React from 'react';
import './style.scss';

function PageFooter({ author }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href="lee@leewoobin.com">{author}</a>
      </p>
    </footer>
  );
}

export default PageFooter;
