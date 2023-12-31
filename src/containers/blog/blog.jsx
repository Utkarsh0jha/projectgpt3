import React from 'react'
import './blog.css'
import { blog01,blog02,blog03,blog04,blog05 } from './import'
import Article from '../../components/article/Article'
const Blog = () => {
  return (
    <div className='gpt3__blog section-padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, <br />We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__blockA'>
          <Article image={blog01} date={'July 25, 2023'} title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
        </div>
        <div className='gpt3__blog-container__blockB'>
        <Article image={blog02} date={'July 25, 2023'} title={'GPT-3 and Open  AI is the future. Let us explore how it is?'} />
        <Article image={blog03} date={'July 25, 2023'} title={'GPT-3 and Open  AI is the future. Let us explore how it is?'} />
        <Article image={blog04} date={'July 25, 2023'} title={'GPT-3 and Open  AI is the future. Let us explore how it is?'} />
        <Article image={blog05} date={'July 25, 2023'} title={'GPT-3 and Open  AI is the future. Let us explore how it is?'} />
        </div>
      </div>
    </div>
  )
}

export default Blog