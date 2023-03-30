import styled from "styled-components";

export const Container = styled.div`
background-color: #b4cce430;
display: flex;
flex-direction:column;
z-index:1;
 
`
export const ProfileBox = styled.div`
display:flex;
align-items: center;
justify-content: center;
padding:20px 50px;
position:sticky;
top:55px;
background-color: white;
z-index:3;
background: rgb(40,40,94);
background: radial-gradient(circle, rgba(40,40,94,1) 0%, rgba(36,119,102,0.9865196078431373) 100%);
h3,p{
    color:white; 
}
 
`

export const EditOp = styled.div`
height:25px;
width:25px;
border-radius:50px;
background-color:#0a182c;
position:relative;
bottom:20px;
left:13px;
`

export const LogoBox = styled.div`
 img{
    height:50px;
    width: 50px;
    border:1px solid red;
    border-radius:40px;

 } 
 
flex:0.1;
cursor:pointer;

`
export const UserBox = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: space-between;
 


`
export const DetailsBox = styled.div`



`
export const FollowersBox = styled.div`
 

`
export const AboutSec = styled.div`


display: flex;
flex-direction:column;
padding :20px 30px;
font-size:15px;
 

textarea{
    margin:10px 10px;
    padding:10px 10px;
    border-radius:5px;
    resize: none;  
    font-size:18px;
    outline: none; 
    border:none;
 }

`
export const AboutHead = styled.div`
display:flex;
justify-content:space-between;  
margin : 10px 0px;
align-items:center;

h4{
    letter-spacing:1px;
    font-family: 'Open Sans', sans-serif;
    font-weight:bold;
    color: #222831;
}

`
export const WebFormSec = styled.div`
display:flex;
flex-wrap:wrap;
align-items: center;
//   justify-content: center;

`
export const InpBox = styled.div`
display:flex;
background-color:white;
align-items: center;
padding:0px 10px;
margin:10px 0px;
`

export const WebOptions = styled.div`
display:flex;
`

export const WebItem = styled.div`
display:flex;
 flex-direction:column;
 min-width: 400px;
 margin: 5px 15px;
 padding : 5px 15px;
 p{
    font-weight:lighter;
    letter-spacing:0.7px;
 }
 
 
  select,option{
    font-size:18px;
    height:30px;
    border:none;
    padding:5px 5px;
    border-radius:5px;
    margin:8px 5px;
    min-width: 600px;
    min-height: 40px;
  }
 
  
`

export const ProfileUpdate = styled.div`


`

export const FormBox = styled.div`
display:flex;


`
export const Imagebox = styled.div`
//  height:100px;
//  width:100px;
 
img
{
    
}


`

export const BottomActionBar = styled.div`
display:flex;
float:right;
 margin:10px 10px;
 button{
    margin:10px 10px;
 }

`



export const FormContent = styled.div`
 
flex-direction:column;
padding:10px 20px;

`
export const FormItem = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
p{
    margin:10px 0px;
}

`