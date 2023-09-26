import React, { useEffect } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 5px;
`;

 export const ErrorModal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);  // Modal desaparece após 3 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <ErrorContainer>
      <p>{message}</p>
    </ErrorContainer>
  );
};
