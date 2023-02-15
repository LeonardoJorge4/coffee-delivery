import styled from 'styled-components'
import { MapPin } from "phosphor-react";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-light']};
`;

export const MapPinIcon = styled(MapPin)`
  fill: ${({ theme }) => theme['purple-dark']};
  margin-right: 4px;
  font-size: 22px;
`;