import React from 'react'
import { useParams } from 'react-router-dom';

function Blog() {
    const { id } = useParams();
    console.log(id);
  return (
    <div>
      Dynamic Blog  id : {id}
    </div>
  )
}

export default Blog
