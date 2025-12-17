
import React, { useRef, useState } from 'react'
import HomeImage from '../../assets/Home.png'
import { useAuth, useClerk } from "@clerk/clerk-react";


const Home = () => {
  


  const finputRef=useRef(null);
  const[fileNames,setFileNames]=useState([]);
  const [compressedUrl, setCompressedUrl] = useState("");
  const [uploadedUrl,setUploadedUrl]=useState("");
  const [previewUrls, setPreviewUrls] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState("");
  const { isSignedIn } = useAuth();
const { openSignIn } = useClerk();
const [sliderValue, setSliderValue] = useState(50); // 0–100
const [progress, setProgress] = useState(0);
const [isUploading, setIsUploading] = useState(false);






  const handleButtonClick = () => {
  if (!isSignedIn) {
    openSignIn();   // redirect / modal
    return;         // ⛔ stop here
  }

  // ✅ only runs when user is already logged in
  finputRef.current?.click();
};
   const handleFileChange=(e)=>{

    


    setCompressedUrl("");
  setSliderValue(50);
   const selectedFiles = Array.from(e.target.files);
      if (selectedFiles.length === 0) return;
    setFileNames( selectedFiles.map(file =>file.name
    )
    );

    const previews = selectedFiles.map(file =>
    URL.createObjectURL(file)
  );
  setPreviewUrls(previews);

  }
  const handleUpload=async()=>{
    const files=finputRef.current.files;
    if(!files||files.length===0) return alert("Please select a file first!");

    const isSingle = files.length === 1;

    const totalSteps = files.length;   // ✅ correct
  let completed = 0;

  setIsUploading(true);   // ✅ START uploading
  setProgress(0);    

    const formData=new FormData();//JavaScript object
    for (let i = 0; i < files.length; i++) {
    formData.append("images", files[i]);
  }

   const uploadRes = await fetch("http://localhost:4000/upload-multiple", {
      method: "POST",
      body: formData,
    });

    const uploadData = await uploadRes.json();
  console.log("Upload response:", uploadData);

  const uploadedFileName = uploadData.filename;
  setUploadedUrl(uploadData.url)

  // uploadData.files → array of uploaded files
  for (const file of uploadData.files) {

    // 🔹 compress each file
    const compressRes = await fetch(
      `http://localhost:4000/compress/uploads/${file.filename}`,
      { method: "POST" }
    );

  const compressData = await compressRes.json();
  console.log("Compress response:", compressData);

   completed++;
  setProgress(Math.round((completed / totalSteps) * 100));


  if (files.length === 1) {
  setCompressedUrl(compressData.compressedUrl);
}

  // show compressed image
  // ✅ auto-download each compressed image
    const link = document.createElement("a");
    link.href = compressData.downloadUrl;
    link.download = compressData.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  // ✅ FORCE COMPLETE (IMPORTANT)
setProgress(100);

// ✅ allow UI to render 100% before hiding bar
setTimeout(() => {
  setIsUploading(false);
}, 500);


  
   if (!isSingle) {
    setFileNames([]);
    setPreviewUrls([]);
    setCompressedUrl(""); // ensure slider hidden
    setSliderValue(50);
  }
     // reset slider position

// ✅ CLEAR FILE INPUT (CRITICAL)
if (finputRef.current) {
  finputRef.current.value = "";
}
 
 
  }
  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      <img
        src={HomeImage}
        alt="Home banner"
        className="object-contain max-w-full h-auto"
        style={{ maxHeight: "100%", width: "auto" }}
      />


      <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mt-1'>
         <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-green-500 bg-clip-text text-transparent">
    Compress
  </span>{' '}
   Your Images 
      </h1>

      <h2 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mt-4'>Like a Pro</h2>
    <p className='text-xl text-gray-600 font-normal text-center mt-9'>Reduce the file Images upto 90% without losing quality. <br />Support for jpeg and png format for client side processing to keep your images 100% private</p>
    <button className="px-6 py-3 bg-gradient-to-r from-violet-600 via-violet-400 to-green-500  hover:bg-indigo-700 text-white text-2xl font-semibold rounded-full shadow-md hover:shadow-lg px-10 py-4 transition-all duration-200 mt-12" onClick={handleButtonClick}>
  Select Image
   </button>

   <input type="file" multiple onChange={handleFileChange} ref={finputRef} hidden/>
{previewUrls.length > 0 && (
  <div className="mt-8 flex flex-wrap justify-center gap-6">
    {previewUrls.map((url, index) => (
      <div
        key={index}
        className="flex w-[180px] flex-col items-center rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
      >
        <img
          src={url}
          alt={`preview-${index}`}
          className="h-32 w-full object-contain rounded-md"
        />
        <p className="mt-2 w-full truncate text-center text-sm text-gray-600">
          {fileNames[index]}
        </p>
      </div>
    ))}
  </div>
)}





   {previewUrls.length>0&&(
    <button className="px-6 py-3 bg-gradient-to-r from-violet-600 via-violet-400 to-green-500  hover:bg-indigo-700 text-white text-2xl font-semibold rounded-full shadow-md hover:shadow-lg px-10 py-4 transition-all duration-200 mt-12" onClick={handleUpload}>
  Upload Image
   </button>
   )}

  {isUploading && (
  <div className="mt-6 w-full max-w-md">
    <div className="h-3 w-full rounded-full bg-gray-200">
      <div
        className="h-3 rounded-full bg-gradient-to-r from-violet-600 to-green-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
    <p className="mt-2 text-center text-sm text-gray-600">
      Processing... {progress}%
    </p>
  </div>
)}


   {previewUrls.length === 1 && compressedUrl && (
  <div className="mt-10 w-full max-w-lg">
    <p className="mb-3 text-center font-semibold text-gray-700">
      Before vs After
    </p>

    <div className="relative h-64 w-full overflow-hidden rounded-xl border shadow">
      {/* Original Image */}
      <img
        src={previewUrls[0]}
        alt="original"
        className="absolute inset-0 h-full w-full object-contain"
      />

      {/* Compressed Image */}
      <img
        src={compressedUrl}
        alt="compressed"
        className="absolute inset-0 h-full w-full object-contain"
        style={{
          clipPath: `inset(0 ${100 - sliderValue}% 0 0)`
        }}
      />

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow"
        style={{ left: `${sliderValue}%` }}
      />

      {/* Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
        className="absolute bottom-3 left-1/2 w-[90%] -translate-x-1/2 cursor-pointer"
      />
    </div>

    {/* Labels */}
    <div className="mt-2 flex justify-between text-sm text-gray-500">
      <span>Original</span>
      <span>Compressed</span>
    </div>
  </div>
)}


   {compressedUrl && (
  <div className="mt-6">
    <p>Compressed Image Preview:</p>
    <img src={compressedUrl} alt="compressed" style={{ width: 300, marginTop: 10 }} />
  </div>
)}
    </div>
  
  )
}

export default Home
