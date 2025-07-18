import React from "react";

function Footer() {
  return (
    <footer className="bg-primary-dark py-4 text-center">
      <p className="text-white opacity-80">
        &copy; {new Date().getFullYear()} Rihika. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
