import React, { useEffect, useState } from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry';

const image='assets/IMG_20230728_094326.jpg'
function importAll(r) {
    return r.keys().map(r);
  }
  
  

const images=[
    "assets/IMG_20230627_183501.jpg ",
    "assets/IMG_20230627_212903.jpg ",
    "assets/IMG_20230628_070701.jpg ",
    "assets/IMG_20230628_180834.jpg",
    "assets/IMG_20230716_212934.jpg",
    "assets/IMG_20230728_094326.jpg",
    // "http://picsum.photos/2000/3000",
    // "http://picsum.photos/3000/2000",
    // "http://picsum.photos/4000/3000",
    // "http://picsum.photos/3000/1500",
    // "http://picsum.photos/1000/2500",
    // "http://picsum.photos/1500/2000"
]
const ReactImageGallery = () => {
    const [data,setData]=useState({img:'',i:0})
    const ImageList = () => {
        const filenames = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
        // return (
        //   <ul>
        //     {
        //       filenames.map(filename => {
        //         return <li>
        //           <img src={filename} alt={filename} />
        //         </li>
        //       })
        //     }
        //   </ul>
        //)
        console.log(filenames)
      }
    const viewImage=(img,i)=>{
        setData({img,i})
    }
    const imgAction=(action)=>{
        let i=data.i;
        if(action==='next-img'){
            setData({img:images[i+1],i:i+1});
        }
        if(action==='previous-img'){
            setData({img:images[i-1],i:i-1});
        }
        if(!action){
            setData({img:'',i:0})
        }
    }

    useEffect(()=>{
        ImageList();
      },[])
  return (
    <>
        {
            data.img && 
                <div style={{
                    width:'100%',
                    height:'100vh',
                    background:'black',
                    position:'fixed',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    overflow:'hidden'
                }}>
                    <button onClick={()=>imgAction('previous-img')}>Previous</button>
                    <button onClick={()=>imgAction()} style={{position:'absolute',top:'10px',right:'10px'}}>X</button>
                    <img src={data.img} style={{width:'auto',maxWidth:'90%',maxHeight:'90%'}} />
                    <button onClick={()=>imgAction('next-img')}>Next</button>
                </div>
        }
    <div style={{padding:'10px'}}>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block",cursor:'pointer'}}
                            alt=""
                            onClick={()=>viewImage(image,i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
    </div>
    </>
  )
}

export default ReactImageGallery