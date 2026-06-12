import styled from '@emotion/styled';

export const InputField = styled.input<{ $isError: boolean }>`
  width: 100%;
  height: 3rem;
  padding: 8px 12px;
  border: 1px solid
    ${({ $isError, theme }) => ($isError ? theme.colors.error : theme.colors.gray02)};
  border-radius: 4px;
  &:focus {
    border: 1px solid
      ${({ $isError, theme }) => ($isError ? theme.colors.error : theme.colors.gray06)};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray03};
  }
  font-size: ${({ theme }) => theme.typography.bodyRegular};
`;

export const InputWrapper = styled.div<{ $isError: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  border: 1px solid
    ${({ $isError, theme }) => ($isError ? theme.colors.error : theme.colors.gray02)};
  border-radius: 4px;
  overflow: hidden;
  &:focus-within {
    border: 1px solid
      ${({ $isError, theme }) => ($isError ? theme.colors.error : theme.colors.gray06)};
  }
`;

export const Prefix = styled.span`
  padding: 8px 0 8px 12px;
  color: ${({ theme }) => theme.colors.gray04};
  font-size: ${({ theme }) => theme.typography.bodyRegular};
  white-space: nowrap;
  user-select: none;
  flex-shrink: 0;
`;

export const PrefixedInputField = styled.input`
  flex: 1;
  height: 100%;
  padding: 8px 12px 8px 2px;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.typography.bodyRegular};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray03};
  }
`;

export const SubLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.captionSmall};
  color: ${({ theme }) => theme.colors.gray04};
`;
