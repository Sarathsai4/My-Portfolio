import { contactEmail } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex flex-wrap gap-2">
        <a href="#home" className="hover:text-white">Home</a>
        <p>|</p>
        <a href="#/data-analyst" className="hover:text-white">Data Analyst</a>
        <p>|</p>
        <a href="#/data-engineer" className="hover:text-white">Data Engineer</a>
      </div>
      <a className="hover:text-white" href={`mailto:${contactEmail}`}>{contactEmail}</a>
      <p>&copy; 2026 Sarath Sai Grandhe. All rights reserved.</p>
    </section>
  );
};

export default Footer;
