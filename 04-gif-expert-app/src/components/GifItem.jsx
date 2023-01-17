import PropTypes from 'prop-types'
export function GifItem({ id, url, title }) {
    return (
        <div className="card" key={id}>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string,
}