import styled from 'styled-components'
import { AiOutlineUser, AiOutlineUnorderedList } from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const ItemContainer = styled.div`
  flex: 1;
`

export const ItemText = styled.div<{
  isActive: boolean
}>`
  color: ${(props) => 
     props.isActive ? props.theme.primary : props.theme.textColor1
  };
`
export const UserIcon = styled(AiOutlineUser)<{
  isActive: boolean
}>`
  color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.textColor1};
`

export const OrdersIcon = styled(AiOutlineUnorderedList)<{
  isActive: boolean
}>`
  color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.textColor1};
`
