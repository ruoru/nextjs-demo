import React from 'react'
import { Input } from 'antd'
import Layout from './components/MyLayout.js'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = `asdasdad`;
    return { userAgent }
  }

  constructor(props) {
    super(props);

    this.state = {
      a: 1,
    }
  }

  componentDidMount () {
    this.getData();
  }

  async getData () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    this.setState({data})
  }

  render() {
    const { a } = this.state;
    return (
      <Layout>
        <div>
          <Input value={a}  />
          This is the about page,jahds. {this.props.userAgent}
        </div>
      </Layout>
    )
  }
}