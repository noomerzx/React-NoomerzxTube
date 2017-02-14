import React from 'react'

const VideoDetail = ({ video }) => {
if (!video) {
  return <div className="col-sm-8 text-sm-center">Loading...</div>
}

  const videoUrl = 'https://www.youtube.com/embed/' + video.id.videoId

  return (
    <div className="col-sm-8 video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl} ></iframe>
      </div>
      <div className="details">
        <div><h4 className="description-title">Description</h4></div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail