import { Buffer } from 'buffer';
import PropTypes from 'prop-types'

function App({ title, subtitle, name }) {
  const getValue = (a, b) => {
    return a + b
  }

  return (
    <div className="App">
      <h1 data-testid="test-title" onClick={() => {  }}>{title}</h1>
      <h2>{subtitle}</h2>
      <h2>{name}</h2>
      <h2>{getValue(2, 10)}</h2>
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