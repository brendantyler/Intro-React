
function Gallery(props){
  return (
    <div className="container gallery">
      <h2>Gallery</h2>
      <div className="grid lg-4">
        {props.images.map(image => (
          <div key={image.id} className="image">
            <img src= {image.path} alt={image.path}></img>
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery;