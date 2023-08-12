import React from "react";

function Layout({
  profileImage,
  name,
  headline,
  desc,
  date,
  time,
  button,
  descimg,
}) {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        boxShadow: "0px 0px 10px black",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <div style={{ width: "70%", marginLeft: "30px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={profileImage}
              alt="Profile"
              width={40}
              height={40}
              style={{ borderRadius: "90%" }}
            />{" "}
            &nbsp;&nbsp;&nbsp;
            <h4>{name}</h4>
          </div>
        </div>

        <div>
          <h1 style={{ margin: "0.1px" }}>{headline}</h1>
          <p style={{ color: "grey" }}>{desc}</p>
          <p style={{ color: "grey" }}>
            {date} . {time} .{" "}
            <button
              style={{
                border: "none",
                padding: "6px",
                borderRadius: "30px",
                color: "grey",
              }}
            >
              {button}
            </button>
          </p>
        </div>
      </div>

      <img
        style={{ width: "40%", height: "220px", marginRight: "30px" }}
        src={descimg}
        alt="Graph"
      />
    </div>
  );
}

export default Layout;
