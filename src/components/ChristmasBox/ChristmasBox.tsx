import React from 'react'
import { Present, Lid, Greeting, Box } from './styled'


const ChristmasBox: React.FC = () => {
  return (
    <Present>
      <Lid>
        <span></span>
      </Lid>
      <Greeting>
        <p>2020.12.25</p>
        <h2>Merry Christmas!</h2>
      </Greeting>
      <Box>
        <span></span>
        <span></span>
      </Box>
    </Present>
  )
}

export default ChristmasBox