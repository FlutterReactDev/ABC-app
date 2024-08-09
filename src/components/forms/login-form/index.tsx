import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { NestedForm } from "@/lib/nested-form";
import { LoginType } from "./schema";
import { FC } from "react";
import { FormLabel } from "@chakra-ui/react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/atoms/password-input";
interface LoginFormProps {
    form: NestedForm<LoginType>;
}
export const LoginForm: FC<LoginFormProps> = ({ form }) => {
    const { control, path } = form;
    return (
        <div className="grid grid-cols-1 gap-3">
            <FormField
                control={control}
                name={path("email")}
                render={() => {
                    return (
                        <FormItem>
                            <FormLabel className="font-medium">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите ваш email"  className="h-12"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    );
                }}
            />
            <FormField
                control={control}
                name={path("email")}
                render={() => {
                    return (
                        <FormItem>
                            <FormLabel className="font-medium">Пароль</FormLabel>
                            <FormControl>
                                <PasswordInput placeholder="Введите ваш пароль" className="h-12"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    );
                }}
            />
        </div>
    );
};
