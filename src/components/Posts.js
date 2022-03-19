import React from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import PostDelete from './PostDelete'
import PostEdit from './PostEdit'

const Posts = ({ posts }) => (
  <>

    <div>
      {posts.map(post => (
        <Wrapper key={post.postid}>
          <div key={post.postid}>
            <div style={{ fontSize: '15px' }}>
              {' '}
              Post #
              {post.postid}
            </div>
            <div style={{ fontSize: '30px' }}>
              {' '}
              Witty Post Title:
              {post.name}
            </div>
            <div style={{ color: 'gray', fontSize: '20px' }}>
              {' '}
              Witty Post Content:
              {post.postText}
            </div>
            <img alt="invalid image link" id="my_image" src={post.introImage} />
            <br />
            <PostEdit postid={post.postid} />
            <PostDelete postid={post.postid} />
          </div>
        </Wrapper>
      ))}
    </div>
  </>
)

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, null)(Posts)

const Wrapper = s.div`
  margin: 40px;
  border: 10px solid grey;
  padding: 5;
`
