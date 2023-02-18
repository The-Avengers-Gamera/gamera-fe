import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterLinkItem = styled.a`
  color: gray;
  margin: 0 1rem;
  text-decoration: underline;
  font-size: 0.8rem;
`;

type Props = {
  name: string;
  link: string;
};

const FooterLink: React.FC<Props> = (props: Props) => {
  const { name, link } = props;
  const [linkName, setLinkName] = useState('');
  const [linkAddress, setLinkAddress] = useState('');

  useEffect(() => {
    setLinkName(name);
    setLinkAddress(link);
  }, [name, link]);

  return <FooterLinkItem href={linkAddress}>{linkName}</FooterLinkItem>;
};

export default FooterLink;
