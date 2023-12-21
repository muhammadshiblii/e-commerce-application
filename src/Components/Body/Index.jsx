import React from 'react'
import './Index.css'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <div className="nav-top">
        <div className="nav-topl">
          <span id='spanss'>Brand</span>
          <span id='spanss'>App</span><p></p>
          <span id='spanss'>Community</span><p></p>
          <span id='spanss'>Support</span><p></p>
          <span id='spanss'>realme VIP</span><p></p>
          <span id='spanss'>5G</span>
        </div>
        <div className="nav-topr">
          <Link to='/Adminlogin' className="log"><span id='spanss' >Login</span></Link><p></p>
          <span id='spanss'>My Order</span><p></p>
          <span id='cart'>Cart</span>
        </div>
      </div>
      <div className="container-fluid">
        <nav className="navbar-id-color navbar-expand-lg navbar-light navbarr">
          <div className="">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-main-ind" id="navbarNav">
              <img src="/realmelogo.png" alt="" />
              <div>
                <a className="nav-link active" aria-current="page" href="#" id="change-section"><span id='spanss'>Home</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='spanss'>New Launch</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='spanss'>Phone</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='spanss'>Audio</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='spanss'>Tablet & Wearable</span></a>
              </div>


              <div>
                <div><a className="nav-link active" href="#"><span id='spanss'>Accessories</span></a></div>
              </div>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search " />
              </form>


              <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
              </div>


            </div>
          </div>
        </nav>
      </div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carosel-img">
              <img src="/carousel.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carosel-text">
              <h1>realme narzo N53</h1>
              <h4>Sales Champion of the Year</h4>
              <span><i class="fa fa-inr" aria-hidden="true"></i>1,000 Off</span>
              <p><i class="fa fa-inr" aria-hidden="true"></i>7,999* | 4GB+64GB</p>
              <button className='btn1'>Buy Now</button>
              <button className='btn2'>Learn More</button>
            </div>


          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carosel1-img">
              <img src="/carousel1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carosel1-text">
              <h1>realme narzo 60x 5G</h1>
              <h4>realme Best Budget 5G Phone</h4>
              <span><i class="fa fa-inr" aria-hidden="true"></i>1,000 Off</span>
              <p><i class="fa fa-inr" aria-hidden="true"></i>11,999* | 4GB+128GB</p>
              <button className='btn11'>Buy Now</button>
              <button className='btn21'>Learn More</button>
            </div>
          </div>


          <div className="carousel-item">
            <div className="carosel1-img">
              <img src="/carousel2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carosel1-text">
              <h1>realme narzo N55</h1>
              <h4>33W SUPERVOOC Charge</h4>
              <span>*upto<i class="fa fa-inr" aria-hidden="true"></i>3,000 Off</span>
              <p><i class="fa fa-inr" aria-hidden="true"></i>9,999* | 6GB+128GB</p>
              <button className='btn11'>Buy Now</button>
              <button className='btn21'>Learn More</button>
            </div>

          </div>
          <div className="carousel-item">
            <div className="carosel-img">
              <img src="/carousel3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carosel-text">
              <h1>realme C53</h1>
              <h4>108MP Camera Under 10K</h4>
              <span>*<i class="fa fa-inr" aria-hidden="true"></i>2,500 Off</span>
              <p><i class="fa fa-inr" aria-hidden="true"></i>8,999* | 6GB+64GB</p>
              <button className='btn1'>Buy Now</button>
              <button className='btn2'>Learn More</button>
            </div>

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="new-launch">
        <h2>New Launch</h2>
        <div className="new-launch-img">
          <img src="/newlaunch.jpg" alt="" />
        </div>
      </div>
      <div className="best-sellers">
        <h2><i class="fa fa-tag" aria-hidden="true"></i>Best Sellers</h2>


        <div className="best-sellers-images">
          <div className="best-sellers1-img">
            <img src="/bestsellers.jpg" alt="" />
            <div className="best-sellers-text">
              <span>Upto <i class="fa fa-inr" aria-hidden="true"></i>2,000 Off</span>
              <h2>realme 11 5G</h2>
              <p>Double Ace , Double Leap</p>
              <h6>From <i class="fa fa-inr from" aria-hidden="true">16,999</i></h6>
            </div>
          </div>
          <div className="best-sellers2-img">
            <div className="b-s-i1">
              <img src="/bestsellers1.jpg" alt="" />
              <div className="best-sellers-text2">
                <span>Upto <i class="fa fa-inr" aria-hidden="true"></i>2,300 Off</span>
                <h2>realme narzo N53</h2>
                <p>Sales Champion of the Year</p>
                <h6>From <i class="fa fa-inr from" aria-hidden="true">8,999 </i></h6>
              </div>
            </div>
            <div className="b-s-i2">
              <img src="/bestsellers2.jpg" alt="" />
              <div className="best-sellers-text3">
                <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>2,000 Off</span>
                <h2>realme 11 5G</h2>
                <p>Leap Up With 5G</p>
                <h6>From <i class="fa fa-inr from" aria-hidden="true"> 14,999</i></h6>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="rec-pro">
        <h2>Recommended Products</h2>
      </div>
      <div className="rec-product-img">
        <img src="/recommended.jpg" alt="" />
      </div>
      <div className="c-series">
        <div className="c-series-product1">
          <img src="/cseriespro1.jpg" alt="" />
          <div className="c-ser-pro-text1">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>1,500 Off</span>
            <h2>realme C67 5G</h2>
            <p>5G Charging Champion</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true"> 13,999</i></h6>
          </div>
        </div>
        <div className="c-series-product2">
          <img src="/cseriespro2.jpg" alt="" />
          <div className="c-ser-pro-text2">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>1,000 Off</span>
            <h2>realme C51</h2>
            <p>33W Charging Under 10K</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true"> 8,999</i></h6>
          </div>
        </div>

      </div>
      <div className="c-series">
        <div className="c-series-product3">
          <img src="/cseriespro3.jpg" alt="" />
          <div className="c-ser-pro-text3">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>1,500 Off</span>
            <h2>realme C53</h2>
            <p>108 MP Champion Like Never Before</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true"> 9,999</i></h6>
          </div>
        </div>
        <div className="c-series-product4">
          <img src="/cseriespro4.jpg" alt="" />
          <div className="c-ser-pro-text4">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>2,500 Off</span>
            <h2>realme C55</h2>
            <p>64 MP AI Champion Camera</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true"> 8,499</i></h6>
          </div>
        </div>

      </div>

      <div className="nmbr-srs-img">
        <img src="/Nmberseries.jpg" alt="" />
      </div>
      <div className="nmbr-srs">
        <div className="nmbr-srs-1">
          <img src="/nmbrsrs1.jpg" alt="" />
          <div className="nmbr-srs-text1">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>2,000 Off</span>
            <h2>realme 11x 5G</h2>
            <p>All-rounder 5G Phone</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true"> 14,999</i></h6>
          </div>
        </div>
        <div className="nmbr-srs-2">
          <img src="/nmbrsrs2.jpg" alt="" />
          <div className="nmbr-srs-text2">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>2,000 Off</span>
            <h2>realme 11 5G</h2>
            <p>108 and 67W Charging</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true"> 16,999</i></h6>
          </div>
        </div>

      </div>
      <div className="c-series">
        <div className="nmbr-srs-3">
          <img src="/nmbrsrs3.jpg" alt="" />
          <div className="nmbr-srs-text3">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>2,000 Off</span>
            <h2>realme 11 Pro 5G</h2>
            <p>120Hz Curved AMOLED Display</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true">21,999</i></h6>
          </div>
        </div>
        <div className="nmbr-srs-4">
          <img src="/nmbrsrs4.jpg" alt="" />
          <div className="nmbr-srs-text4">
            {/* <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>2,500 Off</span> */}
            <h2>realme 11Pro+ 5G</h2>
            <p>200MP OIS SuperZoom Camera</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true">27,999</i></h6>
          </div>
        </div>

      </div>
      <div className="nrz-srs-img">
        <img src="/narzosrs.jpg" alt="" />
      </div>
      <div className="nrz-srs">
        <div className="nrz-srs-1">
          <img src="/nmbrsrs1.jpg" alt="" />
          <div className="nrz-srs-text1">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>1,500 Off</span>
            <h2>realme narzo 60x 5G</h2>
            <p>realme Best Budget 5G Phone</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true"> 12,999</i></h6>
          </div>
        </div>
        <div className="nrz-srs-2">
          <img src="/nmbrsrs2.jpg" alt="" />
          <div className="nrz-srs-text2">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>2,300 Off</span>
            <h2>realme narzo N53</h2>
            <p>Sales Champion of the Year</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true"> 8,999</i></h6>
          </div>
        </div>

      </div>
      <div className="c-series">
        <div className="nrz-srs-3">
          <img src="/nmbrsrs3.jpg" alt="" />
          <div className="nrz-srs-text3">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>2,500 Off</span>
            <h2>realme narzo 60 5G</h2>
            <p>Premium Vegan Leather Design</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true">17,999</i></h6>
          </div>
        </div>
        <div className="nrz-srs-4">
          <img src="/nmbrsrs4.jpg" alt="" />
          <div className="nrz-srs-text4">
            <span>Upto<i class="fa fa-inr" aria-hidden="true"></i>3,000 Off</span>
            <h2>realme narzo 60 Pro 5G</h2>
            <p>120Hz Curved Vision Display</p>
            <h6>From <i class="fa fa-inr from" aria-hidden="true">23,999</i></h6>
          </div>
        </div>

      </div>
      <div className="feedback-img">
        <img src="/feedback.jpg" alt="" />
      </div>
      <div className="why-img">
        <img src="/whyshp.png" alt="" />
      </div>
      <div className="store-img">
        <img src="/store.jpg" alt="" />
      </div>
      <div className="stores-img">
        <img src="/stores.png" alt="" />
      </div>
      <div className="dare-img">
        <img src="/dare.png" alt="" />
      </div>

      <div className="about-service-images">
        <div className="about-img">
          <img src="/about.jpg" alt="" />
          <div className="about-text">
            <h1>About realme</h1>
            <p>realme is a technology brand that specializes in<br></br>providing technology products with a<br></br>comprehensive superior experience for the youth</p>
            <span>View More <i class="fa fa-angle-right" aria-hidden="true"></i></span>
          </div>
        </div>
        <div className="service-img">
          <img src="/ourservice.jpg" alt="" />
          <div className="service-text">
          <h1>Our Service</h1>
            <p>realme provides our users with genuine,convinient<br></br>professionals services,including consulting,upgrading,<br></br>fixing,change and more</p>
            <span>View More <i class="fa fa-angle-right" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Index
