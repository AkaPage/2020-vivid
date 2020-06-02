import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import {
  FaGithub,
  FaDiscord,
  FaArrowRight
} from 'react-icons/fa'

import Button from '../../components/Button'
import Container from '../../components/Container'
import Image from '../../components/Image'
import Link from '../../components/Link'
import Nav from '../../components/Nav'

import backgroundImage from '../../images/AiriSato-background_compressed.jpg'
import screenshotColors from '../../images/AiriSato-screenshot-color_compressed.jpg'

const Header = props => {
  const backgroundFilter = props.backgroundFilter || [
    'rgba(0, 0, 0, 0.8)',
    'rgba(0, 0, 0, 0.8)'
  ]
  const styles = {
    cover: css({
      background: 'black',
      minHeight: '700px',
      maxHeight: '100vh',
      backgroundImage: `linear-gradient(${backgroundFilter.join(', ')}), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }),
    coverHeader: css({
      color: '#DCDDDE',
      lineHeight: '1.8em'
    }),
    coverTitle: css({
      paddingTop: '55px',
      lineHeight: '1.4em'
    }),
    sectionDivision: css({
      paddingTop: '45px'
    }),
    whiteFont: css({
      color: '#DCDDDE'
    })
  }

  useEffect(() => {
    document.title = 'Airi Sato | by Seia-Soto'
  }, [])

  return (
    <>
      <div {...styles.cover}>
        <Nav>
          <Container>
            <Nav.Item primary >
              <Link href='/airi-sato' {...styles.whiteFont}>
                Airi-Sato
              </Link>
            </Nav.Item>
            <Nav.Item right>
              <Link href='https://github.com/Seia-Soto/airi-sato' target='_blank'>
                <FaGithub style={{ color: '#DCDDDE', verticalAlign: 'bottom' }} />
              </Link>
            </Nav.Item>
            <Nav.Item right>
              <Link href='https://discordapp.com/invite/vAEBXWY' target='_blank'>
                <FaDiscord style={{ color: '#DCDDDE', verticalAlign: 'bottom' }} />
              </Link>
            </Nav.Item>
          </Container>
        </Nav>

        <Container lang='ko' {...styles.coverHeader}>
          <h1 {...styles.coverTitle}>
            당신의 채팅에<br />
            개성을 입혀보세요.
          </h1>
          <p>
            Airi Sato는 기존에 있는 봇의 기능이 아닌<br />
            Discord를 다채롭게 만드는 아름다운 기능을 포함합니다.
          </p>

          <Button>
            <Link
              href='https://discordapp.com/api/oauth2/authorize?client_id=429913480708096000&permissions=0&scope=bot'
              target='_blank'
              {...styles.whiteFont}
            >
              초대하기 <FaArrowRight style={{ verticalAlign: '-2px' }} size={16} />
            </Link>
          </Button>
        </Container>
      </div>

      <Container maxWidth={1000}>
        <div {...styles.coverHeader}>
          <h2 {...styles.coverTitle}>
            무슨 색을 좋아하시나요?<br />
            당신만의 컬러 프로필을 만들어보세요.
          </h2>
          <p>
            Discord에서 닉네임의 색을 명령어 하나로 손쉽게 변경할 수 있습니다.
          </p>
        </div>

        <Image
          src={screenshotColors}
        />
      </Container>
    </>
  )
}

Header.propTypes = {
  backgroundFilter: PropTypes.array
}

export default Header
