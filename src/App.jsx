import { useState } from 'react'


import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from '../src/components/index'
const App = () => (

  <BrowserRouter >
    <Box sx={{ backgroundColor: '#000' }} >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/YouTube" element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box >

  </BrowserRouter>

)


export default App
