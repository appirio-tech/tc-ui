import React          from 'react'
import { render }     from 'react-dom'
import { Provider }   from 'react-redux'
import browserHistory from 'react-router/lib/browserHistory'
import Router         from 'react-router/lib/Router'

import routes from './routes'

const mountNode = document.getElementById('root')

render((
  <Router history={browserHistory} routes={routes} />
), mountNode)
