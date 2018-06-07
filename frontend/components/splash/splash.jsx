import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Splash = () => {
  const data = [{ name: 'Jan', price: 0 }, {name: 'Feb', price: 1 },
  {name: 'Mar', price: 2 }, {name: 'Apr', price: 3 },
  {name: 'May', price: 6 }, {name: 'Jun', price: 12 },
{name: 'Jul', price: 20 }, {name: 'Aug', price: 24 },
{name: 'Sept', price: 38 }, {name: 'Nov', price: 55 },
{name: 'Dec', price: 97}];

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
        </ul>
        </div>
      </div>

      <div className='container'>
        <LineChart className="chart" width={550} height={325} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#21ce99" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="price" stroke="#21ce99" />
          <Tooltip />
        </LineChart>

        <div className='text1'>
          <h1>Investing.</h1>
          <h1>For the millenials.</h1>
          <h4>Wallstreetbets lets you take risk in the market for free.</h4>
          <Link className='signupbutton' to="/signup">Sign Up</Link>
        </div>
      </div>

      <div className='container2'>
        <img className='dollabill' src='/assets/cashmoney.jpg'/>
        <div className='text2'>
          <h1>Invest for free.</h1>
          <h3>We believe that that everyone should have a chance at becoming a degenerate, not just the degenerates.</h3>
          <h3>We've cut costs in other aspects of trading to allow for commission free order fills.</h3>
        </div>
      </div>

      <div className='container3'>
        <img className='map' src='/assets/worldmap.jpg'/>
        <div className='text3'>
          <h1>Have no fear.</h1>
          <h3>We've designed our application to be accessible to all ages, so that the young and old alike can ride the rocket ship to the moon.</h3>
          <h3>It's fast, dead simple and just works.</h3>
        </div>
      </div>

    </div>
  );
};

export default Splash;
