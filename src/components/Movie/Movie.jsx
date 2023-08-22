import React from 'react'
import { Typography,  Grow, Tooltip, Rating } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import './index.css'
const Movie = ({movie,i}) => {
  return (
    <Grid  xs={12} sm={6} md={4} lg={4} xl={2}   key={i}>
    <Grow in key={i} timeout={(i + 1) * 250}>
        <Link style={{alignItems:'center', display:'flex',flexDirection:'column',paddingTop:'1rem'}} className='link' to={'/'}>
            {/* {movie.poster_path
                ? <img alt={movie.title} className={classes.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                : <img alt={movie.title} className={classes.image} src="https://fillmurray.com/200/300" />
            } */}
            <img className='image' style={{width:'200px',borderRadius:'50px'}} alt={movie.title} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "https://fillmurray.com/200/300"} />
            <Typography  variant="h5" sx={{  
    textOverflow: 'ellipsis',
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',}}>{movie.title}</Typography>
            <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
                <div>
                    <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
                </div>
            </Tooltip>
        </Link>
    </Grow>
</Grid>
  )
}

export default Movie
