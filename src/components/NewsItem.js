import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" style={{ width: '306px', height: '459px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge bg-secondary"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg" : imageUrl} style={{ width: '304px', height: '200px' }} className="card-img-top" alt="..." />
                <div className="card-body" style={{ padding: "10px", borderTop: "1px solid black" }}>
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text" style={{ marginBottom: '0px' }}>{description}</p>
                    <p className="card-text" style={{ marginBottom: '0px' }}>
                        <small className="text-muted">By {!author ? "Unknown" : author} </small>
                        <small className="text-muted text-sm-end d-block">{new Date(date).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")} ; {new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: '2-digit' })}</small>
                    </p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-outline-secondary">Read More</a>
                </div>
            </div>
        </div >
    )

}

export default NewsItem
