import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Header, Layout, ImageCard, SearchBar } from '../../components'
import { searchChanged, getMovies } from '../../actions/index'

class Tab0Main extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
    visibleSearchBar: false
  }

  onChangeText = (text) => {
    this.props.searchChanged(text)
    this.props.getMovies(text)
  }

  render() {
    const { title, visibleSearchBar } = this.state
    const { movie, navigation, data } = this.props
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
              onPress={() => navigation.navigate('TAB0_DETAILS', { show: item.show })}
            />
          ))}
        </Layout>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.search.movie,
    data: state.search.data
  }
}

export default connect(mapStateToProps, { searchChanged, getMovies })(Tab0Main)
