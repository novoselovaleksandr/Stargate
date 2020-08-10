import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard } from '../../components'
import { WHITE, BLUE } from '../../../constants'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

class Tab0Main extends Component {
  constructor(props) {
    super(props)
    this.setValueOfTest = this.setValueOfTest.bind(this)
    this.state = {
      title: 'STAR GATE',
      data: [],
      test: ''
    }
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

  setValueOfTest = (test) => {
    this.setState({ test: test })
  }

  render() {
    const { title, data } = this.state
    const { navigation } = this.props
    console.log('this.state.test', this.state)
    return (
      <View>
        <Header
          title={title}
          headerColor={BLUE}
          onPress={() => navigation.openDrawer()}
          test={this.setValueOfTest}
          leftIcon="ios-menu"
          leftColor={WHITE}
        />
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
