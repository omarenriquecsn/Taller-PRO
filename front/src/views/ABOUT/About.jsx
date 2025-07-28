import ArticleConImg from "../../components/Articles/Article/ArticleConImg";

const About = () => {
  return (
    <div>
      <ArticleConImg
        Title={"Bienvenidos a Taller Omar Contreras"}
        Description={
          "En nuestro Taller, nos dedicamos a proporcionar servicios de reparación y mantenimiento automotriz de alta calidad. Con más de 10 años de experiencia en la industria, nuestro objetivo es brindar a nuestros clientes la tranquilidad y la seguridad de que sus vehículos están en las mejores manos."
        }
        Url="src\assets\6HgzjerzQkWYy-kg-pVd6g.png"
      />
      <ArticleConImg
        Title={"Nuestros Servicios"}
        Description={`
          Reparación de motores, \n
          Mantenimiento preventivo, \n
          Diagnóstico, \n
          Solución de problemas eléctricos, \n
          Servicio de frenos, \n
          Cambio de aceite y filtros, \n
          Reparación de transmisión\n
          
          ` 
        }
        Url="src\assets\motor.jpeg"
      />
    </div>
  );
};

export default About;
