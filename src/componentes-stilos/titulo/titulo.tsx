import './titulo.css'

interface Props{
    titulo?:string;
    subtitulo?:string;
    clase?:string;
}

function Titulo({titulo, subtitulo, clase}: Props) {
  return (
    <>
    {titulo 
        ?<h1 className={`titulo ${clase ? clase : ''}`}>{titulo}</h1>
        :<h2 className={`subtitulo ${clase ? clase : ''}`}>{subtitulo}</h2>
    }
    </>
  )
}

export default Titulo