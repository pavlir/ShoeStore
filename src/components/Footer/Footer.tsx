import { Link, Navigation } from "../Navigation";
import { Section } from "../Section";
import "./style.css"

export const Footer = () => {
  const navLinks : Link[] = [
    {label: "О магазине", link: "/about"},
    {label: "Каталог", link: "/catalog"},
    {label: "Контакты", link: "/contacts"}
  ];

  return (
    <footer className="footer">

      <div>
        <Section>
          <h5>Информация</h5>
          <Navigation links={navLinks} />
        </Section>
      </div>

      <div>
         <Section>
          <h5>Принимаем к оплате:</h5>
          <div className="footer-pay">
              <div className="footer-pay-systems footer-pay-systems-paypal"></div>
              <div className="footer-pay-systems footer-pay-systems-master-card"></div>
              <div className="footer-pay-systems footer-pay-systems-visa"></div>
              <div className="footer-pay-systems footer-pay-systems-yandex"></div>
              <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
              <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
            </div>
        </Section>
        <Section>
          <div className="footer-copyright">
            2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены.<br />Доставка по всей России!
          </div>
        </Section>
      </div>

      <div>
        <Section classSection="footer-contacts">
          <h5>Контакты:</h5>
          <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
            <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
          <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
          <div className="footer-social-links">
            <div className="footer-social-link footer-social-link-twitter"></div>
            <div className="footer-social-link footer-social-link-vk"></div>
          </div>
        </Section>
      </div>
      
    </footer>
  )
}
