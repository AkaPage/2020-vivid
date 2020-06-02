import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import {
  FaGithub,
  FaRegEnvelope
} from 'react-icons/fa'

import Container from '../../components/Container'
import Link from '../../components/Link'
import Nav from '../../components/Nav'

import DefaultBackgroundImage from '../../images/background.jpeg'
import SecondaryBackgroundImage from '../../images/backgroundSecondary_compressed.jpg'
import OriginalBackgroundImage from '../../images/backgroundOriginal_compressed.jpg'

const Header = props => {
  const backgroundFilter = props.backgroundFilter || [
    'rgba(0, 0, 0, 0.7)',
    'rgba(0, 0, 0, 0.25)'
  ]
  const backgroundImage = [
    DefaultBackgroundImage,
    SecondaryBackgroundImage,
    OriginalBackgroundImage
  ][Math.round(Math.random() * 2)]
  const styles = {
    cover: css({
      background: 'black',
      height: '450px',
      minHeight: '350px',
      maxHeight: '100vh',
      backgroundImage: `linear-gradient(${backgroundFilter.join(', ')}), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      '@media(max-height: 768px)': {
        minHeight: '100vh'
      },
      '@media(min-width: 1366px)': {
        backgroundPosition: 'center'
      }
    }),
    coverTitle: css({
      color: '#DCDDDE',
      lineHeight: '2em'
    }),
    whiteFont: css({
      color: '#DCDDDE'
    })
  }

  return (
    <div className='animate__animated animate__fadeIn slow' {...styles.cover}>
      <Nav>
        <Container>
          <Nav.Item primary >
            <Link href='/' {...styles.whiteFont}>
              Seia-Soto
            </Link>
          </Nav.Item>
          <Nav.Item right>
            <Link href='https://github.com/Seia-Soto' target='_blank'>
              <FaGithub style={{ color: '#DCDDDE', verticalAlign: 'bottom' }} />
            </Link>
          </Nav.Item>
          <Nav.Item right>
            <Link href='mailto:seia@outlook.kr'>
              <FaRegEnvelope style={{ color: '#DCDDDE', verticalAlign: 'bottom' }} />
            </Link>
          </Nav.Item>
        </Container>
      </Nav>

      <Container lang='ko' {...styles.coverTitle}>
        <h1>
          소소한 웹 개발자.
        </h1>
        <p>
          가지가지마다 아름다움의 가치를,<br />
          어느날 당신이 관심을 가질만한 웹 서비스를 만듭니다.
        </p>
      </Container>
    </div>
  )
}

Header.propTypes = {
  backgroundFilter: PropTypes.array
}

export default Header
