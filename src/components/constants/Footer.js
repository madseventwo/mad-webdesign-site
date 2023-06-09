import React from "react";
import tw from "twin.macro";
import { Container as ContainerBase } from "../misc/Layouts"
import logo from "../../assets/logo-sig_rain.svg";
import styled from "styled-components";


const Container = tw(ContainerBase)`bg-go text-holiness -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
export const NavLink = tw.a``;
export const LogoLink = styled(NavLink)`
img {
    ${tw`w-56 opacity-75 hocus:opacity-100 hocus:cursor-pointer`}
  }
`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-go-light hocus:border-go-light pb-1 transition duration-300 mt-2 mx-4`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-xs text-holiness-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoLink href="/">
              <img src={logo} alt="logo for MAD Web Design - signature spelling M.A.D." />
            </LogoLink>
          </LogoContainer>
          <LinksContainer>
            <Link href="#process">Process</Link>
            <Link href="#options">Options</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </LinksContainer>
          <CopyrightText>
            &copy; Copyright 2023, MAD Web Design, All Rights Reserved. <a href="/privacy">See Privacy Policy</a>. Base React components from <a href="https://treact.owaiskhan.me/">Treact</a>. *Definition of "mad" from <a href="http://mad.urbanup.com/1005004 ">Urban Dictionary</a>.
            Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
