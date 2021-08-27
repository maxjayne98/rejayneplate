import { ItemContainer, ItemText, UserIcon, OrdersIcon, HomeIcon } from './Elements'

type Props = {
  name: string
  isActive: boolean
  to:string
}

type IconProps = {
  [key: string]: React.FC
}

const defaultProps: Props = {
  name: 'home',
  isActive: true,
  to:'/'
}

const FooterItem: React.FC<Props> = ({ name, isActive,to }): JSX.Element => {

  const components: IconProps = {
    account: UserIcon,
    orders: OrdersIcon,
    home: HomeIcon,
  }

  const faName:{[key:string]:string} = {
    account: 'اکانت',
    orders: 'سفارشات',
    home: 'خانه',
  }

  const checkName = (name: string): string => {
    const names: Array<string> = ['account', 'orders', 'home']
    return names.some((item) => item === name) ? name : 'orders'
  }

  const Icon: React.FC<{ isActive: boolean }> = components[checkName(name)]
  return (
    <>
      <ItemContainer>
        <Icon isActive={isActive} />
        <ItemText to={{ pathname: `${to}` }} isActive={isActive}>
          {faName[name]}
        </ItemText>
      </ItemContainer>
    </>
  )
}
FooterItem.defaultProps = defaultProps

export default FooterItem
