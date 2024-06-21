import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    { label: 'Home', url: '/'},
    { label: 'Contact Us', url: "/Contact" },
    { label: "About Us", url: "/AboutPage"},
  ];

  return (
    <nav>
      {links.map(({ label, url }) => (
        <Link to={url} key={label}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Header;