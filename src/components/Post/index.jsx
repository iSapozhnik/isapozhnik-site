import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'
import Img from "gatsby-image"

class Post extends React.Component {
  render() {
    const {
      title,
      date,
      category,
      description,
      thumb
    } = this.props.data.node.frontmatter
    const { slug, categorySlug } = this.props.data.node.fields

    return (
      <div className="thumbpost">
        <Img fixed={this.props.data.node.frontmatter.thumb.childImageSharp.fixed} />
        {/* <Img fixed={this.props.data.node.frontmatter.childImageSharp} /> */}

        <img
            src=""//{thumb.childImageSharp.fixed.src}
            className="thumbpost-thumb"
            width="48"
            height="48"
        />
        {/* </div> */}
        <div className="thumbpost-post">
          <div className="thumbpost-post__meta">
            <time
              className="thumbpost-post__meta-time"
              dateTime={moment(date).format('MMMM D, YYYY')}
            >
              {moment(date).format('MMMM YYYY')}
            </time>
            <span className="thumbpost-post__meta-divider" />
            <span className="thumbpost-post__meta-category" key={categorySlug}>
              <Link to={categorySlug} className="thumbpost-post__meta-category-link">
                {category}
              </Link>
            </span>
          </div>
          <h2 className="thumbpost-post__title">
            <Link className="thumbpost-post__title-link" to={slug}>
              {title}
            </Link>
          </h2>
          <p className="pthumbpost-post__description">{description}</p>
          <Link className="thumbpost-post__readmore" to={slug}>
            Read
          </Link>
        </div>
      </div>
    )
  }
}

export default Post
