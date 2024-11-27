import './contacto.css'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { ContactoValues, contacto } from '../../modelos/esquemas/contacto.esquema.ts'
import Formulario from "../../componentes-stilos/formulario/formulario.tsx";
import Input from "../../componentes-stilos/formulario/input.tsx";
import TextArea from "../../componentes-stilos/formulario/textArea.tsx";
import useApi from "../../hooks/servicios/useApi.tsx";
import { BtnColor } from "../../componentes-stilos/boton/boton.tsx";
import useRetardo from "../../hooks/tiempo/useRetardo.tsx";

interface Respuesta {
    success: boolean;
    message: string;
}

const url:string = 'https://formspree.io/f/mrbgebvj'

function Contacto() {
  const {fetchData, loading, errorFetch, response} = useApi<ContactoValues, Respuesta>();
  const [ respCorrecta, setRespCorrecta] = useState('')
  const [clasBtn, setClasBtn] = useState<BtnColor | null>(null)
  const { control, handleSubmit, reset, formState: { errors } } = useForm<ContactoValues>({
    resolver: zodResolver(contacto),
    defaultValues: {
      name:'',
      email: '',
      subject:'',
      message: ''
    }
  });

  const cambioBtn = ():void => {
    setRespCorrecta('');
    setClasBtn(null);
    reset()
  }

  const setRespCorrectaRetardo = useRetardo(cambioBtn, 2000)

  useEffect(() => {
    if (response) {
      setRespCorrecta('Mensaje enviado');
      setRespCorrectaRetardo();
    }
  }, [loading, response])

  const onSubmit = (data: ContactoValues) => {
    fetchData({
      url:url,  
      bodyData: { bodyData: data }, 
      methodo: 'POST', 
    });
    setClasBtn('deshabilitado');
    reset();
  }

  return (
    <div className="contacto">
      <Formulario
        titulo={'Contacto'}
        onSubmit={handleSubmit(onSubmit)}
        onReset={reset}
        textBtnConfirmar={
          loading
          ? 'Enviando mensaje'
          : errorFetch 
            ? errorFetch
            : respCorrecta 
              ? respCorrecta
              : 'Confirmar'
        }
        clasBtn={clasBtn}
      >
        <>
          <Input<ContactoValues> name='name' control={control} label='Nombre' tipo='text' error={errors.name} />
          <Input<ContactoValues> name='email' control={control} label='Email' tipo='email' error={errors.email} />
          <Input<ContactoValues> name='subject' control={control} label='Asunto' tipo='text' error={errors.subject} />
          <TextArea<ContactoValues> name='message' control={control} label='Mensaje' error={errors.message} />
        </>
      </Formulario>
    </div>
  )
}

export default Contacto;   
