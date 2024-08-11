import { useRegisterMutation } from "@/api/Auth";
import { RegisterForm } from "@/components/forms/register-form";
import { registerSchema } from "@/components/forms/register-form/schema";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { LoadingButton } from "@/components/ui/loading-button";
import { nestedForm } from "@/lib/nested-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { InferType, object } from "yup";

const schema = object({
    register: registerSchema,
});
export const Register = () => {
    const [register, { isLoading }] = useRegisterMutation();
    const form = useForm({
        resolver: yupResolver(schema),
    });
    const onRegister = async (data: InferType<typeof schema>) => {
        try {
            const response = await register({
                ...data.register,
                reg_tg: "12321",
            }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full h-dvh flex items-center justify-center px-4">
            <Card className="border-0 rounded-3xl max-w-4xl w-full">
                <CardHeader className="px-11 py-10">
                    <CardTitle>Регистрация пользователя</CardTitle>
                    <CardDescription>
                        Введите данные учетной записи для авторизации
                    </CardDescription>
                </CardHeader>
                <form onSubmit={form.handleSubmit(onRegister)}>
                    <Form {...form}>
                        <CardContent className="px-11 pt-0">
                            <RegisterForm form={nestedForm(form, "register")} />
                            <LoadingButton
                                loading={isLoading}
                                type="submit"
                                className="w-full mt-10 h-12"
                            >
                                Авторизаться
                            </LoadingButton>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4 px-11">
                            <div className="flex items-center justify-center w-full">
                                <p>У вас уже есть учетная запись?</p>
                                <Link to="/login">
                                    <Button variant={"link"}>
                                        Авторизоваться
                                    </Button>
                                </Link>
                            </div>
                            <div className="relative w-full">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Помощь
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <Button
                                    className="w-full h-12"
                                    variant={"outline"}
                                >
                                    @testname
                                </Button>
                                <Button
                                    className="w-full h-12"
                                    variant={"outline"}
                                >
                                    <Phone />
                                    +7 (777) 777-77-77
                                </Button>
                            </div>
                        </CardFooter>
                    </Form>
                </form>
            </Card>
        </div>
    );
};
