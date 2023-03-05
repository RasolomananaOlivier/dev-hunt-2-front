import React, { Fragment } from "react";
import "./Footer.styles.scss";

const Footer = () => {
  const table = [
    {
      h1: "Profile",
      a1: "Meet Team",
      a2: "Blog",
      a3: "About-Us",
    },

    {
      h1: "Legal Stuff",
      a1: "Terms of use",
      a2: "Privacy Policy",
      a3: "Cook Policy",
    },

    {
      h1: "Help",
      a1: "Knowledge Base",
      a2: "Support",
    },
  ];
  return (
    <Fragment>
      <div className="footer" style={{ marginTop: "16rem" }}>
        <div className="socials">
          <div className="social-item">
            <div
              style={{ position: "absolute", left: "40px", marginTop: "40px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "spaceAround",
                  color: "#fff",
                }}
              >
                {table.map((param, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", justifyContent: "spaceAround" }}
                  >
                    <div style={{ marginLeft: "40px", fontSize: "20px" }}>
                      <h2 style={{ paddingLeft: "31px", fontWeight: "bold" }}>
                        {param.h1}
                      </h2>

                      <div style={{ fontSize: "15px" }}>
                        <ul style={{ listStyleType: "none" }}>
                          <a style={{ width: "25px", color: "#fff" }}>
                            <li style={{ paddingRight: "-10px" }}>
                              {param.a1}
                            </li>
                          </a>
                          <a style={{ width: "25px", color: "#fff" }}>
                            <li>{param.a2}</li>
                          </a>
                          <a style={{ width: "25px", color: "#fff" }}>
                            <li>{param.a3}</li>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div
        style={{ margin: "0 25%", paddingBottom: "10px ", textAlign: "center" }}
      >
        <p>
          © 2023 Discy. All Rights Reserved
          <br />
          With Love by <a>2code</a>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
