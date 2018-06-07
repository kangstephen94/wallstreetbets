import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';

class Splash extends React.Component  {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    console.log(this.props);
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
        <img src='/assets/wallstreet.jpg'/>
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
        <LineChart className="chart" width={550} height={325} data={data} margin={{ top: 5, right: 20, bottom: 20, left: 5 }}>
          <Line type="monotone" dataKey="uv" stroke="#21ce99" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name">
            <Label value="Portfolio Value" offset={-15} position="insideBottom" />
        </XAxis>
          <YAxis />
          <Line type="monotone" dataKey="assets" stroke="#21ce99" />
          <Tooltip />
        </LineChart>

        <div className='text1'>
          <h1>Investing.</h1>
          <h1>For the millenials.</h1>
          <h4>Wallstreetbets lets you take part in the stock market for free.</h4>
          <Link className='signupbutton' to="/signup">Sign Up</Link>
        </div>
      </div>

      <div className='container2'>
        <img className='dollabill' src='/assets/cashmoney.jpg'/>
        <div className='text2'>
          <h1>Invest for free.</h1>
          <h3>We believe that that everyone should have a chance at becoming rich, and what better way to do it than by offering commission free trades?</h3>
          <h3>Spend less money on fees, and more on investing.</h3>
        </div>
      </div>

      <div className='container3'>
        <img className='map' src='/assets/worldmap.jpg'/>
        <div className='text3'>
          <h1>Have no fear.</h1>
          <h3>We've designed our application to be accessible to all ages, so that the young and old alike can invest into their future.</h3>
          <h3>It's fast, dead simple and just works.</h3>
        </div>
      </div>

    </div>
  );
}
}
export default Splash;
