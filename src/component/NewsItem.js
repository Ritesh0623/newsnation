import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, url, author, date} = this.props;
        return (
            <>
                <div className="card">
                    <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/10/13/1600x900/Collage_Maker-13-Oct-2023-01-52-PM-3971_1697185362944_1697185407604.jpg":imageUrl} className="card-img-top" alt='' />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} rel="noreferrer" target='_blank' className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
