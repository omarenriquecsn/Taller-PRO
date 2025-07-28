import style from "./LogoTitle.module.css";
const LogoTitle = () => {
  return (
    <div className={style.container}>
      <div className={style.boxImg}>
        <img
          className={style.img}
          src="src\assets\6HgzjerzQkWYy-kg-pVd6g.png"
          alt="LOGO"
        />
      </div>
      <div>
        <h1 className={style.title}>Taller OMAR CONTRERAS</h1>
      </div>
    </div>
  );
};

export default LogoTitle;
