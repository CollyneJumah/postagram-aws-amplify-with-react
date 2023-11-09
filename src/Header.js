import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={headerContainer}>
      <h1 className={headerStyle}>Welcome to DroidConKE 2023</h1>
      <hr/>
      <Link to="/" className={linkStyle}>
        All Posts
      </Link>
    </div>
  );
}

const headerContainer = css`
  padding-top: 20px;
`;

const headerStyle = css`
  font-size: 40px;
  margin-top: 0px;
`;

const linkStyle = css`
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
  \:hover {
    color: #058aff;
  }
`;
