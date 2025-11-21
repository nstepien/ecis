import { css } from 'ecij';
import { bgColor as background, redClass } from './imported-style';

// Basic CSS transformation
export const buttonClass = css`
  /* button */
  border: 1px solid blue;
  padding: 10px;
`;

// Multiple declarations
export const primaryClass = css`
  /* primary */
  color: blue;
`;

export const secondaryClass = css`
  /* secondary */
  color: green;
`;

// Local variable interpolation
const baseColor = 'red';

const highlightedClass = css`
  /* highlighted */
  color: ${baseColor};
`;

// Imported variable and class name interpolation
export const importedClass = css`
  /* imported */
  background: ${background};

  &.${redClass} {
    border-color: red;
  }
`;

// Nested local interpolation
export const nestedClass = css`
  /* nested */
  background: gray;

  &.${highlightedClass} {
    color: ${baseColor};
  }
`;

// Inline CSS (not assigned to variable)
export function getButtonClass() {
  return css`
    /* inline css */
    background: blue;
    padding: 8px 16px;
  `;
}
