import React from 'react'
import styled from 'styled-components'
import { RxLinkedinLogo } from 'react-icons/rx'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FiGlobe } from 'react-icons/fi'
const Profile = () => {
    return (
        <div className='applyFlexspec'>
            <ProfileBox  >
                <LogoBox>
                    <img src="" alt="" />
                </LogoBox>
                <UserBox>
                    <DetailsBox>
                        <p>Hello,</p>
                        <h3>Karthikeya Kallapu</h3>
                        <p>karthikeyakallapu@gmail.com</p>
                    </DetailsBox>
                    <FollowersBox>
                        <p>0 Followers</p>
                    </FollowersBox>
                </UserBox>
            </ProfileBox>



            <Container >


                <AboutSec>
                    <AboutHead>
                        <h4>ABOUT ME</h4>
                        <button className='btn-style'>Edit</button>
                    </AboutHead>

                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <hr className='rulestyle' />
                </AboutSec>

                <AboutSec>
                    <AboutHead>
                        <h4>ABOUT ME</h4>
                        <button className='btn-style'>Edit</button>
                    </AboutHead>

                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <hr className='rulestyle' />
                </AboutSec>


                <AboutSec>
                    <WebItem
                    >

                        <AboutHead>
                            <h4>ON THE WEB</h4>
                            <button className='btn-style'>Edit</button>
                        </AboutHead>
                    </WebItem>

                    <WebFormSec>
                        <WebItem>
                            <h3>Linked In</h3>
                            <InpBox> <RxLinkedinLogo size={30} /><input type="text" /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <h3>Github</h3>
                            <InpBox> <FaGithub size={30} /><input type="text" /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <h3>Facebook</h3>
                            <InpBox> <BsFacebook size={30} /><input type="text" /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <h3>Twitter</h3>
                            <InpBox> <FaTwitter size={30} /><input type="text" /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <h3>Instagram</h3>
                            <InpBox> <AiFillInstagram size={30} /><input type="text" /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <h3>Website</h3>
                            <InpBox> <FiGlobe size={30} /><input type="text" /> </InpBox>
                        </WebItem>





                    </WebFormSec>





                </AboutSec>

                <AboutSec>
                    

                        <AboutHead>
                            <h4>PERSONAL INFORMATION</h4>
                            <button className='btn-style'>Edit</button>
                        </AboutHead>
                        <WebOptions>

                            <WebItem>
                                <h3>Facebook</h3>
                                <select name="" id="">
                                    <option value="">hai</option>
                                    <option value="">hai</option>
                                    <option value="">hai</option>
                                </select>

                            </WebItem>
                            <WebItem>
                                <h3>Facebook</h3>

                                <select name="" id="">
                                    <option value="">hai</option>
                                    <option value="">hai</option>
                                    <option value="">hai</option>
                                </select>
                            </WebItem>

                        </WebOptions>


                   

                </AboutSec>







                <AboutSec>
                    <AboutHead>
                        <h4>PASSWORD & SECURITY</h4>
                        <button className='btn-style'>Edit</button>
                    </AboutHead>
                    <p>Password</p>
                    <textarea name="" id="" cols="30" rows="1"></textarea>
                    <hr className='rulestyle' />
                </AboutSec>
                <AboutSec>
                    <AboutHead>
                        <h4>INTRESTS</h4>
                        <button className='btn-style'>Edit</button>
                    </AboutHead>
                     
                </AboutSec>







            </Container>
        </div>
    )
}

export default Profile


const Container = styled.div`
background-color: #b4cce430;
display: flex;
// justify-content: center;
// border:2px solid red;
flex-direction:column;
z-index:1;
margin-top:100px;
`
const ProfileBox = styled.div`
display:flex;
align-items: center;
// justify-content: center;
padding:10px 50px;
// border: 0.5px solid #767676d5;
border-radius:5px;
position:fixed;
top:55.5px;
background-color: white;
z-index:3;
min-width:100vw;
`

const LogoBox = styled.div`
 img{
    height:50px;
    width: 50px;
    border:1px solid red;
    border-radius:40px;
 } 
flex:0.1;


`
const UserBox = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: space-between;
 


`
const DetailsBox = styled.div`



`
const FollowersBox = styled.div`
 


`
const AboutSec = styled.div`
 
 display: flex;
//  justify-content: center;
 flex-direction:column;
 padding :20px 50px;
 textarea{
    margin:10px 10px;
    padding:10px 10px;
    border-radius:5px;
    resize: none;  
    font-size:18px;
    outline: none; 
 }

`
const AboutHead = styled.div`
display:flex;
justify-content:space-between;  
margin : 10px 10px;


`
const WebFormSec = styled.div`
display:flex;
flex-wrap:wrap;
align-items: center;
//   justify-content: center;

`
const InpBox = styled.div`
display:flex;
background-color:white;
align-items: center;
padding:0px 10px;
margin:10px 0px;
`

const WebOptions = styled.div`
display:flex;
`

const WebItem = styled.div`
display:flex;
 flex-direction:column;
 min-width: 380px;
 margin: 5px 15px;
 padding : 5px 15px;
//  justify-content: center;
 
 input{
   
    font-size:18px;
    height:30px;
    border:none;
    padding:5px 5px;
    border-radius:5px;
 }
 input:focus {
    outline: none;  

  }

  select,option{
    font-size:18px;
    height:30px;
    border:none;
    padding:5px 5px;
    border-radius:5px;
    margin:8px 5px;
    min-width: 600px;
  }
`