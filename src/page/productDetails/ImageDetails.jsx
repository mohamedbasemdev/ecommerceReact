import { useEffect, useState } from "react";

function ImageDetails({oneItem}) {
    const [selectedImg, setSelectedImg] = useState("");

    useEffect(() =>{
        if (oneItem){
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setSelectedImg(oneItem.images[0])
        }
      },[oneItem])
  return (
    <div className="image">
      <div className="big_img">
        <img id="big-img" src={selectedImg} alt="" />
      </div>
      <div className="small_img">
        {oneItem.images.map((img) => (
          <img key={img} src={img} alt="" onClick={() => setSelectedImg(img)} />
        ))}
      </div>
    </div>
  );
}

export default ImageDetails;
