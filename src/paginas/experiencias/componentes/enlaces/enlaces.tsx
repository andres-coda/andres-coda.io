import './enlaces.css'
import EnlacePg from '../../../../assets/enlacepg.svg'
import EnlaceBack from '../../../../assets/enlaceBack.svg'
import EnlaceFront from '../../../../assets/enlaceFront.svg'

interface Props {
  enlace: string | undefined;
  enlaceGitBack: string | undefined;
  enlaceGitFront: string | undefined;
}

function Enlaces({ enlace, enlaceGitBack, enlaceGitFront }: Props) {
  return (
    <div className="exp-enlaces">
      <h6><a href={enlace} target="_blank" rel="noopener noreferrer" title="Enlace para acceder a la página">
          <img src={EnlacePg} alt='Enlace para acceder a la página' />
        </a></h6>
      <h6><a href={enlaceGitFront} target="_blank" rel="noopener noreferrer" title="Enlace para acceder al git del Frontend">
        <img src={EnlaceFront} alt='Enlace para acceder al git del Frontend' />
        </a></h6>
      <h6><a href={enlaceGitBack} target="_blank" rel="noopener noreferrer" title="Enlace para acceder al git del Backend">
        <img src={EnlaceBack} alt='Enlace para acceder al git del Backend' />
      </a></h6>
    </div>
  )
}

export default Enlaces