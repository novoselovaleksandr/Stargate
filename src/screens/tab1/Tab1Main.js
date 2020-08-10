import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard } from '../../components'
import { BLUE } from '../../../constants'

const url = 'http://api.tvmaze.com/search/shows?q=batman'

class Tab1Main extends Component {
  state = {
    title: 'BATMAN',
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

  render() {
    const { title, data } = this.state
    const { navigation } = this.props
    return (
      <View>
        <Header title={title} headerColor={BLUE} />
        <Layout>
          {data.map((item) => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate('TAB1_DETAILS', item.show)}
            />
          ))}
        </Layout>
      </View>
    )
  }
}

export { Tab1Main }
