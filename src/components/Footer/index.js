import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://www.youtube.com/c/Mambee" rel="noreferrer noopener" target="_blank">
          Youtube
        </Styled.Link>
        <Styled.Link
          href="https://www.instagram.com/mambeeifpi/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Instagram
        </Styled.Link>
        <Styled.Link href="https://github.com/mambeeifpi" rel="noreferrer noopener" target="_blank">
          Github
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
