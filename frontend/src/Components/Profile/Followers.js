import React, { useState, useEffect } from 'react'
import { getFollowers } from '../Service/API';
import styled from 'styled-components';
import '../../App.css'
const Followers = () => {
    const [Followers, setFollowers] = useState([]);

    const fetchFollowers = async () => {
        const result = await getFollowers();
        setFollowers(result);

    }

    useEffect(() => {
        fetchFollowers();
    }, [])
    



    return (
        <div>
            <FollowerBox>


                {
                    Followers.map((follower, idx) => {

                        return <FollowItem key={idx}>

                           <img src={follower.avatar} alt="No img" />

                            <h4>{follower.first_name}</h4>
                            <h4>{follower.last_name}</h4>
                            <p>{follower.email}</p>

                            <button className='btn-style'>Follow</button>
                        </FollowItem>
                    })



                }

            </FollowerBox>









        </div>
    )
}

export default Followers


const FollowerBox = styled.div`
display:flex;
align-items:center;
justify-content:center;
// margin:100px 100px;
flex-wrap: wrap;

`
const FollowItem = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:10px 10px;
margin:10px 10px;
min-width:180px;
border-radius:10px;
cursor:pointer;
button{
    margin:10px 0px;
}
img{
    height:100px;
    width:100px;
    border-radius:10px;
    margin:2px 0px;
}
h4{
    margin:2px 0px;
}
background-color: #b4cce459;


&:hover{
    transform:scale(1.09,1.09);
    transition :transform 0.5s ease-in-out;
}



`