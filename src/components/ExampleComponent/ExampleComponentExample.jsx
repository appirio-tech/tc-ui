import React from 'react'
import ExampleComponent from './ExampleComponent.jsx'

require('./ExampleComponentExample.scss')

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
      <div className="example-component-container">
        <h1>Example React Component</h1>

        <ExampleComponent items={items} />
      </div>
    )
  }
}

module.exports = React.createClass(ExampleComponentExample)
