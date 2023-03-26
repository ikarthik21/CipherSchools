import React, { useState } from 'react'
import styled from 'styled-components'
import { RxLinkedinLogo } from 'react-icons/rx'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FiGlobe } from 'react-icons/fi'
import { HiPencil } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
 
import FormCont from '../FormBox/FormCont'
import { AboutHead, AboutSec, BottomActionBar, Container, DetailsBox, EditOp, FollowersBox, FormBox, Imagebox, InpBox, LogoBox, ProfileBox, ProfileUpdate, UserBox, WebFormSec, WebItem, WebOptions } from '../Styles/Style'


function EditProf({ onClose, children }) {
    return (
        <>
            <div className='formDivstyle'>
         
                <div className='formInnerBoxstyle'>
                    <div style={{float:'right'}}> 
                    
                    <GrClose style={{cursor:'pointer'}} onClick={onClose} size={25}/>
                    </div>
                    {children}
                    <BottomActionBar>
                        <button className='btn-styleDark' onClick={onClose}>Cancel</button>
                        <button className='btn-style' >Save</button>
                    </BottomActionBar>


                </div>
            </div>
        </>
    );
}



const Profile = () => {
    const [file, setFile] = useState(null);
    const [showEditProf, setShowEditProf] = useState(false);

    const handleButtonClick = () => {
        setShowEditProf(true);
    };

    const handleCloseModal = () => {
        setShowEditProf(false);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('profile-pic', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    };

    return (
        <div className='applyFlexspec'>


            <ProfileUpdate>
                {
                    showEditProf
                    && (

                        <EditProf onClose={handleCloseModal}>

                            <FormBox>
                                <Imagebox className='applyFlex'>
                                    <form onSubmit={handleSubmit}>
                                        <input type="file" name="profile-pic" onChange={handleFileChange} />

                                    </form>
                                    <img src="" alt="No img" />
                                </Imagebox>

                                <FormCont />

                            </FormBox>
                        </EditProf>
                    )
                }




            </ProfileUpdate>


            <ProfileBox  >
                <LogoBox onClick={handleButtonClick}>
                    <img src="" alt="" />
                    <EditOp className='applyFlex'>


                        <HiPencil size={18} color="white" />
                    </EditOp >


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

                    <textarea name="" id="" cols="30" rows="5" placeholder='Add something about you.'      ></textarea>
                    <div className='rulestyle' ></div>
                </AboutSec>

                <AboutSec>
                    <AboutHead>
                        <h4>ABOUT ME</h4>
                        <button className='btn-style'>Edit</button>
                    </AboutHead>

                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <div className='rulestyle' ></div>
                </AboutSec>


                <AboutSec>
                    <AboutHead>
                        <h4>ON THE WEB</h4>
                        <button className='btn-style'>Edit</button>
                    </AboutHead>

                    <WebFormSec>
                        <WebItem>
                            <p>Linkedin</p>
                            <InpBox> <RxLinkedinLogo className='icon-col' size={25} /><input type="text" className='inputStyle' /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Github</p>
                            <InpBox> <FaGithub className='icon-col' size={25} /><input type="text" className='inputStyle' /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Facebook</p>
                            <InpBox> <BsFacebook className='icon-col' size={25} /><input type="text" className='inputStyle' /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Twitter</p>
                            <InpBox> <FaTwitter className='icon-col' size={25} /><input type="text" className='inputStyle' /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Instagram</p>
                            <InpBox> <AiFillInstagram className='icon-col' size={25} /><input type="text" className='inputStyle' /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Website</p>
                            <InpBox> <FiGlobe className='icon-col' size={25} /><input type="text" className='inputStyle' /> </InpBox>
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
                            <p>Highest Education</p>
                            <select name="" id="education">
                                <option value="">Primary</option>
                                <option value="">Secondary</option>
                                <option value="">Higher Secondary</option>
                                <option value="">Graduation</option>
                                <option value="">Post Graduation</option>
                            </select>

                        </WebItem>
                        <WebItem>
                            <p>What do you do currently?</p>
                            <select name="occupation" id="occupation">
                                <option value="college-student">College Student</option>
                                <option value="teaching">Teaching</option>
                                <option value="job">Job</option>
                                <option value="freelancing">Freelancing</option>
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
                    <div className='rulestyle' ></div>
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

