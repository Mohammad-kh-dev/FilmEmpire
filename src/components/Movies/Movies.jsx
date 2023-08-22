import React, { useState } from 'react'
import { useGetMoviesQuery } from '../../services/TMDB';
import { useMediaQuery } from '@mui/material';
import MovieList from '../MovieList/MovieList';
import {Box,Typography,CircularProgress,Pagination} from '@mui/material';
import Stack from '@mui/material/Stack';
 const Movies = () => {
  
  const { data, error, isFetching } = useGetMoviesQuery();
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 17 : 19;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  if(isFetching){
    return(
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress/>
      </Box>
    )
  }
    if(error){
      return(
      <Box display={'flex'} justifyContent={'center'}>
        <Typography variant='h2'>
          There Was an Error !
        </Typography>
      </Box>
      )
    }
  return (
    <div>
    
    <MovieList movies={data} numberOfMovies={numberOfMovies}  />
    <Stack spacing={2}>
      <Pagination count={data.results.length} shape="rounded" page={page} onChange={handleChange}  />
      
    </Stack>
  </div>
  )
};


export default Movies;