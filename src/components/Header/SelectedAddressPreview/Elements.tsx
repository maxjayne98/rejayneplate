import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

export const AddressPreviewContainer = styled.div`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.2rem;
  display: flex;
`;

export const AddressPreviewText = styled.div`
  width: 20ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DownArrow = styled(IoMdArrowDropdown)`
  font-size: 1.6rem;
`;
