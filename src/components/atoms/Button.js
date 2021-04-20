import styled from '@emotion/styled'
import { rhythm } from '../../utils/typography'

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  margin: 0;
  padding: ${rhythm(1 / 2)};
  width: auto;
  overflow: visible;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  background: white;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: 0;
  }

  &:hover {
    border-color: #007acc;
  }

  &:active {
    border-color: #007acc;
    background: #ececec
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  @media (min-width: 750px) {
    padding: ${rhythm(1)};
  }
`;

export default Button;