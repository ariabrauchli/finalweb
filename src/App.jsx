import './App.css'
import '../style.css'  

export default function App() {
  return (
    <div>
      <h1>ARIA BRAUCHLI</h1>

      <div className="container">
        <nav className="nav justify-content-center align-items-center mynav grow-nav">
          <div className="d-flex justify-content-around flex-wrap navgroup">
            <a className="nav-link active navlink shrink-link" href="index.html">Home</a>
            <a className="nav-link navlink shrink-link" href="buy.html">Gallery</a>
            <a className="nav-link navlink shrink-link" href="https://www.instagram.com/aria.b.photography/">Instagram</a>
            <a className="nav-link navlink shrink-link" href="contact.html">Contact</a>
          </div>
        </nav>
      </div>

      <div className="card-body">
        <img
          src="https://i.imgur.com/H7nxSBW.jpg"
          alt="Aria"
          width="400"
          height="600"
          className="center"
        />

        <h3>ABOUT ME</h3>
        <h5 className="card-title">
          photographer | STEM student | traveler
        </h5>

        <p className="biotxt">
          Current student at University of Colorado at Boulder. Majoring in Creative Technology and Design. Enjoys sunsets, long walks on the beach and trying to escape America. I also do photography, if you couldn't tell. I have lived in many places, from D.C. to Bali, but I currently reside in Boulder, Colorado.
        </p>
      </div>
    </div>
  )
}
