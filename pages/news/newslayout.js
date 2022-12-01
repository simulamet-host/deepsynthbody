import { Container } from 'postcss'
import React from 'react'

const Newslayout = ({children}) => {
  return (
    <Container className="bg-indigo-500">
        {children}
    </Container>
  )
}

export default Newslayout;