import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="flex gap-10">
      <Link to='/' className="p-2 bg-slate-500 rounded-sm text-white">Home</Link>
      <Link to='/profil' className="p-2 bg-slate-500 rounded-sm text-white">Profil</Link>
    </nav>
  );
};
