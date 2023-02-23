// import {  Container, Navbar } from "react-bootstrap";

// export const Footer = () => {
//   return (
//     <div>
//     <Navbar class="text-white bg-info " expand="md">
//     <Container>
//       <h1 className="font-weight-bold">The Generics</h1>
//     </Container>
//   </Navbar>
// </div>
//   );
// };

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer" >
        <h2 className="heading">The Generics</h2>
        <a href="https://www.facebook.com/" >
          𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤
        </a>
        <a href="https://www.youtube.com/">𝐲𝐨𝐮𝐭𝐮𝐛𝐞</a>
        <a href="https://twitter.com/">𝙩𝙬𝙞𝙩𝙩𝙚𝙧</a>
      </div>
    </div>
  );
}

export default Footer;