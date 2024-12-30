import React from "react";
import styled from "styled-components";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Import a Heroicon

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #4f46e5; /* Indigo-600 */
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4338ca; /* Indigo-700 */
  }

  svg {
    width: 1.25rem; /* Icon size */
    height: 1.25rem;
  }
`;

const Button = ({ label, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {label}
      <ArrowRightIcon />
    </StyledButton>
  );
};

export default Button;
