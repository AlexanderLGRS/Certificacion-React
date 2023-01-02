import { Buffer } from 'buffer';
import PropTypes from 'prop-types'
import crypto from "crypto";

function App({ title, subtitle, name }) {
  const getValue = (a, b) => {
    return a + b
  }

  return (
    <div className="App">
      <h1 onClick={() => {  }}>{title}</h1>
      <h1>{subtitle}</h1>
      <h1>{name}</h1>
      <h1>{getValue(122, 184)}</h1>
    </div>
  )
}

export default App

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string
}
App.defaultProps = {
  title: 'Titulo por defecto',
  subtitle: 'Subtitulo por defecto',
  name: 'Nombre por defecto',
}