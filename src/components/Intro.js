import { connect } from 'react-redux'
import React, { useState } from 'react'
import s from 'styled-components'

const Intro = ({ intro }) => (
  <>

    <div style={{ color: 'Black', fontSize: '80px' }}> A Very Minimalist Interactive Website Called:</div>
    <div style={{ color: 'Black', fontSize: '80px' }}>{ intro.name }</div>
    <div style={{ color: 'Grey', fontSize: '40px' }}> Here is What I am Thinking:</div>

    <br />
    <div style={{ color: 'Black', fontSize: '40px' }}>{ intro.introText }</div>
    <img alt="image link missing or invalid" id="my_image" src={intro.introImage} />
    <br />
  </>
)

const mapStateToProps = state => ({ intro: state.intro })

export default connect(mapStateToProps, null)(Intro)
