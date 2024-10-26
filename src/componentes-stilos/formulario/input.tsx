import { FieldError, Control, Controller, FieldValues, Path } from "react-hook-form";
import './input.css'

interface Props<T extends FieldValues> {
  name: Path <T>;
  control:Control<T>;
  label: string;
  tipo?:string;
  error?: FieldError;
  alingDerecha?: boolean; 
}

function Input<T extends FieldValues>({name, control, label, tipo, error, alingDerecha}:Props<T>) {
  return (
    <div className='inputs-span'>
        <div className={`inputs-entero ${error ? 'is-invalida' :''} ${alingDerecha ? 'alin-derecha' :''}`}>
      <Controller
        name={name}
        control={control}
        render={({field})=>
          <input 
        id={String(name)} 
        type={tipo} 
        placeholder={''} 
        autoComplete="off"
        {...field} 
        />}
      />
        <label htmlFor={String(name)}>{label}</label>
    </div>
      {error ? <span>{error.message}</span> : <span> </span>}
    </div>
  )
}
export default Input;
