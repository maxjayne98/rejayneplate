import { ItemContainer, ItemText, UserIcon, OrdersIcon } from './Elements'

type Props = {
  name: string
  isActive: boolean
}

type IconProps = {
  [key: string]: React.FC
}

const defaultProps: Props = {
  name: 'account',
  isActive: false,
}

const FooterItem: React.FC<Props> = ({ name, isActive }): JSX.Element => {
  const components: IconProps = {
    account: UserIcon,
    orders: OrdersIcon,
  }

  const checkName = (name: string): string => {
    const names: Array<string> = ['account', 'orders']
    return names.some((item) => item === name) ? name : 'orders'
  }

  const Icon: React.FC<{ isActive: boolean }> = components[checkName(name)]
  return (
    <>
      <ItemContainer>
        <Icon isActive={isActive} />
        <ItemText href={{ pathname: `/${name}` }} isActive={isActive}>
          {name}
        </ItemText>
      </ItemContainer>
    </>
  )
}
FooterItem.defaultProps = defaultProps

export default FooterItem
