import React from 'react'
import Animated from 'animated/lib/targets/react-dom'

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0)
    }
  }
  componentDidMount(){
    Animated.spring(this.state.anim, {toValue: 1}).start()
  }
  render() {
    return (
      <Animated.div style={{ transform: [{
        scale: this.state.anim 
      }]}}>Welcome to next.js!</Animated.div>
    )
  }
}
