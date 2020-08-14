import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Header, Layout, ImageCard, SearchBar } from '../../components'
import { searchChanged } from '../../actions/index'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

class Tab0Main extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
    visibleSearchBar: false
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  onChangeText = (text) => {
    this.props.searchChanged(text)
  }

  render() {
    const { title, data, visibleSearchBar } = this.state
    const { movie, navigation } = this.props
    console.log('this.props', this.props)
    console.log('movie', movie)
    return (
      <View>
        {visibleSearchBar ? (
          <SearchBar
            colorRight={'#fff'}
            iconRight="magnify"
            placeholder="search"
            onChangeText={this.onChangeText}
            value={movie}
            onPressRight={() => this.setState({ visibleSearchBar: false })}
            onBlur={() => this.setState({ visibleSearchBar: true })}
          ></SearchBar>
        ) : (
          <Header
            title={title}
            colorRight="#fff"
            iconRight="magnify"
            onPressRight={() => this.setState({ visibleSearchBar: true })}
          />
        )}
        <Layout>
          {data.map((item) => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate('TAB0_DETAILS', { show: item.show, onGoBack: this.onGoBack })}
            />
          ))}
        </Layout>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.search.movie
  }
}

export default connect(mapStateToProps, { searchChanged })(Tab0Main)
