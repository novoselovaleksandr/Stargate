import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard, SearchBar } from '../../components'

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

  _onChangeText = (text) => {
    console.log('text', text)
  }

  render() {
    const { title, data, visibleSearchBar } = this.state
    const { navigation } = this.props
    return (
      <View>
        {visibleSearchBar ? (
          <SearchBar
            colorRight={'#fff'}
            iconRight="magnify"
            placeholder="search"
            onChangeText={this._onChangeText}
            value={'movie'}
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

export { Tab0Main }
