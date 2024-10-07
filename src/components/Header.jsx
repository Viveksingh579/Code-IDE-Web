
import {AppBar,Toolbar,styled}from '@mui/material';
import Logo from '../Img/Logo.jpg';

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
position: static;
`;




const Header=()=>{
 

    return(
     <Container>
        <Toolbar>
            <img src={Logo} alt="logo"  style={{width: 30}}/>
        </Toolbar>
     </Container>
    )
}
export default Header;