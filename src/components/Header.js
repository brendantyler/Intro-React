function Header(props){
  return (
    <header>
      <div className="container flexbox">
        <h1>{props.title}</h1>
        <nav>
          <ul>
            <li>{props.home}</li>
            <li>{props.about}</li>
            <li>{props.contact}</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;