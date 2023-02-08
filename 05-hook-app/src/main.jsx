import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-UseState/CounterApp'
import { CounterAppWithCustomHook } from './01-UseState/CounterAppWithCustomHook'
import { SimpleForm } from './02-UseEffect/SimpleForm'
import { SimpleFormWithCustomHook } from './02-UseEffect/SimpleFormWithCustomHook'
import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks'
import { FocusScreen } from './04-UseRef/FocusScreen'
import { Layout } from './05-UseLayoutEffect/Layout'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <HooksApp />
    {/*
    <CounterApp />
    <CounterAppWithCustomHook /> 
  < SimpleForm />
    <SimpleFormWithCustomHook/>
    <MultipleCustomHooks />
  <FocusScreen/>
  */}
  <Layout/>
  </>

  // </React.StrictMode>,
)
