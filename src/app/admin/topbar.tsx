import React from 'react';
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,
} from '@nextui-org/react';
import Logo from './logo';

const TopBar = () => (
    <Navbar>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/api/auth/logout" variant="flat">
            Sign Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
);

export default TopBar;
