import React from 'react'
import YTSearch from 'youtube-api-search'

// components
import AppHeader from './components/app_header'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// libs
import _ from 'lodash'

const API_KEY = 'AIzaSyDfK3sxV3BJTF2dRdfiglc5oHhOK4s5uF0'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('the jox overwatch')
  }

  videoSearch (term) {
    if (term === '') { term = 'the jox overwatch' }
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div>
        <AppHeader />
        <SearchBar onSearchChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

export default App;
