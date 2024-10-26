export interface Imagenes {
  titulo: string; 
  img: string;
};

export interface SobreMi{
    img: string;
    titulo: string;
    descripcion: { desp: string }[];
  };

export  interface Habilidades{
    logo: string;
    titulo:string;
}

  
export interface Experiencia{
    nombre: string;
    enlaceGitFront?: string;
    enlaceGitBack?: string;
    enlace?: string;
    img: Imagenes[];
    descripcion?: string[];
    año:string;
    resumen?:string;
    tecn?:Habilidades[];
  };
  
export interface DB {
    experiencias: Experiencia[];
    sobreMi: SobreMi;
    tecno:Habilidades[];
  };
  