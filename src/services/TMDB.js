import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const Token_API ='5b515e8a1bf9a3a0a986dd06d239ba12'
const page =1;
export const tmdbApi = createApi({
    reducerPath:'tmdbApi',
    baseQuery : fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3/'}),
    endpoints:(builder) => ({
        //Get Movies By [Type]
        getMovies : builder.query({
            query:()=> `movie/popular?page=${page}&api_key=${Token_API}`,
            
        }),
    }) ,
});

export const { useGetMoviesQuery } = tmdbApi;