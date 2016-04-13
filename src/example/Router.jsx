import React                         from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import ExampleApp                    from './ExampleApp.jsx'
import ExampleComponentExample       from '../components/ExampleComponent/ExampleComponentExample.jsx'

const Component = () => (
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRoute component={ExampleComponentExample}/>

        // <Route path="/Examples" component={ExampleComponentExample}/>

      </Route>
    </Router>
)

export default Component