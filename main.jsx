import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example from './src/App.docautobot'
// import KombaiWrapper from './KombaiWrapper'
import ErrorBoundary from '@kombai/react-error-boundary'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      
        <Example />
     
    </ErrorBoundary>
  </StrictMode>,
)