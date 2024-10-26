import { useForm } from "react-hook-form";
import Formulario from "../../../componentes-stilos/formulario/formulario";
import Input from "../../../componentes-stilos/formulario/input";
import { FormValues, login } from "../../../modelos/esquemas/login.esquema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

function Login(){
    const { control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(login),
        defaultValues: {
            nombre: '', 
            email: '',
            password: '',
            confirPassword: ''
        }
    });

    useEffect(()=>{
        console.log(errors);
        
    },[errors])

    const onSubmit=(data:FormValues)=>{
        console.log(data);
        
    }

    const onSecundario = () => {
        console.log('Olvide contraseña');
    }

    return(
        <Formulario
            titulo={'Iniciar sesión'}
            onSubmit={handleSubmit(onSubmit)} 
            textBtnConfirmar="Iniciar sesión"
            textBtnSecundario="Olvide contraseña"
            onClickSecundario={onSecundario}
            >
            <>
                <Input<FormValues> name='email' control={control} label='Email' tipo='email' error={errors.email}/>
                <Input<FormValues> name='password' control={control} label='Contraseña' tipo='password' error={errors.password}/>
                </>
        </Formulario>  
    )
}

export default Login;   