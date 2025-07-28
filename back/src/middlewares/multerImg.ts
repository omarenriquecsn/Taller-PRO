import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Subida/'); // Directorio donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname); // Obtener la extensión del archivo
        const baseName = path.basename(file.originalname, ext); // Obtener el nombre base del archivo sin la extensión
        console.log(baseName)
        cb(null, baseName.replace(/ /g,"-") + ext); // Añadir un sufijo único y mantener la extensión
    }
});

 const upload = multer({ storage: storage });

 export default upload