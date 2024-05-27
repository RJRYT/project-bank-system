import React from 'react'

class Home extends React.Component{
    render(){
        return(
            <div>
               <>
  <title>Home</title>
  <meta name="format-detection" content="telephone=no" />
  <meta
    name="viewport"
    content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta charSet="utf-8" />
  <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
  {/* Stylesheets*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,700,900"
  />
  <link rel="stylesheet" href="Style.css" />
  
  {/*[if lt IE 10]>
    <div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;"><a href="https://windows.microsoft.com/en-US/internet-explorer/"><img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a></div>
    
    <![endif]*/}
  <div className="preloader">
    <div className="preloader-body">
      <div className="cssload-container">
        <div className="cssload-speeding-wheel" />
      </div>
      <p>Loading...</p>
    </div>
  </div>
  <div className="page">
    {/* Page Header*/}
    <header className="section page-header">
      {/* RD Navbar*/}
      <div className="rd-navbar-wrap rd-navbar-absolute">
        <nav
          className="rd-navbar rd-navbar-creative"
          data-layout="rd-navbar-fixed"
          data-sm-layout="rd-navbar-fixed"
          data-md-layout="rd-navbar-fixed"
          data-md-device-layout="rd-navbar-fixed"
          data-lg-layout="rd-navbar-fixed"
          data-lg-device-layout="rd-navbar-fixed"
          data-xl-layout="rd-navbar-static"
          data-xl-device-layout="rd-navbar-static"
          data-lg-stick-up-offset="20px"
          data-xl-stick-up-offset="20px"
          data-xxl-stick-up-offset="20px"
          data-lg-stick-up="true"
          data-xl-stick-up="true"
          data-xxl-stick-up="true"
        >
          <div className="rd-navbar-main-outer">
            <div className="rd-navbar-main">
              {/* RD Navbar Panel*/}
              <div className="rd-navbar-panel">
                {/* RD Navbar Toggle*/}
                <button
                  className="rd-navbar-toggle"
                  data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                >
                  <span />
                </button>
                {/* RD Navbar Brand*/}
                <div className="rd-navbar-brand">
                  <a className="brand" href="index.html">
                    <img
                      className="brand-logo-dark"
                      src="images/logo-200x45.png"
                      alt=""
                      width={200}
                      height={45}
                    />
                    <img
                      className="brand-logo-light"
                      src="images/logo-105x51.png"
                      alt=""
                      width={105}
                      height={51}
                    />
                  </a>
                </div>
              </div>
              <div className="rd-navbar-main-element">
                <div className="rd-navbar-nav-wrap">
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item active">
                      <a className="rd-nav-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#about">
                        About Us
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#pricing">
                        Pricing
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#testimonials">
                        Testimonials
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* Swiper*/}
    <section
      className="section swiper-container swiper-slider swiper-slider-2"
      id="home"
      data-loop="true"
      data-autoplay="false"
      data-simulate-touch="false"
      data-slide-effect="fade"
    >
      <div className="swiper-wrapper text-center">
        <div
          className="swiper-slide context-dark"
          data-slide-bg="images/slider-9-1920x1328.jpg"
          style={{ backgroundPosition: "50% 50%" }}
        >
          <div className="swiper-slide-caption">
            <div className="container">
              <div className="row justify-content-lg-center">
                <div className="col-md-12 col-xl-10">
                  <h1 data-caption-animate="fadeInUp" data-caption-delay={100}>
                    The Fastest Way to Send Money Worldwide
                  </h1>
                  <a
                    className="button button-lg button-primary"
                    href="#myModal"
                    data-toggle="modal"
                    data-caption-animate="fadeInUp"
                    data-caption-delay={450}
                  >
                    Order Card
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide context-dark"
          data-slide-bg="images/slider-10-1920x1280.jpeg"
        >
          <div className="swiper-slide-caption">
            <div className="container">
              <div className="row justify-content-lg-center">
                <div className="col-md-12 col-xl-10">
                  <h1 data-caption-animate="fadeInUp" data-caption-delay={100}>
                    Where You Know Your Banker and Your Banker Knows You
                  </h1>
                  <a
                    className="button button-lg button-primary"
                    href="#myModal"
                    data-toggle="modal"
                    data-caption-animate="fadeInUp"
                    data-caption-delay={450}
                  >
                    Order Card
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide context-dark"
          data-slide-bg="images/slider-8-1920x1328.jpeg"
          style={{ backgroundPosition: "50% 50%" }}
        >
          <div className="swiper-slide-caption">
            <div className="container">
              <div className="row justify-content-lg-center">
                <div className="col-md-12 col-xl-10">
                  <h1 data-caption-animate="fadeInUp" data-caption-delay={100}>
                    Our Quest to Make Banking Better Starts Here
                  </h1>
                  <a
                    className="button button-lg button-primary"
                    href="#myModal"
                    data-toggle="modal"
                    data-caption-animate="fadeInUp"
                    data-caption-delay={450}
                  >
                    Order Card
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-meta">
        <ul className="links">
          <li>
            <a className="icon icon-meta mdi mdi-facebook" href="#" />
          </li>
          <li>
            <a className="icon icon-meta mdi mdi-twitter" href="#" />
          </li>
          <li>
            <a className="icon icon-meta mdi mdi-instagram" href="#" />
          </li>
          <li>
            <a className="icon icon-meta mdi mdi-facebook-messenger" href="#" />
          </li>
          <li>
            <a className="icon icon-meta mdi mdi-linkedin" href="#" />
          </li>
          <li>
            <a className="icon icon-meta mdi mdi-snapchat" href="#" />
          </li>
        </ul>
        <div className="contacts">
          <div className="icon mdi mdi-cellphone-iphone" />
          <div className="tel">
            <a href="tel:#">1-800-1234-567</a>
          </div>
          <div className="request">
            <a href="#">Request a Call Back</a>
          </div>
        </div>
        {/* Swiper Pagination*/}
        <div className="swiper-pagination" />
      </div>
    </section>
    {/* Advantages*/}
    <section className="section context-dark">
      <div className="row row-flex no-gutters">
        <div className="col-md-6 col-lg-3">
          <div className="blurb-boxed-2">
            <div className="icon mdi mdi-credit-card-multiple" />
            <h6 className="title">
              More than <span className="font-weight-bold">23 754</span> Issued
              Cards
            </h6>
            <p className="exeption">
              Our bank is an acknowledged leader in credit card distribution. We
              issue more than 5000 cards every year.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="blurb-boxed-2 blurb-boxed-dark">
            <div className="icon linearicons-wallet" />
            <h6 className="title">
              Up to <span className="font-weight-bold">30%</span> Cashback
            </h6>
            <p className="exeption">
              We offer an amazing amount of cashback for payments made with one
              of our credit cards - Blue, Green, or Orange.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="blurb-boxed-2 blurb-boxed-darker">
            <div className="icon mdi mdi-credit-card-multiple" />
            <h6 className="title">
              Up to <span className="font-weight-bold">25%</span> for Deposits
            </h6>
            <p className="exeption">
              Bank Progress offers various deposits in all international
              currencies with interest rate up to 25% for all regular clients.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="blurb-boxed-2 blurb-boxed-darkest">
            <p className="exeption">The Best Choice 2018</p>
            <h5 className="title">
              Reliable and Secure Credit Cards and Deposits for You
            </h5>
            <a
              className="button button-lg button-icon button-icon-left button-primary"
              href="#"
            >
              <span className="icon mdi mdi-credit-card" />
              Order a Card
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* A Few Words About Our Bank*/}
    <section className="section section-lg bg-gray-100" id="about">
      <div className="container">
        <div className="block-lg text-center">
          <h2>A Few Words About Our Bank</h2>
          <p>
            Bank Progress was founded in 1999 to introduce the new level of
            financial services worldwide. We are still dedicated to the success
            of our clients, both individual and corporate.
          </p>
        </div>
        <div className="row row-20 justify-content-center justify-content-lg-between">
          <div className="col-md-10 col-lg-6 wow fadeIn">
            <img
              className="img-bordered"
              src="images/index-1-2-570x379.jpg"
              alt=""
              width={570}
              height={379}
            />
          </div>
          <div className="col-md-10 col-lg-6 col-xl-5">
            <div className="text-block-2">
              <p>
                At Bank Progress, we are guided by a common purpose to help make
                financial lives better by connecting clients and communities to
                the resource they need to be successful. We are driving growth –
                helping to create jobs, develop communities, foster economic
                mobility and address society’s biggest challenges – while
                managing risk and providing a return to our clients and our
                shareholders.
              </p>
              <div className="progress-linear-wrap">
                {/* Linear progress bar*/}
                <article className="progress-linear">
                  <div className="progress-header">
                    <p>Financial Consulting</p>
                    <span className="progress-value">75</span>
                  </div>
                  <div className="progress-bar-linear-wrap">
                    <div className="progress-bar-linear" />
                  </div>
                </article>
                {/* Linear progress bar*/}
                <article className="progress-linear">
                  <div className="progress-header">
                    <p>Online Reporting</p>
                    <span className="progress-value">50</span>
                  </div>
                  <div className="progress-bar-linear-wrap">
                    <div className="progress-bar-linear" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Financial Statistics*/}
    <section className="section section-lg bg-gray-dark">
      <div className="container">
        <h2 className="text-center">Financial Statistics</h2>
        <div className="row row-20 justify-content-center justify-content-lg-between">
          <div className="col-md-12 col-lg-4 wow fadeIn">
            <blockquote className="quote quote-default">
              <div className="quote-icon mdi mdi-format-quote" />
              <div className="quote-body">
                <q className="heading-6">
                  At Bank Progress, we aim to provide top quality banking
                  services to a greater number of individual and corporate
                  customers than any other bank in the USA or abroad. Our
                  clients value data privacy and security of their banking
                  accounts 24/7.
                </q>
              </div>
              <div className="quote-meta">
                <div className="author">
                  <cite>Samuel Chapman</cite>
                </div>
                <div className="position">
                  CEO &amp; Founder of Bank Progress
                </div>
              </div>
            </blockquote>
          </div>
          <div className="col-md-8 col-lg-5 col-xxl-4 wow fadeIn">
            {/* gradient blocks*/}
            {/* gradient primary*/}
            <svg className="svg-hidden">
              {/* gradient*/}
              <linearGradient
                id="linear-gradient-primary"
                x1="50%"
                y1="30%"
                x2="50%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1E90FF" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </svg>
            {/* gradient secondary*/}
            <svg className="svg-hidden">
              {/* gradient*/}
              <linearGradient
                id="linear-gradient-secondary"
                x1="50%"
                y1="30%"
                x2="50%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1E90FF" />
                <stop offset="100%" stopColor="#005db7" />
              </linearGradient>
            </svg>
            <div
              className="d3-chart"
              id="spline-chart"
              style={{ width: "100%", margin: "0 auto" }}
            />
            <p>
              With the development of online banking, our number of customers
              increased up to 6 million worldwide.
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xxl-2">
            <div className="row row-fix row-40">
              <div className="col-6 col-md-12">
                <div className="progress-bar-circle-wrap text-center">
                  <div
                    className="progress-bar-circle"
                    data-value="0.5"
                    data-gradient="#1E90FF"
                    data-empty-fill="#fff"
                    data-size={100}
                    data-thickness={2}
                  >
                    <span />
                  </div>
                  <p className="progress-bar-circle-title">Cashback</p>
                </div>
              </div>
              <div className="col-6 col-md-12">
                <div className="progress-bar-circle-wrap text-center">
                  <div
                    className="progress-bar-circle"
                    data-value={1}
                    data-gradient="#1E90FF"
                    data-empty-fill="#fff"
                    data-size={100}
                    data-thickness={2}
                  >
                    <span />
                  </div>
                  <p className="progress-bar-circle-title">Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* The Best Banking Choise*/}
    <section className="section section-lg" id="services">
      <div className="container">
        <div className="block-lg text-center">
          <h2>The Best Banking Choice</h2>
          <p>
            Since our foundation, we have been #1 banking institution for lots
            of individual and corporate customers, both in the USA and
            internationally. We provide our clients with a number of benefits.
          </p>
        </div>
        <div className="row row-30 row-xxl-60">
          <div className="col-sm-6 col-md-4 wow fadeInLeft">
            <div className="blurb-image">
              <div className="icon linearicons-map2" />
              <h6 className="title">Various Locations</h6>
              <p className="exeption">
                We have offices in many countries including the USA and the UK.
              </p>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 wow fadeInLeft"
            data-wow-delay="0.1s"
          >
            <div className="blurb-image">
              <div className="icon linearicons-laptop-phone" />
              <h6 className="title">Mobile Banking Apps</h6>
              <p className="exeption">
                Get instant access to your account on any device using our
                banking apps.
              </p>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 wow fadeInLeft"
            data-wow-delay="0.2s"
          >
            <div className="blurb-image">
              <div className="icon linearicons-group-work" />
              <h6 className="title">Family &amp; Friends Programs</h6>
              <p className="exeption">
                Our Bank has special programs with benefits for family members.
              </p>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 wow fadeInLeft"
            data-wow-delay="0.1s"
          >
            <div className="blurb-image">
              <div className="icon linearicons-headset" />
              <h6 className="title">24/7 Support</h6>
              <p className="exeption">
                Our Support team is always ready to help you solve any banking
                issues.
              </p>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 wow fadeInLeft"
            data-wow-delay="0.2s"
          >
            <div className="blurb-image">
              <div className="icon linearicons-receipt" />
              <h6 className="title">Personal Profile</h6>
              <p className="exeption">
                Register your free personal profile online to begin using our
                services.
              </p>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 wow fadeInLeft"
            data-wow-delay="0.3s"
          >
            <div className="blurb-image">
              <div className="icon linearicons-cog" />
              <h6 className="title">Settings</h6>
              <p className="exeption">
                Registered clients can edit the banking account settings in 2
                clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Pricing*/}
    <section className="section section-lg bg-gray-100" id="pricing">
      <div className="container text-center">
        <h2>Pricing</h2>
        <div className="row no-gutters justify-content-center">
          <div className="col-md-4">
            <div className="price-box-1">
              <div className="media-wrap">
                <img
                  src="images/pricing-1-202x162.png"
                  alt=""
                  width={202}
                  height={162}
                />
              </div>
              <div className="title">Basic</div>
              <p className="exeption">
                This option is perfect if you have no experience in online
                banking but would like to have a card for all kinds of payments
                in selected currencies.
              </p>
              <div className="heading-3 price">Free</div>
              <a
                className="button button-lg button-primary"
                href="#myModal"
                data-toggle="modal"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="price-box-1 price-box-1-primary">
              <div className="media-wrap">
                <img
                  src="images/pricing-2-202x162.png"
                  alt=""
                  width={202}
                  height={162}
                />
              </div>
              <div className="title">Standard</div>
              <p className="exeption">
                This offer provides you with extended support for your financial
                needs and is able to cover the needs of individual and business
                clients.
              </p>
              <div className="heading-3 price">$99.00/mo</div>
              <a
                className="button button-lg button-primary"
                href="#myModal"
                data-toggle="modal"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="price-box-1">
              <div className="media-wrap">
                <img
                  src="images/pricing-3-202x162.png"
                  alt=""
                  width={202}
                  height={162}
                />
              </div>
              <div className="title">Premium</div>
              <p className="exeption">
                This card from Bank Progress proved to be a great financial
                solution for big companies and international enterprises
                worldwide.
              </p>
              <div className="heading-3 price">$199.00/mo</div>
              <a
                className="button button-lg button-primary"
                href="#myModal"
                data-toggle="modal"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* How to Order a New Card*/}
    <section className="section section-lg">
      <div className="container text-center">
        <h2>How to Order a New Card</h2>
        <div className="row row-40 justify-content-center number-counter">
          <div className="col-sm-6 col-lg-3 wow fadeInLeft">
            <div className="blurb-icon-fill">
              <div className="icon linearicons-register">
                <span className="index-counter" />
              </div>
              <h5 className="title">Online Registration</h5>
              <p className="exeption">
                Everything starts with free online registration. Only basic data
                is needed - name, surname, age etc.
              </p>
            </div>
          </div>
          <div
            className="col-sm-6 col-lg-3 wow fadeInLeft"
            data-wow-delay="0.1s"
          >
            <div className="blurb-icon-fill">
              <div className="icon linearicons-menu3">
                <span className="index-counter" />
              </div>
              <h5 className="title">Filling Out a Form</h5>
              <p className="exeption">
                After the basic registration, you will need to fill out a form
                to help us determine your financial goals.
              </p>
            </div>
          </div>
          <div
            className="col-sm-6 col-lg-3 wow fadeInLeft"
            data-wow-delay="0.2s"
          >
            <div className="blurb-icon-fill">
              <div className="icon linearicons-check">
                <span className="index-counter" />
              </div>
              <h5 className="title">Signing an Agreement</h5>
              <p className="exeption">
                This stage concludes the procedure of opening an account at Bank
                Progress to start using your card.
              </p>
            </div>
          </div>
          <div
            className="col-sm-6 col-lg-3 wow fadeInLeft"
            data-wow-delay="0.3s"
          >
            <div className="blurb-icon-fill">
              <div className="icon linearicons-credit-card">
                <span className="index-counter" />
              </div>
              <h5 className="title">Using Your Card</h5>
              <p className="exeption">
                You can use your card to purchase the products you need or to
                open a secure deposit with lots of benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Call to action*/}
    <section className="section section-xs bg-primary-gradient">
      <div className="container">
        <div className="box-cta">
          <div className="box-cta-inner">
            <h3>
              Choose Your <span className="font-weight-bold">Bank Card</span>{" "}
              Now!
            </h3>
          </div>
          <div className="box-cta-inner">
            <a
              className="button button-lg button-primary-dark"
              href="#myModal"
              data-toggle="modal"
            >
              Order Card
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonials*/}
    <section className="section section-lg bg-gray-100" id="testimonials">
      <div className="container text-center">
        <h2>Testimonials</h2>
        {/* Owl Carousel*/}
        <div
          className="owl-carousel text-left"
          data-items={1}
          data-md-items={2}
          data-dots="true"
          data-nav="false"
          data-stage-padding={0}
          data-loop="false"
          data-margin={30}
          data-mouse-drag="false"
          data-autoplay="true"
        >
          <blockquote className="quote quote-boxed">
            <div className="quote-meta">
              <ul className="list-icons">
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star-half" />
                </li>
              </ul>
              <div className="time">2 days ago</div>
            </div>
            <q>
              I choose Bank Progress because I know they share my values of
              putting community first. Not only do they make banking easy, I see
              them out volunteering and investing in our community.
            </q>
            <div className="quote-author">
              <div className="author-media">
                <img
                  src="images/user-1-64x64.jpg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="author-body">
                <div className="author">
                  <cite>Marie Hanson</cite>
                </div>
                <div className="position">Charity Organization Manager</div>
              </div>
            </div>
          </blockquote>
          <blockquote className="quote quote-boxed">
            <div className="quote-meta">
              <ul className="list-icons">
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star-half" />
                </li>
              </ul>
              <div className="time">2 days ago</div>
            </div>
            <q>
              When I needed financial assistance to expand my shop, I went
              directly to Bank Progress. Securing financing helped us renovate
              and expand my jewelry shop and attract more clients.
            </q>
            <div className="quote-author">
              <div className="author-media">
                <img
                  src="images/user-2-64x64.jpg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="author-body">
                <div className="author">
                  <cite>Mildred Bates</cite>
                </div>
                <div className="position">Jewelry Shop Owner</div>
              </div>
            </div>
          </blockquote>
          <blockquote className="quote quote-boxed">
            <div className="quote-meta">
              <ul className="list-icons">
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star-half" />
                </li>
              </ul>
              <div className="time">2 days ago</div>
            </div>
            <q>
              I choose Bank Progress because I know they share my values of
              putting community first. Not only do they make banking easy, I see
              them out volunteering and investing in our community.
            </q>
            <div className="quote-author">
              <div className="author-media">
                <img
                  src="images/user-1-64x64.jpg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="author-body">
                <div className="author">
                  <cite>Marie Hanson</cite>
                </div>
                <div className="position">Charity Organization Manager</div>
              </div>
            </div>
          </blockquote>
          <blockquote className="quote quote-boxed">
            <div className="quote-meta">
              <ul className="list-icons">
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star-half" />
                </li>
              </ul>
              <div className="time">2 days ago</div>
            </div>
            <q>
              When I needed financial assistance to expand my shop, I went
              directly to Bank Progress. Securing financing helped us renovate
              and expand my jewelry shop and attract more clients.
            </q>
            <div className="quote-author">
              <div className="author-media">
                <img
                  src="images/user-2-64x64.jpg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="author-body">
                <div className="author">
                  <cite>Mildred Bates</cite>
                </div>
                <div className="position">Jewelry Shop Owner</div>
              </div>
            </div>
          </blockquote>
          <blockquote className="quote quote-boxed">
            <div className="quote-meta">
              <ul className="list-icons">
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star-half" />
                </li>
              </ul>
              <div className="time">2 days ago</div>
            </div>
            <q>
              I choose Bank Progress because I know they share my values of
              putting community first. Not only do they make banking easy, I see
              them out volunteering and investing in our community.
            </q>
            <div className="quote-author">
              <div className="author-media">
                <img
                  src="images/user-1-64x64.jpg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="author-body">
                <div className="author">
                  <cite>Marie Hanson</cite>
                </div>
                <div className="position">Charity Organization Manager</div>
              </div>
            </div>
          </blockquote>
          <blockquote className="quote quote-boxed">
            <div className="quote-meta">
              <ul className="list-icons">
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star" />
                </li>
                <li>
                  <div className="icon mdi mdi-star-half" />
                </li>
              </ul>
              <div className="time">2 days ago</div>
            </div>
            <q>
              When I needed financial assistance to expand my shop, I went
              directly to Bank Progress. Securing financing helped us renovate
              and expand my jewelry shop and attract more clients.
            </q>
            <div className="quote-author">
              <div className="author-media">
                <img
                  src="images/user-2-64x64.jpg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="author-body">
                <div className="author">
                  <cite>Mildred Bates</cite>
                </div>
                <div className="position">Jewelry Shop Owner</div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
    {/* Frequently Asked Questions*/}
    <section className="section section-lg">
      <div className="container text-center">
        <h2>Frequently Asked Questions</h2>
        <div className="row row-flex row-40 number-counter text-left">
          <div className="col-sm-12 col-lg-4 wow fadeIn">
            <div className="text-block-lined">
              <h5 className="title">
                What is the currency amount for the Blue Card?
              </h5>
              <p>
                The minimum amount that can be loaded on the card is $100 or
                equivalent amount in other currency. The maximum amount would be
                as per Bank Progress guidelines applicable from time to time.
                You can learn more about it by contacting our consultants using
                the form on our website or by calling us directly.
              </p>
              <h5 className="title">
                What steps do I take if my card gets lost?
              </h5>
              <p>
                If you lose your card please immediately contact our customer
                support center so that we could issue a new one as fast as
                possible.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 wow fadeIn">
            <div className="text-block-lined">
              <h5 className="title">
                Do I have to maintain any minimum balance?
              </h5>
              <p>
                It depends on the card you choose. For example, if you pick an
                Orange Card, you get a special waiver on the minimum balance
                requirement.
              </p>
              <h5 className="title">
                What security features does the mobile banking have?
              </h5>
              <p>
                Mobile browser-based banking is very similar to PC based
                internet banking. The respective mobile handset browser replaces
                a PC browser to access the banking services. Some of the
                important security measures in place are 128 bit SSL from
                VeriSign, https:// based access etc.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 wow fadeIn">
            <div className="text-block-lined">
              <h5 className="title">
                What kind of browser do I need for online banking?
              </h5>
              <p>
                Our Banking System supports all browsers. Some of the most
                popular ones are Chrome, Opera, Firefox, and Safari. If you are
                using Internet Explorer make sure the version of your browser is
                9.0 or higher.
              </p>
              <h5 className="title">
                Can I make online payments to foreign recipients?
              </h5>
              <p>
                Yes, you can! Our bank does not limit any payments to a certain
                country so whether you are using our online banking system or an
                app for your device, you can safely transfer any amount of money
                or purchase services and products.
              </p>
            </div>
          </div>
        </div>
        <div className="button-wrap-lg">
          <a className="button button-lg button-primary" href="#">
            View All Asked Questions
          </a>
        </div>
      </div>
    </section>
    {/* Call to action*/}
    <section className="section section-xs bg-primary-gradient">
      <div className="container">
        <div className="box-cta">
          <div className="box-cta-inner">
            <h3>
              Choose Your <span className="font-weight-bold">Bank Card</span>{" "}
              Now!
            </h3>
          </div>
          <div className="box-cta-inner">
            <a
              className="button button-lg button-primary-dark"
              href="#myModal"
              data-toggle="modal"
            >
              Order Card
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Latest Blog Posts*/}
    <section className="section section-lg bg-gray-100">
      <div className="container text-center">
        <h2>Latest Blog Posts</h2>
        <div className="row row-flex row-40 justify-content-center number-counter text-left wow fadeInUp">
          <div className="col-sm-6 col-lg-3">
            <article className="post-classic-2">
              <a className="media-wrapper" href="#">
                <img
                  src="images/masonry-blog-1-370x240.jpg"
                  alt=""
                  width={370}
                  height={240}
                />
              </a>
              <div className="post-meta-main">
                <div className="post-meta-item">
                  <ul className="list-tags">
                    <li>
                      <a className="tag" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="post-meta-item">
                  <div className="post-author">
                    <span>by</span> <a href="#">Martha Ryan</a>
                  </div>
                </div>
              </div>
              <h6 className="post-title">
                <a href="#">7 Banking Services That Can Save Retirees Money</a>
              </h6>
              <p className="post-exeption">
                Long gone are the days in which you need to visit a branch to do
                your banking. Today, banks offer an array of services...
              </p>
              <div className="post-date">2 days ago</div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-3">
            <article className="post-classic-2">
              <a className="media-wrapper" href="#">
                <img
                  src="images/masonry-blog-3-370x240.jpg"
                  alt=""
                  width={370}
                  height={240}
                />
              </a>
              <div className="post-meta-main">
                <div className="post-meta-item">
                  <ul className="list-tags">
                    <li>
                      <a className="tag" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="post-meta-item">
                  <div className="post-author">
                    <span>by</span> <a href="#">Lawrence Kelly</a>
                  </div>
                </div>
              </div>
              <h6 className="post-title">
                <a href="#">
                  Stocks Could Surge Another 10% Between Now And 2019
                </a>
              </h6>
              <p className="post-exeption">
                Experts point out that the next couple of months could become
                bumpy as the markets deal with uncertainty over factors such as
                tax reform, which is...
              </p>
              <div className="post-date">2 days ago</div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-3">
            <article className="post-classic-2">
              <a className="media-wrapper" href="#">
                <img
                  src="images/masonry-blog-5-370x240.jpg"
                  alt=""
                  width={370}
                  height={240}
                />
              </a>
              <div className="post-meta-main">
                <div className="post-meta-item">
                  <ul className="list-tags">
                    <li>
                      <a className="tag" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="post-meta-item">
                  <div className="post-author">
                    <span>by</span> <a href="#">Theresa Simpson</a>
                  </div>
                </div>
              </div>
              <h6 className="post-title">
                <a href="#">Wall Street Analysts Are Nailing It This Year</a>
              </h6>
              <p className="post-exeption">
                Wall Street analysts have made the right calls so far this year.
                Analysts' 50 most loved stocks at the start of the year are...
              </p>
              <div className="post-date">2 days ago</div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-3">
            <article className="post-classic-2">
              <a className="media-wrapper" href="#">
                <img
                  src="images/masonry-blog-2-370x240.jpg"
                  alt=""
                  width={370}
                  height={240}
                />
              </a>
              <div className="post-meta-main">
                <div className="post-meta-item">
                  <ul className="list-tags">
                    <li>
                      <a className="tag" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="post-meta-item">
                  <div className="post-author">
                    <span>by</span> <a href="#">Lawrence Kelly</a>
                  </div>
                </div>
              </div>
              <h6 className="post-title">
                <a href="#">
                  Cash Faces a New Challenger in Zelle, a Mobile Banking Service
                </a>
              </h6>
              <p className="post-exeption">
                After six years of laying a foundation, major banks are ready to
                introduce Zelle, a digital...
              </p>
              <div className="post-date">2 days ago</div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg bg-default" id="contact">
      <div className="container">
        <div className="row row-50 justify-content-between">
          <div className="col-md-6 col-lg-4 col-xl-3">
            {/* Bootstrap tabs*/}
            <div className="tabs-custom tabs-horizontal tabs-line" id="tabs-1">
              {/* Nav tabs*/}
              <ul className="nav nav-tabs">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    href="#tabs-1-1"
                    data-toggle="tab"
                  >
                    San Diego
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#tabs-1-2" data-toggle="tab">
                    New York
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#tabs-1-3" data-toggle="tab">
                    Chicago
                  </a>
                </li>
              </ul>
              {/* Tab panes*/}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tabs-1-1">
                  <ul className="contact-box">
                    <li>
                      <div className="unit unit-horizontal unit-spacing-xxs">
                        <div className="unit-left">
                          <span className="icon mdi mdi-map-marker" />
                        </div>
                        <div className="unit-body">
                          <a className="hover-text" href="#">
                            2130 Fulton Street,{" "}
                            <br className="veil reveal-lg-inline" />
                            San Diego, CA 94117-1080 USA
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="unit unit-horizontal unit-spacing-xxs">
                        <div className="unit-left">
                          <span className="icon mdi mdi-phone" />
                        </div>
                        <div className="unit-body">
                          <ul className="list-phones">
                            <li>
                              <a className="hover-text" href="tel:#">
                                1-800-1234-567
                              </a>
                            </li>
                            <li>
                              <a className="hover-text" href="tel:#">
                                1-800-1234-567
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="unit unit-horizontal unit-spacing-xxs">
                        <div className="unit-left">
                          <span className="icon mdi mdi-email-outline" />
                        </div>
                        <div className="unit-body">
                          <a className="hover-text" href="mailto:#">
                            info@demolink.org
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="tabs-1-2">
                  <ul className="contact-box">
                    <li>
                      <div className="unit unit-horizontal unit-spacing-xxs">
                        <div className="unit-left">
                          <span className="icon mdi mdi-map-marker" />
                        </div>
                        <div className="unit-body">
                          <a className="hover-text" href="#">
                            2130 Marshall Street,{" "}
                            <br className="veil reveal-lg-inline" />
                            New York, NY 65432-8767 USA
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="unit unit-horizontal unit-spacing-xxs">
                        <div className="unit-left">
                          <span className="icon mdi mdi-phone" />
                        </div>
                        <div className="unit-body">
                          <ul className="list-phones">
                            <li>
                              <a className="hover-text" href="tel:#">
                                1-800-1234-567
                              </a>
                            </li>
                            <li>
                              <a className="hover-text" href="tel:#">
                                1-800-1234-567
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="unit unit-horizontal unit-spacing-xxs">
                        <div className="unit-left">
                          <span className="icon mdi mdi-email-outline" />
                        </div>
                        <div className="unit-body">
                          <a className="hover-text" href="mailto:#">
                            info@demolink.org
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="tabs-1-3">
                  <ul className="contact-box">
                    <li>
                      <div className="unit unit-horizontal unit-spacing-xxs">
                        <div className="unit-left">
                          <span className="icon mdi mdi-map-marker" />
                        </div>
                        <div className="unit-body">
                          <a className="hover-text" href="#">
                            5432 Central Street,{" "}
                            <br className="veil reveal-lg-inline" />
                            Chicago, IL 43541-3243 USA
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="unit unit-horizontal unit-spacing-xxs">
                        <div className="unit-left">
                          <span className="icon mdi mdi-phone" />
                        </div>
                        <div className="unit-body">
                          <ul className="list-phones">
                            <li>
                              <a className="hover-text" href="tel:#">
                                1-800-1234-567
                              </a>
                            </li>
                            <li>
                              <a className="hover-text" href="tel:#">
                                1-800-1234-567
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="unit unit-horizontal unit-spacing-xxs">
                        <div className="unit-left">
                          <span className="icon mdi mdi-email-outline" />
                        </div>
                        <div className="unit-body">
                          <a className="hover-text" href="mailto:#">
                            info@demolink.org
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group group-middle social-items">
              <a
                className="icon icon-md icon-gray-400 novi-icon mdi mdi-facebook"
                href="#"
              />
              <a
                className="icon icon-md icon-gray-400 novi-icon mdi mdi-twitter"
                href="#"
              />
              <a
                className="icon icon-md icon-gray-400 novi-icon mdi mdi-instagram"
                href="#"
              />
              <a
                className="icon icon-md icon-gray-400 novi-icon mdi mdi-facebook-messenger"
                href="#"
              />
              <a
                className="icon icon-md icon-gray-400 novi-icon mdi mdi-linkedin"
                href="#"
              />
              <a
                className="icon icon-md icon-gray-400 novi-icon mdi mdi-snapchat"
                href="#"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <h4>Get in Touch</h4>
            {/* RD Mailform*/}
            <form
              className="rd-form rd-mailform"
              data-form-output="form-output-global"
              data-form-type="contact"
              method="post"
              action="bat/rd-mailform.php"
            >
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-name"
                  type="text"
                  name="name"
                  data-constraints="@Required"
                />
                <label className="form-label" htmlFor="contact-name">
                  Name
                </label>
              </div>
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-email"
                  type="email"
                  name="email"
                  data-constraints="@Email @Required"
                />
                <label className="form-label" htmlFor="contact-email">
                  E-mail
                </label>
              </div>
              <div className="form-wrap">
                <label className="form-label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  className="form-input"
                  id="contact-message"
                  name="message"
                  data-constraints="@Required"
                  defaultValue={""}
                />
              </div>
              <button className="button button-primary" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-12 col-lg-3">
            <div
              className="google-map-container"
              data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
              data-zoom={14}
              data-icon="images/gmap_marker.png"
              data-icon-active="images/gmap_marker_active.png"
              data-styles='[{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "landscape","elementType": "geometry.fill","stylers": [{"color": "#d5d5d5"}]},{"featureType": "landscape.man_made","elementType": "geometry.fill","stylers": [{"color": "#7574c0"},{"saturation": "-37"},{"lightness": "75"}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.business","elementType": "geometry.fill","stylers": [{"color": "#7574c0"},{"saturation": "-2"},{"lightness": "53"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#7574c0"},{"lightness": "69"}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#7574c0"},{"lightness": "25"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"lightness": "38"},{"color": "#000000"}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#e9e9e9"},{"lightness": 17}]}]'
            >
              <div className="google-map" />
              <ul className="google-map-markers">
                <li
                  data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                  data-description="9870 St Vincent Place, Glasgow"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Page Footer*/}
    <footer className="section footer-2">
      <div className="container">
        <div className="row row-40">
          <div className="col-md-6 col-lg-3">
            <a className="footer-logo" href="index.html">
              <img
                src="images/logo-105x51.png"
                alt=""
                width={105}
                height={51}
              />
            </a>
            <p>
              Bank Progress is the leading financial establishment providing
              high-quality international banking services. We are always ready
              to partner with you by offering full financial support to
              individuals and companies worldwide.
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="title">Contact Information</h5>
            <ul className="contact-box">
              <li>
                <div className="unit unit-horizontal unit-spacing-xxs">
                  <div className="unit-left">
                    <span className="icon mdi mdi-map-marker" />
                  </div>
                  <div className="unit-body">
                    <a href="#">
                      2130 Fulton Street,{" "}
                      <br className="veil reveal-lg-inline" />
                      San Diego, CA 94117-1080 USA
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="unit unit-horizontal unit-spacing-xxs">
                  <div className="unit-left">
                    <span className="icon mdi mdi-phone" />
                  </div>
                  <div className="unit-body">
                    <ul className="list-phones">
                      <li>
                        <a href="tel:#">1-800-1234-567</a>
                      </li>
                      <li>
                        <a href="tel:#">1-800-1234-567</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="unit unit-horizontal unit-spacing-xxs">
                  <div className="unit-left">
                    <span className="icon mdi mdi-email-outline" />
                  </div>
                  <div className="unit-body">
                    <a href="mailto:#">info@demolink.org</a>
                  </div>
                </div>
              </li>
            </ul>
            <div className="group-md group-middle social-items">
              <a className="icon icon-md novi-icon mdi mdi-facebook" href="#" />
              <a className="icon icon-md novi-icon mdi mdi-twitter" href="#" />
              <a
                className="icon icon-md novi-icon mdi mdi-instagram"
                href="#"
              />
              <a
                className="icon icon-md novi-icon mdi mdi-facebook-messenger"
                href="#"
              />
              <a className="icon icon-md novi-icon mdi mdi-linkedin" href="#" />
              <a className="icon icon-md novi-icon mdi mdi-snapchat" href="#" />
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="title">Gallery</h5>
            <ul
              className="instafeed instagram-gallery"
              data-lightgallery="group"
            >
              <li>
                <a
                  className="instagram-item"
                  data-lightgallery="item"
                  href="images/insta-gallery-1-original.jpg"
                >
                  <img
                    src="images/insta-gallery-1-72x72.jpg"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  data-lightgallery="item"
                  href="images/insta-gallery-2-original.jpg"
                >
                  <img
                    src="images/insta-gallery-2-72x72.jpg"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  data-lightgallery="item"
                  href="images/insta-gallery-3-original.jpg"
                >
                  <img
                    src="images/insta-gallery-3-72x72.jpg"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  data-lightgallery="item"
                  href="images/insta-gallery-4-original.jpg"
                >
                  <img
                    src="images/insta-gallery-4-72x72.jpg"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  data-lightgallery="item"
                  href="images/insta-gallery-5-original.jpg"
                >
                  <img
                    src="images/insta-gallery-5-72x72.jpg"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  data-lightgallery="item"
                  href="images/insta-gallery-6-original.jpg"
                >
                  <img
                    src="images/insta-gallery-6-72x72.jpg"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="title">Newsletter</h5>
            <p>
              Keep up with our always upcoming news and updates. Enter your
              e-mail and subscribe to our newsletter.
            </p>
            {/* RD Mailform*/}
            <form
              className="rd-form form-sm rd-mailform"
              data-form-output="form-output-global"
              data-form-type="contact"
              method="post"
              action="bat/rd-mailform.php"
            >
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="newsletter-email"
                  type="email"
                  name="email"
                  data-constraints="@Email @Required"
                />
                <label className="form-label" htmlFor="newsletter-email">
                  Enter your e-mail
                </label>
              </div>
              <button className="button button-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Rights*/}
        <p className="rights">
          <span>©&nbsp; </span>
          <span className="copyright-year" />
          <span>&nbsp;</span>
          <span>All rights reserved</span>
          <span>.</span>
        </p>
      </div>
    </footer>
    {/* Modal*/}
    <div className="modal fade" id="myModal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Order Card</h4>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body bg-default">
            <form
              className="rd-form rd-mailform"
              data-form-output="form-output-global"
              data-form-type="contact"
              method="post"
              action="bat/rd-mailform.php"
            >
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-name1"
                  type="text"
                  name="name"
                  data-constraints="@Required"
                />
                <label className="form-label" htmlFor="contact-name1">
                  Name
                </label>
              </div>
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-email1"
                  type="email"
                  name="email"
                  data-constraints="@Email @Required"
                />
                <label className="form-label" htmlFor="contact-email1">
                  E-mail
                </label>
              </div>
              <div className="form-wrap">
                <label className="form-label" htmlFor="contact-phone1">
                  Phone
                </label>
                <input
                  className="form-input"
                  id="contact-phone1"
                  type="text"
                  name="phone"
                  data-constraints="@Required @PhoneNumber"
                />
              </div>
              <button className="button button-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Global Mailform Output*/}
  <div className="snackbars" id="form-output-global" />
  {/* Javascript*/}
  {/*LIVEDEMO_00 */}
  {/* coded by barber*/}
  {/* Google Tag Manager */}
  <noscript>
    &lt;iframe src="//www.googletagmanager.com/ns.html?id=GTM-P9FT69" height="0"
    width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  {/* End Google Tag Manager */}
</>

            </div>
        );
    }
}
export default Home;
