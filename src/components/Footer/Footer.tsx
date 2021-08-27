import { Container } from './Elements'
import FooterItem from './FooterItem'
const Footer = () => {
  return (
    <>
      <Container>
        <FooterItem isActive={true} name="account" />
        <FooterItem isActive={false} name="orders" />
      </Container>
    </>
  )
}
export default Footer
