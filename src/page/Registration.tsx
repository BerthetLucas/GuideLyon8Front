import { RegistrationForm } from "@/components/logic/registrationForm";


export const Registration = () => {
  

  return (
    <>
      <section className=" h-screen flex flex-row items-center justify-center">
        <img src="public/img/main.jpg" className="w-1/2 rounded-r-md" />
        <div className="w-1/2 flex items-center justify-center">
          <RegistrationForm />
        </div>
      </section>
    </>
  );
};
