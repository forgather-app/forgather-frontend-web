import styled from '@emotion/styled';

export const Capsule = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.gray02};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray05};
  ${({ theme }) => theme.typography.captionSmall}
  transition: background 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.gray03};
    color: ${({ theme }) => theme.colors.gray06};
  }
`;

export const Name = styled.span`
  text-decoration: underline;
  text-underline-offset: 2px;
`;
