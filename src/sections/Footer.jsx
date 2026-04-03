import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Termos</p>
        <p>|</p>
        <p>Privacidade</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            className="flex items-center gap-2 hover:text-white"
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
            <span>{social.name}</span>
          </a>
        ))}
      </div>
      <p>© 2025 Kauan Bastos Mendes. Todos os direitos reservados.</p>
    </section>
  );
};

export default Footer;
