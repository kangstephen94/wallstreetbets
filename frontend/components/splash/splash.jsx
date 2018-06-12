import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { AreaChart, Area, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';

class Splash extends React.Component  {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  hover () {
    const element = document.getElementById('my-img');
    console.log(element);
    element.setAttribute('src', 'https://image.ibb.co/dt16oT/wallstreet_hover.png');
  }

  unhover() {
    const element = document.getElementById('my-img');
    element.setAttribute('src', 'https://image.ibb.co/gzyVF8/wallstreet.png');
  }

  handleClick (e) {
    e.preventDefault();
    this.props.login(this.props.user);
  }

  render () {
    const data = [{ name: 'Jan', assets: 2000 }, {name: 'Feb', assets: 3000 },
    {name: 'Mar', assets: 5000 }, {name: 'Apr', assets: 6000 },
    {name: 'May', assets: 7000 }, {name: 'Jun', assets: 12000 },
    {name: 'Jul', assets: 20000 }, {name: 'Aug', assets: 24000 },
    {name: 'Sept', assets: 38000 }, {name: 'Nov', assets: 55000 },
    {name: 'Dec', assets: 97000}];

    return (
      <div className="splash">
        <div className="splash-nav">
          <div className="splash-nav-content">
            <Link to='/'><img id="my-img" src='https://image.ibb.co/gzyVF8/wallstreet.png' onMouseOver={this.hover} onMouseOut={this.unhover} />
          </Link>
          <ul className="links">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><a href=''>Careers</a></li>
            <li><a href=''>Help</a></li>
            <li><a href='' onClick={this.handleClick}>Demo</a></li>
          </ul>
        </div>
      </div>

      <div className='container'>
        <AreaChart width={575} height={300} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#21ce99" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#21ce99" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="assets" stroke="#21ce99" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>


        <div className='text1'>
          <h1>Investing.</h1>
          <h1>For the millenials.</h1>
          <h4>Wallstreetbets lets you take part in the stock exchange for free.</h4>
          <Link className='signupbutton' to="/signup">Sign Up</Link>
        </div>
      </div>

      <div className='container2'>
        <img className='dollabill' src="https://image.ibb.co/edYaho/cashmoney.png"/>
        <div className='text2'>
          <h1>Invest for free.</h1>
          <h3>We believe that that everyone should have a chance at becoming rich, and what better way to do it than by offering commission free trades?</h3>
          <h3>Spend less money on fees, and more on investing.</h3>
        </div>
      </div>

      <div className='container3'>
        <img className='map' src='https://image.ibb.co/jpVz8T/worldmap.png'/>
        <div className='text3'>
          <h1>Have no fear.</h1>
          <h3>We've designed our trading platform to be accessible to all ages, so that the young and old alike can invest into their future.</h3>
          <h3>It's fast, dead simple and just works.</h3>
        </div>
      </div>

      <section className='footer'>
        <div className='footer-container'>
        <a href='https://www.linkedin.com/in/hyunkang7/' target='_blank'><img className='linkedin' src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/linkedin.png"/></a>
        <a href='https://github.com/kangstephen94' target='_blank'><img className='github' src="https://preview.ibb.co/gGXv08/github_green.png"/></a>
        <a href='https://twitter.com/skangbangg' target='_blank'><img className='linkedin' src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/twitter.png"/></a>
        <a href='https://www.facebook.com/stephen.kang1' target='_blank'><img className='linkedin' src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/facebook.png"/></a>
       </div>
      </section>
    </div>
  );
}
}
export default Splash;
