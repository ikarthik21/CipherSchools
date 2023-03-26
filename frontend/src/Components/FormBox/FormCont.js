import React from 'react'
import styled from 'styled-components'
const FormCont = () => {
  return (
    <FormContent className='applyFlex'>
                                    <FormItem>
                                        <p>First Name</p>
                                        <input type="text" className='inputStyledark' />

                                    </FormItem>
                                    <FormItem>
                                        <p>Last Name</p>
                                        <input type="text" className='inputStyledark' />

                                    </FormItem>
                                    <FormItem>
                                        <p>Email Address</p>
                                        <input type="email" className='inputStyledark' />

                                    </FormItem>
                                    <FormItem>
                                        <p>Mobile Number</p>
                                        <input type="text" className='inputStyledark' />

                                    </FormItem>


                                </FormContent>

  )
}

export default FormCont
const FormContent = styled.div`
 
flex-direction:column;
padding:10px 20px;

`
const FormItem = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
p{
    margin:10px 0px;
}

`