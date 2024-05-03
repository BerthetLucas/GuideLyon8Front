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

export const DeleteShopForm = () => {
  const formSchema = z.object({
    commercialName: z.string(),
    streetName: z.string(),
    zipCode: z.string(),
    city: z.string(),
    type: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      commercialName: "",
      streetName: "",
      zipCode: "",
      city: "",
      type: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const token = localStorage.getItem("token");
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/ld+json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://127.0.0.1:8000/api/shops", values, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête POST:", error);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-5"
      >
        <FormField
          control={form.control}
          name="commercialName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>commercialName</FormLabel>
              <FormControl>
                <Input placeholder="E-Mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="streetName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>streetName</FormLabel>
              <FormControl>
                <Input placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>zipCode</FormLabel>
              <FormControl>
                <Input placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>type</FormLabel>
              <FormControl>
                <Input placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Créer mon compte</Button>
      </form>
    </Form>
  );
};
