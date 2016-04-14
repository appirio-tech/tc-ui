import React from 'react'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'

import App from './components/App/App'
import ExampleComponentExample from './components/ExampleComponent/ExampleComponentExample'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ExampleComponentExample} />
  </Route>
)
