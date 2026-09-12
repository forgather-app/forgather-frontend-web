import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  width: 100%;
  ${({ theme }) => ({
    ...theme.typography.header02,
  })}
`;

export const InfoRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const DeleteButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const EditButton = styled.button`
  ${({ theme }) => theme.typography.captionSmall}
  color: ${({ theme }) => theme.colors.gray04};
  white-space: nowrap;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LinkInfoGroup = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinkInfoDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray02};
  margin: 0;
`;
