import React from 'react'
import ExampleNavContainer from './ExampleNav/ExampleNavContainer.js'

const ExampleApp = ({ children }) => {
  return (
    <div className="ExampleApp">
      <main>{children}</main>

      <ExampleNavContainer />
    </div>
  )
}

export default ExampleApp