import React from 'react'
import Video from './video'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <Video
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect} />
    )
  })

  return (
    <ul className="col-sm-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList