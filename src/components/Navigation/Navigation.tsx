import { NavLink } from "react-router-dom"

export type Link  = {
  label : string,
  link : string
}

interface INavItemProps {
  label : string,
  link : string
}

interface INavigation {
  links : Link[]
}

export const Navigation : React.FC<INavigation> = ({links}) => {
  return (
    <div className="navigation">
      <ul>
        {links.map(l => {
          return <NavItem key={l.label} label={l.label} link={l.link} />
        })}
      </ul>
    </div>
  )
}

export const NavItem : React.FC <INavItemProps> = ({label, link}) => {
  const active = ({ isActive } : { isActive : boolean }) => isActive ? 'active' : '';
  return (
    <li className='nav-item'>
      <NavLink className={active} to={link}>{label}</NavLink>
    </li>
  )
}
