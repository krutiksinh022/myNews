import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, time } = this.props
        return (
            <div>
                <div className="card mt-5" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={imageUrl} alt="Card  cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <a href={newsUrl} rel="noopener noreferrer" target={'_blank'} className="btn btn-dark">
                            Read More
                        </a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">By {!author ? "unknown" : author} updated on {new Date(time).toGMTString()} </small>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
