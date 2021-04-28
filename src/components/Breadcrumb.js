import React, { useState } from 'react'
import styled from '@emotion/styled'

import SwimIcon from './atoms/SwimIcon'
import BikeIcon from './atoms/BikeIcon'
import RunIcon from './atoms/RunIcon'
import Button from './atoms/Button'
import { rhythm } from '../utils/typography'

const Container = styled.menu`
  display: flex;
  justify-content: space-around;
  padding: 0;
  transform: translateY(-${rhythm(2.5)});
`;

export default ({ setFilter }) => {
  const [active, setActive] = useState();
  const onClick = filter => {
    setFilter(filter)
    setActive(filter)
  }

  return (
    <Container>
      <Button onClick={() => onClick('Natation')} isActive={active === 'Natation'}>
        <SwimIcon />
      </Button>
      <Button onClick={() => onClick('Vélo')} isActive={active === 'Vélo'}>
        <BikeIcon />
      </Button>
      <Button onClick={() => onClick('Course à pied')} isActive={active === 'Course à pied'}>
        <RunIcon />
      </Button>
    </Container>
  );
}
