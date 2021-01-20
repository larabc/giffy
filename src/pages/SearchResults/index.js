import React from 'react'

export default function SearchResults ({params}) {
    console.log(params.id)
    return <h1>Gif con id {params.id}</h1>
} 