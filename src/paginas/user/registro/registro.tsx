import { useForm } from "react-hook-form";
import Formulario from "../../../componentes-stilos/formulario/formulario";
import Input from "../../../componentes-stilos/formulario/input";
import { FormValues, login } from "../../../modelos/esquemas/login.esquema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

function Registro(){
    const { control, handleSubmit, reset, formState: {errors}} = useForm<FormValues>({
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

    return(
        <Formulario
            titulo={'Registrarse'}
            onSubmit={handleSubmit(onSubmit)} 
            onReset={reset}
            >
            <>
                <Input<FormValues> name='nombre' control={control} label='Nombre' tipo='text' error={errors.nombre}/>
                <Input<FormValues> name='email' control={control} label='Email' tipo='email' error={errors.email}/>
                <Input<FormValues> name='password' control={control} label='Contraseña' tipo='password' error={errors.password}/>
                <Input<FormValues> name='confirPassword' control={control} label='Confirmar contraseña' tipo='password' error={errors.confirPassword}/>
                </>
        </Formulario>  
    )
}

export default Registro;   
