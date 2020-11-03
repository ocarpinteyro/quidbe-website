import Link from 'next/link'

export default function Header() {
  return (
    
    <nav className="navbar bg-white fixed-top navbar-expand-lg">
      <div className="container">
        <div className="navbar-translate">
          <Link as={`/`} href="/">
            <a className="navbar-brand">Quidbe.</a>
          </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button> 
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="dropdown nav-item">
              <Link as={`/`} href="/">
                  <a className="nav-link">Noticias</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
