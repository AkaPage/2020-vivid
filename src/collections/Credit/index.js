import React from 'react'

import Container from '../../components/Container'
import Section from '../../components/Section'

const Credit = props => {
  return (
    <Container>
      <Section>
        <p>
          Copyright {1900 + new Date().getYear()} Seia-Soto. All rights reserved.
        </p>
      </Section>
    </Container>
  )
}

export default Credit
