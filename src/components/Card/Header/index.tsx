import React from "react";

export const Header = ({ portalName, logoSrc, logoVisible }) => {
  return (
    <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
      {logoVisible && (
        <img
          alt={`${portalName} Logo`}
          src={logoSrc}
          style={{
            width: 30,
            marginRight: 8,
            borderRadius: 3,
          }}
        />
      )}
      <h3 style={{ margin: 0 }}>{portalName}</h3>
    </div>
  );
};
