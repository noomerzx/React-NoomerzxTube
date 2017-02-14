import React from 'react'

const Video = ({ video, onVideoSelect }) => {
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="media video-list">
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default Video