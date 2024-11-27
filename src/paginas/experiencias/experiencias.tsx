import { Experiencia } from "../../modelos/interfaces/db.interface";
import ExpCard from "./componentes/card/expCard";
import './experiencias.css'
import Titulo from "../../componentes-stilos/titulo/titulo";

const dbJson:Experiencia[] =  [
      {
          "nombre": "Delivery copy",
          "enlaceGitFront":"https://github.com/andres-coda/appTauriFotocopiadora.git",
          "enlaceGitBack":"https://github.com/andres-coda/api-rest.git",
          "enlace": "",
          "año":"Junio 2024 - Octubre 2024",
          "img": [
              {
                  "titulo":"Delivery copy",
                  "img":"/src/assets/deliverycopy1.jpeg"
              },
              {
                  "titulo":"Delivery copy",
                  "img":"/src/assets/deliverycopy2.jpeg"
              },
              {
                  "titulo":"Delivery copy",
                  "img":"/src/assets/deliverycopy3.jpeg"
              },
              {
                  "titulo":"Delivery copy",
                  "img":"/src/assets/deliverycopy4.jpeg"
              }
          ],
          "descripcion":[
              "Es un proyecto freelance que fue boceteado y diseñado en Figma con la ayuda de Morena Coda. La aplicación es de escritorio porque necesitaba estar desplegada sobre otras pantallas, lo que permite trabajar sin tener que intercambiar pestañas constantemente.",
              "En el backend, desarrollé una API utilizando Node.js y NestJS, empleando TypeScript como lenguaje de programación y TypeORM como tecnología de persistencia. Tanto la API como la base de datos relacional MySQL están desplegadas en DonWeb Cloud. También implementé validaciones utilizando Pipes y utilicé Sockets y transacciones para mejorar la gestión de datos.",
              "En el frontend, utilicé React.js, junto con JavaScript, HTML y CSS, para desarrollar cada una de las pantallas y sus funcionalidades, y empleé React Router para gestionar el enrutado. Además, realicé refactorización de código implementando custom hooks.",
              "La aplicación está construida con Tauri, lo que le permite funcionar como una aplicación de escritorio."
          ],
          "resumen": "Es una aplicación de escritorio desarrollada para gestionar libros y pedidos en una fotocopiadora. Actualmente, se encuentra en producción. La app permite la carga, edición y eliminación de usuarios, libros, pedidos, escuelas y precios. Además, incluye filtros por fecha de pedidos, estado del pedido y libros.",
          "tecn":[{
              "logo" : "/src/assets/logoJs.svg",
              "titulo" : "JavaScript"
          },{
              "logo" : "/src/assets/logoTs.svg",
              "titulo" : "TypeScript"
          },{
              "logo" : "/src/assets/logoSql.svg",
              "titulo" : "Sql"
          },{
              "logo" : "/src/assets/logoHtml.svg",
              "titulo" : "HTML"
          },{
              "logo" : "/src/assets/logoCss.svg",
              "titulo" : "CSS"
          },{
              "logo" : "/src/assets/react.svg",
              "titulo" : "React Js"
          },{
              "logo" : "/src/assets/logoNode.svg",
              "titulo" : "Node Js"
          },{
              "logo" : "/src/assets/logoNest.svg",
              "titulo" : "Nest Js"
          },{
              "logo" : "/src/assets/logoGit.svg",
              "titulo" : "Git"
          },{
              "logo" : "/src/assets/logoFigma.svg",
              "titulo" : "Figama"
          }]
      },{
          "nombre": "Cervecería Green Beer",
          "enlaceGitFront":"https://github.com/andres-coda/cerveceriaFrontEnd",
          "enlaceGitBack":"https://github.com/Facundo-Alvarez-Torriglia/cerveceriaBackend2024.git",
          "enlace": "https://greenbeercerveceria-e4fdb.firebaseapp.com",
          "año":"Septiembre 2023 - Julio 2024",
          "img": [
              {
                  "titulo":"Portada y carrusel",
                  "img":"/src/assets/cerveceria1.svg"
              },
              {
                  "titulo":"Lista de productos",
                  "img":"/src/assets/cerveceria2.svg"
              },
              {
                  "titulo":"Perfil de usuarios",
                  "img":"/src/assets/cerveceria4.svg"
              },
              {
                  "titulo":"Lista de pedidos",
                  "img":"/src/assets/cerveceria5.svg"
              }
          ],
          "descripcion":[
              "La página fue diseñada y boceteada en Figma, previo estudio de e-commerce de empresas similares. Cuenta con tres tipos de autorización: el usuario sin iniciar sesión, que puede ver los productos y detalles de la empresa; el usuario registrado, que puede hacer lo anterior y además realizar pedidos, revisar y modificar su perfil, y ver un historial de pedidos; y el usuario administrador, que puede hacer lo anterior y además modificar productos, pedidos y ver la lista de usuarios registrados.",
              "En el backend, desarrollamos una API utilizando Node.js y NestJS, empleando TypeScript como lenguaje de programación y TypeORM como tecnología de persistencia, así como una base de datos relacional desplegada en Cockroach Labs. La API está alojada en Render.",
              "En el frontend, utilizamos React.js, junto con JavaScript, HTML y CSS, para desarrollar cada una de las pantallas y sus funcionalidades, y usamos React Router para gestionar el enrutado. El frontend está desplegado en Firebase.",
              "Para dividirnos las tareas, trabajamos con GitHub y Trello, lo que facilitó la colaboración y la gestión del proyecto.",
              "La aplicación emplea guardias de autenticación (UseGuards()) para proteger las rutas y gestionar el acceso de dos tipos de usuarios con diferentes niveles de privilegios. Además, incluye un carrito de compras funcional, la capacidad de realizar reservas y soporte para pagos a través de medios digitales, aunque estos últimos son simulados."
          ],
          "resumen": "Este proyecto fue desarrollado en colaboración con Carla Arean, Facundo Álvarez Torriglia y Juan Curutchet, en el marco de la tecnicatura en Desarrollo Web Full Stack, dictada por el Cluster Informático de Tandil. La página es un e-commerce de una cervecería artesanal.",
          "tecn":[{
              "logo" : "/src/assets/logoJs.svg",
              "titulo" : "JavaScript"
          },{
              "logo" : "/src/assets/logoTs.svg",
              "titulo" : "TypeScript"
          },{
              "logo" : "/src/assets/logoSql.svg",
              "titulo" : "Sql"
          },{
              "logo" : "/src/assets/logoHtml.svg",
              "titulo" : "HTML"
          },{
              "logo" : "/src/assets/logoCss.svg",
              "titulo" : "CSS"
          },{
              "logo" : "/src/assets/react.svg",
              "titulo" : "React Js"
          },{
              "logo" : "/src/assets/logoNode.svg",
              "titulo" : "Node Js"
          },{
              "logo" : "/src/assets/logoNest.svg",
              "titulo" : "Nest Js"
          },{
              "logo" : "/src/assets/logoGit.svg",
              "titulo" : "Git"
          },{
              "logo" : "/src/assets/logoFigma.svg",
              "titulo" : "Figama"
          }]
      },{
          "nombre": "Tormenta espacial",
          "enlaceGitFront":"https://github.com/andres-coda/tormenta-espacial.git",
          "enlaceGitBack":"",
          "enlace": "https://andres-coda.github.io/tormenta-espacial.github.io/",
          "año":"Mayo 2023 - Junio 2023",
          "img": [
              {
                  "titulo":"Tormenta espacial",
                  "img":"/src/assets/juego1.png"
              },
              {
                  "titulo":"Tormenta espacial",
                  "img":"/src/assets/juego2.png"
              },
              {
                  "titulo":"Tormenta espacial",
                  "img":"/src/assets/juego3.png"
              },
              {
                  "titulo":"Tormenta espacial",
                  "img":"/src/assets/juego4.png"
              }
          ],
          "descripcion":[
              "Colaboré en el desarrollo del juego Tormenta Espacial, creado por Morena Coda. Este proyecto, realizado completamente en Processing, fue parte de la materia Tecno de la carrera Diseño Multimedial. Mi enfoque principal fue programar el movimiento y las colisiones. Las imágenes fueron tomadas de Internet y editadas en Photoshop por Morena."
          ],
          "resumen": "Colaboré en el desarrollo del juego Tormenta Espacial junto a Morena Coda, utilizando Processing. Este proyecto fue realizado como parte de la materia Tecnologías Multimedia en la carrera de Diseño Multimedia en la Universadad Nacional de La Plata.",
          "tecn":[
              {
              "logo" : "/src/assets/logoProsessing.svg?raw",
              "titulo" : "Processing"
          },{
              "logo" : "/src/assets/logoHtml.svg?raw",
              "titulo" : "HTML"
          },{
              "logo" : "/src/assets/logoCss.svg?raw",
              "titulo" : "CSS"
          }]
      }
      
  ]

function Experiencias() {
	const db: Experiencia[]= dbJson;
	return (
        <>
            <Titulo titulo="Experiencias" />
		<article className='experiencias'>
			{db.map((exp, index) => (
                <ExpCard 
                img={exp.img}
                año={exp.año}
                enlace={exp.enlace}
                enlaceGitBack={exp.enlaceGitBack}
                enlaceGitFront={exp.enlaceGitFront}
                nombre={exp.nombre}
                descripcion={exp.descripcion} 
                resumen={exp.resumen}
                tecn={exp.tecn}               
                key={`exp-${index}`} 
                />
			))}
		</article>
            </>
	)
}
export default Experiencias;