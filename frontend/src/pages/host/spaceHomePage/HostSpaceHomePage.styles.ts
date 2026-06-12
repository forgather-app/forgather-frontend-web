import styled from '@emotion/styled';
import { hexToRgba } from '../../../utils/hexToRgba';

export const ActionButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 16px;
  padding: 8px 12px;
  justify-content: flex-end;
  background: ${({ theme }) => hexToRgba(theme.colors.gray03, 0.2)};
  border-radius: 40px;
  margin-left: auto;
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const LinkAnchor = styled.a`
  ${({ theme }) => theme.typography.bodyRegular}
  color: ${({ theme }) => theme.colors.gray05};
  text-decoration: underline;
  text-underline-offset: 2px;
  word-break: break-all;
  text-align: center;
  cursor: pointer;
`;
