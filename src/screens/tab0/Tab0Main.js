import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard } from '../../components'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

class Tab0Main extends Component {
  state = {
    title: 'STAR GATE',
    data: []
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

  onGoBack = (someDataFromChildren) => {
    console.log('someDataFromChildren', someDataFromChildren) //eslint-disable-line
  }

  render() {
    const { title, data } = this.state
    const { navigation } = this.props
    return (
      <View>
        <Header title={title} />
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
