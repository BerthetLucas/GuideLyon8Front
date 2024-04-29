import { RegistrationForm } from "@/components/logic/registrationForm";

export const Registration = () => {
  const formSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const config = {
      headers: {
        "Content-Type": "application/ld+json",
      },
    };

    axios
      .post("http://127.0.0.1:8000/api/users", values, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête POST:", error);
      });
  }

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
