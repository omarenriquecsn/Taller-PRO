import LogoTitle from "../Logo/LogoTitle";
import ArticleConImg from "./Article/ArticleConImg";
import style from "./PaginaDeArticles.module.css";

const PaginaDeArticles = () => {
  return (
    <div className={style.container}>
      <div>
        <LogoTitle />
      </div>
      <ArticleConImg
        Title="Nuestro Principal Servicio"
        Url="https://th.bing.com/th/id/OIP.u98i1VSj0HTrGOFCy0_JzgAAAA?rs=1&pid=ImgDetMain"
        Description="Somos especialistas en Reemplazo de Correas y Cadenas de distirbucion de cualquier marca y modelo de vehiculos en circulacion "
      />
      <ArticleConImg
        Title="Nuestro Personal"
        Url="https://articulos.elclasificado.com/wp-content/uploads/2008/03/mecanico-arreglando-auto.jpg"
        Description="Tenemos personal altamente calificado con mas de 10 años de experiencia. Disponemos de expertos especializado en motores, trasmisiones, frenos, electronica etc.."
      />
    </div>
  );
};

export default PaginaDeArticles;
