import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
`;

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
`;

export const LinkFieldGroup = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinkFieldDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray02};
  margin: 0;
`;
