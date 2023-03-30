import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { RxLinkedinLogo } from 'react-icons/rx'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FiGlobe } from 'react-icons/fi'
import { HiPencil } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import FormCont from '../FormBox/FormCont'
import { AboutHead, FormContent, FormItem, AboutSec, BottomActionBar, Container, DetailsBox, EditOp, FollowersBox, FormBox, Imagebox, InpBox, LogoBox, ProfileBox, ProfileUpdate, UserBox, WebFormSec, WebItem, WebOptions } from '../Styles/Style'
import Followers from './Followers';
import { getUserDetails, editUser } from '../Service/API';




function EditProf({ onClose, children }) {
    return (
        <>
            <div className='formDivstyle'>

                <div className='formInnerBoxstyle'>
                    <div style={{ float: 'right' }}>

                        <GrClose style={{ cursor: 'pointer' }} onClick={onClose} size={25} />
                    </div>
                    {children}



                </div>
            </div>
        </>
    );
}



const Profile = () => {

    const [User, setUser] = useState({
        user_id: '', fname: '', lname: '', email: '', phone: '', about: '',
        linkedin: '', github: '', facebook: '', education: '', occupation: '', twitter: "", instagram: "",
        website: "", Intrests: [], password: ""
    });




    const [file, setFile] = useState(null);
    const [showEditProf, setShowEditProf] = useState(false);
    const [showFollowers, setshowFollowers] = useState(false);

    const readuserInput = (e) => {
        setUser({ ...User, [e.target.name]: [e.target.value] });
    }

    const readuserotherInput = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value });
    }



    useEffect(() => {
        prefillUser();


    }, [])

    const prefillUser = async () => {
        const details = await getUserDetails();
        setUser(details);
    }


    // Edit the Profile Details Button   
    const EditProfclick = () => {
        setShowEditProf(true);
    };

    // Followers Button Toggle
    const handlefollower = () => {
        setshowFollowers(!showFollowers);
    }


    // Profile Update Popup toggle

    function handleCloseModal() {
        setShowEditProf(false)
    }


    const [editDetailBox, seteditDetailBox] = useState({
        about: true,
        userlinks: true,
        eduandocc: true,
        password: true,
        intrests: true,
        profile: true
    });


    const toggleUserEditOp = async (e) => {

        let field = (e.target.name).slice(0, -1);;

        seteditDetailBox(prevState => {
            let newState = {
                ...prevState,
                [field]: !prevState[field] // toggle the value of the field corresponding to `st`
            };

            if (newState[field]) {
                // execute some code if the field corresponding to `st` is true

                editUser(User, User.email);
                // console.log(`${st} is true`);
            } else {
                // execute some code if the field corresponding to `st` is false
                // console.log(`${st} is false`);

            }

            return newState;
        });

    }

    const [editProfDet, setShowEditProfDet] = useState(false);

    const chaneProfDet = async () => {
        if (editProfDet == true) {
            setShowEditProfDet(false);
        }
        else {
            try {
                await editUser(User);
                setShowEditProfDet(false);
            }
            catch (error) {
                console.log("Error adding user", error);
            }
           
        }

        setShowEditProf(!EditProf);

        
    }







    return (
        <div className='applyFlexspec'>


            <ProfileUpdate>
                {
                    showEditProf
                    && (

                        <EditProf onClose={handleCloseModal}>

                            <FormBox name='profile'>
                                <Imagebox className='applyFlex'>
                                    <form >
                                        <input type="file" name="profile-pic" />

                                    </form>
                                    <img src="" alt="No img" />
                                </Imagebox>

                                <FormContent className='applyFlex'>
                                    <FormItem>
                                        <p>First Name</p>
                                        <input type="text" name='fname' className='inputStyledark' onChange={readuserotherInput} value={User.fname ? User.fname : ""} />

                                    </FormItem>
                                    <FormItem>
                                        <p>Last Name</p>
                                        <input type="text" name='lname' className='inputStyledark' value={User.lname ? User.lname : ""} onChange={readuserotherInput} />

                                    </FormItem>
                                    <FormItem>
                                        <p>Email Address</p>
                                        <input type="email" name='email' className='inputStyledark' value={User.email ? User.email : ""} onChange={readuserotherInput} />

                                    </FormItem>
                                    <FormItem>
                                        <p>Mobile Number</p>
                                        <input type="text" name='phone' className='inputStyledark' value={User.phone ? User.phone : ""} onChange={readuserotherInput} />

                                    </FormItem>


                                </FormContent>


                            </FormBox>
                            <BottomActionBar>
                                <button className='btn-styleDark' >Cancel</button>
                                <button className='btn-style' name='profileB' onClick={chaneProfDet} >Save</button>
                            </BottomActionBar>
                        </EditProf>
                    )
                }




            </ProfileUpdate>


            <ProfileBox  >
                <LogoBox onClick={EditProfclick}>
                    <img src="" alt="" />
                    <EditOp className='applyFlex'>
                        <HiPencil size={18} color="white" />
                    </EditOp >

                </LogoBox>

                <UserBox>

                    <DetailsBox>
                        <p>Hello,</p>
                        <h3>{User.fname} {User.lname}</h3>
                        <p>{User.email}</p>
                    </DetailsBox>

                    <FollowersBox>
                        <button className='sp-btn' onClick={handlefollower}>12 Followers</button>
                    </FollowersBox>


                </UserBox>
            </ProfileBox>



            <Container >

                {showFollowers ? <Followers /> : ""}

                <AboutSec>
                    <AboutHead>
                        <h4>ABOUT ME</h4>

                        {editDetailBox.about ? <button className='btn-style' name='aboutB' onClick={toggleUserEditOp}>Edit</button> :
                            <button className='btn-styleDark' name='aboutB' onClick={toggleUserEditOp}>Save</button>

                        }


                    </AboutHead>

                    <textarea name="about" cols="30" rows="5" value={User.about ? User.about : ""} onChange={readuserotherInput} style={{ pointerEvents: editDetailBox.about ? 'none' : 'auto', opacity: editDetailBox.about ? 0.6 : 1 }}  ></textarea>
                    <div className='rulestyle' ></div>
                </AboutSec>





                <AboutSec>
                    <AboutHead>
                        <h4>ON THE WEB</h4>


                        {editDetailBox.userlinks ? <button className='btn-style' onClick={toggleUserEditOp}
                            name="userlinksB"
                        >Edit</button>
                            :

                            <button className='btn-styleDark' onClick={toggleUserEditOp}
                                name="userlinksB"



                            >Save</button>

                        }
                    </AboutHead>

                    <WebFormSec name="userlinks"
                        style={{ pointerEvents: editDetailBox.userlinks ? 'none' : 'auto', opacity: editDetailBox.userlinks ? 0.6 : 1 }} >
                        <WebItem>
                            <p>Linkedin</p>
                            <InpBox> <RxLinkedinLogo className='icon-col' size={25} /><input type="text" className='inputStyle' onChange={readuserInput} value={User.linkedin ? User.linkedin : ""} /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Github</p>
                            <InpBox> <FaGithub className='icon-col' size={25} /><input type="text" className='inputStyle' onChange={readuserInput} value={User.github ? User.github : ""} /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Facebook</p>
                            <InpBox> <BsFacebook className='icon-col' size={25} /><input type="text" className='inputStyle' onChange={readuserInput} value={User.facebook ? User.facebook : ""} /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Twitter</p>
                            <InpBox> <FaTwitter className='icon-col' size={25} /><input type="text" className='inputStyle'
                                onChange={readuserInput} value={User.twitter ? User.twitter : ""} /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Instagram</p>
                            <InpBox> <AiFillInstagram className='icon-col' size={25} /><input type="text" className='inputStyle' onChange={readuserInput} value={User.instagram ? User.instagram : ""} /> </InpBox>
                        </WebItem>

                        <WebItem>
                            <p>Website</p>
                            <InpBox> <FiGlobe className='icon-col' size={25} /><input type="text" className='inputStyle' onChange={readuserInput} value={User.website ? User.website : ""} /> </InpBox>
                        </WebItem>
                    </WebFormSec>

                </AboutSec>


                <AboutSec>
                    <AboutHead>
                        <h4>PERSONAL INFORMATION</h4>

                        {editDetailBox.eduandocc ? <button className='btn-style' name='eduandoccB' onClick={toggleUserEditOp}>Edit</button> :

                            <button className='btn-styleDark' name='eduandoccB' onClick={toggleUserEditOp}>Save</button>


                        }

                    </AboutHead>
                    <WebOptions name="eduandocc"

                        style={{ pointerEvents: editDetailBox.eduandocc ? 'none' : 'auto', opacity: editDetailBox.eduandocc ? 0.6 : 1 }}
                    >

                        <WebItem>
                            <p>Highest Education</p>
                            <select name="education" id="education" onChange={readuserotherInput} >
                                <option value="Primary">Primary</option>
                                <option value="Secondary">Secondary</option>
                                <option value="Higher Secondary">Higher Secondary</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Post Graduation">Post Graduation</option>
                            </select>
                        </WebItem>
                        <WebItem>
                            <p>What do you do currently?</p>
                            <select name="occupation" id="occupation" onChange={readuserotherInput}>
                                <option value="College Student">College Student</option>
                                <option value="Teaching">Teaching</option>
                                <option value="Job">Job</option>
                                <option value="Freelancing">Freelancing</option>
                            </select>
                        </WebItem>
                    </WebOptions>
                </AboutSec>


                <AboutSec>
                    <AboutHead>
                        <h4>PASSWORD & SECURITY</h4>

                        {editDetailBox.password ?
                            <button className='btn-style' name='passwordB' onClick={toggleUserEditOp}>Edit</button> :
                            <button className='btn-styleDark' name='passwordB' onClick={toggleUserEditOp}>Save</button>
                        }

                    </AboutHead>
                    <p>Password</p>
                    <textarea id="" cols="30" rows="1" onChange={readuserInput} name="password"
                        style={{ pointerEvents: editDetailBox.password ? 'none' : 'auto', opacity: editDetailBox.password ? 0.6 : 1 }}
                        value={User.password}

                    ></textarea>
                    <div className='rulestyle' ></div>
                </AboutSec>


                <AboutSec>
                    <AboutHead>
                        <h4>INTRESTS</h4>

                        {editDetailBox.intrests ?
                            <button className='btn-style' name='intrestsB' onClick={toggleUserEditOp}>Edit</button> :
                            <button className='btn-styleDark' name='intrestsB' onClick={toggleUserEditOp}>Save</button>}

                    </AboutHead>
                    <IntrestsGroup className="applyFlex" name="intrests"

                        style={{ pointerEvents: editDetailBox.intrests ? 'none' : 'auto', opacity: editDetailBox.intrests ? 0.6 : 1 }}

                    >
                        <IntrestsItem className="not-selected"> <p>Web Development</p></IntrestsItem>
                    </IntrestsGroup>
                </AboutSec>

            </Container>



        </div>
    )
}

export default Profile



const IntrestsBox = styled.div`
 
margin:10px 0px;
`
const IntrestsGroup = styled.div`
 
flex-wrap: wrap;


`
const IntrestsItem = styled.div`
 
padding : 10px 10px;
margin:15px 20px;
color:white;
font-family: 'Open Sans', sans-serif;
cursor:pointer;
letter-spacing:1px;
transition:transform 0.5s ease-in-out;
&:hover{
  transform: scale(1.09,1.09); 
}

`