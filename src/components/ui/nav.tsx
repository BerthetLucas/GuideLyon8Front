import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Nav = () => {
  return (
    <nav className="flex justify-around">
      <div className="flex gap-10">
        <Link to="/" className="text-primary">
          Home
        </Link>
        <Link to="/profil" className="text-primary">
          Profil
        </Link>
        <Link to="/registration" className="text-primary">
          Crée compte
        </Link>
        <Link to="/login" className="text-primary">
          Se connecter
        </Link>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="public/img/main.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
