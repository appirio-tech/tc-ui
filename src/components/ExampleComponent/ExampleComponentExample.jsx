import React from 'react'
import ExampleComponent from './ExampleComponent.jsx'

const items = [
  {
    name: 'peaches',
    isFeatured: 'true',
    onSale: 'true'
  },
  {
    name: 'oranges',
    isFeatured: false,
    onSale: false
  }
]

const ExampleComponentExample = {
  render() {
    return (
      <div>
        <h1> Topcoder UI Example Component </h1>

        <ExampleComponent items={items} />
      </div>
    )
  }
}

module.exports = React.createClass(ExampleComponentExample)