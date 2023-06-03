import Button from './Button'

function Banner(props){
  return(
    <section className="banner flexbox">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div>
        <Button 
        btnClass="primary"
        />
        <Button 
        btnClass="secondary"
        />
      </div>
    </section>
  )
}

export default Banner;