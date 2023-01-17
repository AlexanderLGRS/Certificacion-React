import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./";

export function GifGrid({ category }) {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h1>Cargando...</h1>}
            <div className="card-grid">
                {images.map((gif) => (
                    <GifItem
                        key={gif.id}
                        {...gif}
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}