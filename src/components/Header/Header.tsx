import { HeaderControls } from "../HeaderControls"
import { Link, Navigation } from "../Navigation"

export const Header = () => {
  const navLinks : Link[] = [
    {label: 'Главная', link: '/'},
    {label: 'Каталог', link: '/catalog'},
    {label: 'О магазине', link: '/about'},
    {label: 'Контакты', link: '/contacts'}
  ];

  return (
    <header>

      <div className="logo">
        <a href="/">
          <img src="/header-logo.png" alt="Bosa Noga"/>
        </a>
      </div>

      <Navigation links={navLinks} />
      <HeaderControls />

    </header>
  )
}
