import { RegistrationForm } from "@/components/logic/registrationForm";
import { Nav } from "@/components/ui/nav";

export const Registration = () => {
  return (
    <>
  
    <Nav />
  
     <section className=" h-screen flex flex-row items-center justify-center">
      <img src="public/img/main.jpg" className="w-1/2 rounded-r-md" />
      <div className="w-1/2 flex items-center justify-center">
        <RegistrationForm />
      </div>
    </section>
    
    </>
   
  );
};
