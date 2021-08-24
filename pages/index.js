import styled from 'styled-components'

export default function HomePage({}) {
  return (
    <Wrapper>
      <img src="https://www.placecage.com/c/200/300" alt="Nick Cage" />
      <Heading>Go create an amazing app!</Heading>
      <p>Just make sure it looks better than this one...</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  background-color: blanchedalmond;
`

const Heading = styled.h1`
  font-family: var(--font-serif);
  font-size: ${32 / 16}rem;
  transform: rotate(2deg);
  color: brown;
`
