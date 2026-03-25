import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              } end>Home</NavLink >

          </li>
          <li>
            <NavLink to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              } end>Events</NavLink >

          </li>
          {/* <li>
            <NavLink to="/events/:id"
              className={({ isActive }) =>
                isActive ? classes.active : undefined}
            > EventDetailPage</NavLink>
          </li>
          <li>
            <NavLink to="/events/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined}>NewEventPage</NavLink>
          </li>
          <li>
            <NavLink to="/events/:id/edit"
              className={({ isActive }) =>
                isActive ? classes.active : undefined}>EditEventPage</NavLink>
          </li> */}
        </ul>
      </nav>
    </header >
  );
}

export default MainNavigation;
