import './DashboardComponent.scss';
import { Link } from 'react-router-dom';

function Dashboardcomponent() {
  return (
    <div className='dashboard'>
      <h2>Explore</h2>
      <Link to='/bookings'>
        <div className='sittings dashboardcard'>
          <p>My bookings</p>
        </div>
      </Link>
      <Link to='/plus'>
        <div className='cardgroup'>
          <div className='plus halfcard'>
            <p>Plus</p>
          </div>
          <div className='volunteering halfcard'>
            <p>Volunteer</p>
          </div>
        </div>
      </Link>
      <div className='local dashboardcard'>
        <p>Find local sitters</p>
      </div>
      <div className='info dashboardcard'>
        <p>Learn about Bubble</p>
      </div>
    </div>
  );
}

export default Dashboardcomponent;
