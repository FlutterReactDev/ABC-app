import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

const settingSchema = object({
  company: string(),
  phoneNumber: string(),
  email: string().email(),
  telegram: string(),
  additionalEmail: string().email(),
});

export const SettingPage = () => {
  const form = useForm({
    resolver: yupResolver(settingSchema),
  });
  const { control } = form;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки профиля</CardTitle>
        <CardDescription>
          Здесь вы можете легко управлять параметрами, чтобы создать идеальное
          рабочее окружение
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 gap-2">
              <FormField
                control={control}
                name={"company"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Компания</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"phoneNumber"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"phoneNumber"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email для доп.уведомлений</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Сохранить изменения</Button>
      </CardFooter>
    </Card>
  );
};
