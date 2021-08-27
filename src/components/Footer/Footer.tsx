import { useLocation,  } from 'react-router'
import { Container } from './Elements'
import FooterItem from './FooterItem'

const Footer = () => {
  const {pathname} = useLocation()
  
  return (
    <>
      <Container>
        <FooterItem isActive={pathname === "/account"}  name="account" to="/account"/>
        <FooterItem isActive={pathname === "/orders"} name="orders" to="/orders"/>
        <FooterItem isActive={pathname === "/"} name="home" to="/"/>
      </Container>
    </>
  )
}
export default Footer
