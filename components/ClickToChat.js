import React from "react";

const buttonStyle = {
  position: "fixed",
  bottom: "6rem",
  right: "3rem",
  backgroundColor: "#25D366",
  color: "white",
  padding: "8px 10px 0 10px",
  borderRadius: "9999px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s",
  zIndex:"999"
};

const svgStyle = {
  width: "35px",
  height: "35px",
  fill: "currentColor",
};

const ClickToChat = ({link}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"link
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1EBE57")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={svgStyle}
      >
        <path d="M12 0C5.372 0 0 5.372 0 12c0 2.045.544 4.021 1.574 5.772L0 24l6.51-1.553A11.942 11.942 0 0012 24c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 22.08c-1.85 0-3.663-.474-5.26-1.371l-.375-.211-3.86.92.917-3.758-.245-.393A9.936 9.936 0 012.04 12c0-5.507 4.454-9.96 9.96-9.96S21.96 6.493 21.96 12c0 5.507-4.454 9.96-9.96 9.96zM17.246 14.08c-.296-.15-1.753-.868-2.027-.968-.273-.1-.472-.15-.67.15s-.767.968-.94 1.17c-.172.201-.347.226-.644.076s-1.253-.462-2.384-1.476c-.88-.787-1.475-1.761-1.65-2.062-.172-.3-.019-.462.13-.611.134-.134.296-.347.445-.52.15-.172.2-.3.3-.498.1-.199.05-.374-.025-.523-.075-.15-.67-1.613-.92-2.211-.242-.579-.49-.5-.67-.51-.172-.009-.374-.011-.571-.011-.197 0-.52.075-.792.374s-1.04 1.017-1.04 2.48 1.065 2.878 1.213 3.076c.15.198 2.096 3.203 5.084 4.492.71.305 1.263.488 1.696.625.713.227 1.362.195 1.874.118.571-.086 1.753-.715 2.003-1.407.25-.691.25-1.283.174-1.406-.077-.124-.273-.198-.57-.348z" />
      </svg>
    </a>
  );
};

export default ClickToChat;
