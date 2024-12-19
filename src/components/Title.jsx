import { Box, Typography } from '@mui/material'
import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div style={{display:"inline-flex", gap: 2, alignItems:"center", marginBottom: 3,}}>
        <Typography style={{color:"grey", fontSize:"26px"}}>{text1} <span style={{color:"#414141", fontWeight:"500", fontSize:"26px", }}>{text2}</span></Typography>
        <Box style={{width:"4rem", height:"2.3px", backgroundColor: "#414141",marginLeft:"10px" }}></Box>
    </div>
  )
}

export default Title