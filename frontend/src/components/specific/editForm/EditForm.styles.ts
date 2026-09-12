import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PublicButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const LinkFieldGroup = styled.div`
  width: 100%;
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
