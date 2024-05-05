import { Button } from "./button";
import { CardPicture } from "./cardPicture";

export const Card = () => {
  return (
    <div className="flex flex-col w-1/3 items-center justify-center border border-black rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 ">
      <div className="h-56 overflow-hidden flex justify-center items-center">
        <CardPicture
          url="https://images.unsplash.com/photo-1602719092282-f027126b6b74?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alter="Image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 h-56">
        <p className='font-bold'>Nom de l'établissement</p>
        <p>Adresse de l'établissement</p>
        <Button>Voir</Button>
      </div>
    </div>
  );
};
