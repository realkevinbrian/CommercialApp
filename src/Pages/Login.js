import React from 'react'
import Banner from '../Components/Login/Banner'
import Form from '../Components/Login/Form'
import { LoginContainer } from '../Styled/Login.Styled'

function index() {
  return (
    <LoginContainer>
        <Banner/>
        <Form/>
    </LoginContainer>
  )
}

export default index