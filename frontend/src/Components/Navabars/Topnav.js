import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs';
import { MdNotificationsNone } from 'react-icons/md'
import { AiOutlineCompass } from 'react-icons/ai'
import '../../App.css'
 
const Topnav = () => {
    return (

        <Nav className='applyFlex'>

            <NavComp1 className='applyFlex'>
                <ToggleButton>
                    <BiMenuAltLeft size={35} />

                </ToggleButton>
                <Logo>
                    <img src="/images/logoimg.png" alt="" />
                    <SLink to='/'><h3>Cipher Schools</h3>
                    </SLink>
                </Logo>
                <Browse>
                    <AiOutlineCompass size={15} />
                    <p>Browse</p>
                </Browse>

            </NavComp1>



            <SearchComp  >

                <BsSearch size={20} />
                <input type="text" name="" id="" />

            </SearchComp>



            <MdNotificationsNone size={20} />

            <ProfileBox></ProfileBox>

            <CiphTokens className='applyFlex'>
                <img src="/images/logoimg.png" alt="" /> <span>0</span>
            </CiphTokens>
            <ModeChange className='applyFlex'>

            </ModeChange>



        </Nav>


    )
}

export default Topnav


const Nav = styled.div`
padding : 10px 10px;
position:fixed;
top: 0px;
left:0px;
 width:98vw;
 z-index:3;
 background-color:white;

 
`
const NavComp1 = styled.div`
flex:1;

`
const SearchComp = styled.div`
flex:0.5;
background-color: #e5f7ff;
padding :3px 8px;
border-radius:10px;
input{
    height:28px;
    outline:none;
         width : 380px;
     border:none;
      font-size:18px;
      margin : 0px 5px;
      background-color: #e5f7ff;  

}
display: flex;
align-items: center;
margin : 0px 5px;
 
`

const Logo = styled.div`
display :flex;
align-items:center;
justify-contnent :center;
h3{
    font-size:20px;
}

img{
    height:30px;
    width:30px;
    margin :0px 7px;
}



`
const ToggleButton = styled.div`

flex :0.07;
display:flex;
justify-content:flex-end;
cursor:pointer;




`
const Browse = styled.div`
display :flex;
align-items:center;
justify-contnent :center;
flex:1;
margin : 0px 30px;

`

const ProfileBox = styled.div`

height: 35px;
width : 35px;
border-radius:30px;
background-color:black;
margin : 0px 10px;

`
const CiphTokens = styled.div`
span{
    margin : 0px 10px;
}
 img{
  
height: 20px;
width : 20px;  
 }

`
const ModeChange = styled.div`
 border-radius: 15px;
height : 25px;width:50px;
background-color: #e5f7ff;  

`

const SLink = styled(Link)`
text-decoration :none;
color:black;

`

