import React from 'react';
import styled from 'styled-components';
import FooterLink from '../FooterLink';

const TermAndPrivacyContainer = styled.div`
  margin-top: 1rem;
  height: 2rem;
  width: auto;
  display: flex;
  justify-content: center;
`;

const TermAndPrivacy = () => (
  <TermAndPrivacyContainer>
    <FooterLink
      name="Terms of User"
      link="www"
    />
    <FooterLink
      name="privacy policy"
      link="www"
    />
  </TermAndPrivacyContainer>
);

export default TermAndPrivacy;
