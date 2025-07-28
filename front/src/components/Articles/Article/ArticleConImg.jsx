import style from "./ArticleConImg.module.css";
import PropTypes from "prop-types";

const ArticleConImg = ({ Url, Title, Description }) => {
  return (
    <div className={style.container}>
      <div className={style.item1}>
        <h1>{Title}</h1>
      </div>
      <div className={style.item2}>
        <img className={style.img} src={Url} alt={`Img About ${Title}`} />
      </div>
      <div className={style.item3}>{Description}</div>
    </div>
  );
};

ArticleConImg.propTypes = {
  Url: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
};

export default ArticleConImg;
