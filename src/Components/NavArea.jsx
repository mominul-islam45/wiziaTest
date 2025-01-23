import React from "react";
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from '@heroui/react'

function NavArea() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['About Us', 'Pricing', 'Customers', 'Solutions'];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false} shouldHideOnScroll={true} maxWidth="xl" className="bg-dark_bg border-b-small border-b-white/15">
        <NavbarBrand>
          <img src="./wizia logo 1.png" alt="Wizia Logo" />
        </NavbarBrand>

        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {menuItems.map((item, i)=>(
            <NavbarItem key={i}>
                <Link href="#" className="text-white">{item}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem>
            <Button as={Link} variant="flat" radius="full" className="bg-cyan text-dark_bg font-medium">Book a Demo</Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} variant="bordered" radius="full" className="text-white font-medium">Contact Us</Button>
          </NavbarItem> 
        </NavbarContent>
        
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="block lg:hidden text-white"
        />
        
        <NavbarMenu className="bg-dark_bg">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link className="text-white">{item}</Link>
            </NavbarMenuItem>
          ))}
          
          <NavbarMenuItem className="sm:hidden">
            <Button as={Link} variant="flat" radius="full" className="bg-cyan text-dark_bg font-medium">Book a Demo</Button>
          </NavbarMenuItem>
          <NavbarMenuItem className="sm:hidden">
            <Button as={Link} variant="bordered" radius="full" className="text-white font-medium">Contact Us</Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default NavArea;
