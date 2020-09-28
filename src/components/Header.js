import React from "react";

const logo = (
  <svg
    width="60"
    height="50"
    viewBox="0 0 80 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M72.5 0H7.5C3.35781 0 0 3.35781 0 7.5V62.5C0 66.6422 3.35781 70 7.5 70H72.5C76.6422 70 80 66.6422 80 62.5V7.5C80 3.35781 76.6422 0 72.5 0ZM71.5625 62.5H8.4375C8.18886 62.5 7.9504 62.4012 7.77459 62.2254C7.59877 62.0496 7.5 61.8111 7.5 61.5625V8.4375C7.5 8.18886 7.59877 7.9504 7.77459 7.77459C7.9504 7.59877 8.18886 7.5 8.4375 7.5H71.5625C71.8111 7.5 72.0496 7.59877 72.2254 7.77459C72.4012 7.9504 72.5 8.18886 72.5 8.4375V61.5625C72.5 61.8111 72.4012 62.0496 72.2254 62.2254C72.0496 62.4012 71.8111 62.5 71.5625 62.5ZM65 48.125V51.875C65 52.9105 64.1605 53.75 63.125 53.75H31.875C30.8395 53.75 30 52.9105 30 51.875V48.125C30 47.0895 30.8395 46.25 31.875 46.25H63.125C64.1605 46.25 65 47.0895 65 48.125ZM65 33.125V36.875C65 37.9105 64.1605 38.75 63.125 38.75H31.875C30.8395 38.75 30 37.9105 30 36.875V33.125C30 32.0895 30.8395 31.25 31.875 31.25H63.125C64.1605 31.25 65 32.0895 65 33.125ZM65 18.125V21.875C65 22.9105 64.1605 23.75 63.125 23.75H31.875C30.8395 23.75 30 22.9105 30 21.875V18.125C30 17.0895 30.8395 16.25 31.875 16.25H63.125C64.1605 16.25 65 17.0895 65 18.125ZM25.625 20C25.625 23.1066 23.1066 25.625 20 25.625C16.8934 25.625 14.375 23.1066 14.375 20C14.375 16.8934 16.8934 14.375 20 14.375C23.1066 14.375 25.625 16.8934 25.625 20ZM25.625 35C25.625 38.1066 23.1066 40.625 20 40.625C16.8934 40.625 14.375 38.1066 14.375 35C14.375 31.8934 16.8934 29.375 20 29.375C23.1066 29.375 25.625 31.8934 25.625 35ZM25.625 50C25.625 53.1066 23.1066 55.625 20 55.625C16.8934 55.625 14.375 53.1066 14.375 50C14.375 46.8934 16.8934 44.375 20 44.375C23.1066 44.375 25.625 46.8934 25.625 50Z"
      fill="#5C48D3"
    />
  </svg>
);

const Header = () => {
  return (
    <div className="header">
      <div className="logo">{logo}</div>
      <h1>Todo List</h1>
    </div>
  );
};

export default Header;