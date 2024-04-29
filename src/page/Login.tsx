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

export const Login = () => {
  const formSchema = z.object({
    user: z.string(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  function hasToken() {
    const storedToken = localStorage.getItem("authToken");
    return storedToken !== null;
  }

  function getToken() {
    return localStorage.getItem("authToken");
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: "" as string | null,
      },
    };

    if (hasToken()) {
      config.headers["token"] = getToken();
    }

    axios
      .post("http://127.0.0.1:8000/api/login", values, config)
      .then((response) => {
        localStorage.setItem("authToken", response.data.token);
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
          name="user"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
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
