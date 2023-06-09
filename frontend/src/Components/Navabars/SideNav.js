import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillCompass } from 'react-icons/ai'
import { ImBooks, ImUserCheck } from 'react-icons/im'
import { MdDashboard, MdTour } from 'react-icons/md'
import { BsDiscord } from 'react-icons/bs'
import { TbCircleLetterC } from 'react-icons/tb'
import { RiFeedbackFill } from 'react-icons/ri'
import { IoMdLogOut } from 'react-icons/io'

const SideNav = () => {
    return (
        <Nav>

            <Navbox>

                <NavItem>
                    <AiFillHome  className='bar-icon-col'size={25} />
                    <p>Home</p>
                </NavItem>
                <NavItem>
                    <ImBooks   className='bar-icon-col' size={25} />
                    <p>Courses</p>
                </NavItem>
                <NavItem>
                    <AiFillCompass   className='bar-icon-col' size={25} />
                    <p>Trending</p>
                </NavItem>
                <NavItem>
                    <ImUserCheck   className='bar-icon-col' size={25} />
                    <p>Following</p>
                </NavItem>
                <NavItem>
                    <MdDashboard   className='bar-icon-col' size={25} />
                    <p>Dashboard</p>
                </NavItem>
                <NavItem>
                    <BsDiscord  className='bar-icon-col' size={25} />
                    <p>Discord</p>
                </NavItem>
                <NavItem>
                    <TbCircleLetterC  className='bar-icon-col'  size={25} />
                    <p>Creator Access</p>

                </NavItem>
                <NavItem>
                    <RiFeedbackFill   className='bar-icon-col'size={25} />
                    <p>Feedback</p>
                </NavItem>

                <NavItem>
                    <MdTour   className='bar-icon-col'size={30} />
                    <p>Tour</p>
                </NavItem>



            </Navbox>


            <Logout>
                <IoMdLogOut size={25} />
                <p>Logout</p>
            </Logout>

        </Nav>


    )
}

export default SideNav;


const Nav = styled.div`
height: calc(100vh - 55px);
max-width : 60px;
display: flex;
flex-direction:column;
justify-content:space-between;
position:fixed;
top: 55px;
left:0px;
 
 
`
const Navbox = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
margin-left:15px;
 
`
const Logout = styled.div`
display: flex;
align-items: center;
flex-direction:column;
justify-content: center;
margin: 10px 0px;
 
`
const NavItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
 
margin:0px 15px;
border-radius:10px;
p{
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    max-width :20px;
    margin : 5px 0px;
}
cursor:pointer;
&:hover{
    background-color: #fdb290d5;
}
 
 min-width:50px;
 padding : 5px 5px;
 
 
`
const SLink = styled(Link)`
text-decoration :none;
color:black;

`