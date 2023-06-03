function Footer(props){
  return (
    <header>
      <div className="container flexbox">
        <nav>
          <ul>
            <li>{props.home}</li>
            <li>{props.about}</li>
            <li>{props.contact}</li>
            <li>{props.licence}</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Footer;