
import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from "url"
import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app=express()
app.use(cors());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use('/output', express.static(path.join(__dirname, 'output')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.send('Backend is running'); // or res.json({ ok: true })
});


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname +'-'+Date.now()+path.extname(file.originalname))
    }
})

const uploadMultiple = multer({
  storage
}).array("images", 5); // max 10 images




app.post("/upload-multiple", uploadMultiple, (req, res) => {
  try{

    const files=req.files
    var ext
    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }
    
 
const uploadedFiles = files.map(file => {
      let ext = "";
      if (file.mimetype === "image/jpeg") ext = "jpg";
      if (file.mimetype === "image/png") ext = "png";

      return {
        filename: file.filename,
        ext: ext,
        url: `http://localhost:4000/uploads/${file.filename}`
      };
    });
    res.json({
      message: "Files uploaded successfully!",
      files: uploadedFiles
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
});


app.post('/compress/uploads/:name',async(req,res)=>{
    /*const name=req.params.name
    const ext=req.params.ext
    console.log(name)
    console.log(ext)*/
  try{
    const files=await imagemin(["uploads/"+req.params.name],{
        destination: "output",
        plugins:[
            imageminJpegtran(),
            imageminPngquant({
                quality:[0.6,0.8]
            })
        ]
    });
   const outputFileName = path.basename(files[0].destinationPath);

res.json({
  compressedUrl: `http://localhost:4000/output/${outputFileName}`,
  downloadUrl: `http://localhost:4000/download/${outputFileName}`,
  fileName: outputFileName
});
   
     
}
catch(e){
    console.error("Compression error:", e);
    res.status(500).json({ message: "Compression failed" });
}
})
app.get("/download/:filename", (req, res) => {
  const filePath = path.join(__dirname, "output", req.params.filename);

  res.download(filePath,req.params.filename, (err) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

app.listen(4000, () => console.log("Server running on port 4000"));