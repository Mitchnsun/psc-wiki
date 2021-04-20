import React from 'react'
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

export default () => (
  <Container>
    <Button>
      <SwimIcon />
    </Button>
    <div></div>
    <Button>
      <BikeIcon />
    </Button>
    <div></div>
    <Button>
      <RunIcon />
    </Button>
  </Container>
);
