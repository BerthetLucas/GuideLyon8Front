import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

export const Registration = () => {
  const formSchema = z.object({
    email: z.string(),
    password: z.string(),
    role: z.array(z.string()),
    id: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: ["ROLE_MEMBER"],
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse Email</FormLabel>
              <FormControl>
                <Input placeholder="E-Mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de Passe</FormLabel>
              <FormControl>
                <Input placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
