import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import  {Box}  from '@mui/material';
import Movie from '../Movie/Movie';
const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
    const startFrom = excludeFirst ? 1 : 0;
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container >
     {movies.results.slice(startFrom,numberOfMovies).map((movie,i)=>(
     <Movie movie={movie} key={i} i={i}/>
     ))}
     
    </Grid>
  </Box>
  )
}

export default MovieList
