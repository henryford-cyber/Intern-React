 
import {FaComment, FaHeart, FaMusic, FaShare} from 'react-icons/fa';
import avt from '../avt.png';
const VideoInfo=()=>{
    return <div className="flex flex-row">
            <img className="w-[50px] h-[50px] rounded-full " src={avt} alt="avt" />
            <div className="ml-3 min-w-[80%]">
                <div>
                    <a className="text-xl font-bold hover:underline mr-3" href="#">Namphan046</a>
                    <a className="text-xl" href="#">Kenh tap gym</a>
                </div>
                <div>
                     Nam phan dang tap gym
                </div> 
                <div className="flex flex-row items-center">
                    <FaMusic></FaMusic>
                    <span className="ml-3">Bai hat dang phat</span>
                </div>
            </div>
            <div><button className="p-1 pl-3 pr-3 border-2 border-red-400 text-red-300 rounded-md">Follow</button></div>
         </div>
    
}
const VideoContent=()=>{ 
    return (
        <div className="flex flex-row">
          <video 
            className="w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4"
             src="https://www.socialmediaexaminer.com/wp-content/uploads/2020/04/tiktok-for-you-page-350.png"
            loop
          />
          <div className="flex flex-col justify-end ml-7">
            <div className="text-center mb-4">
              <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                <FaHeart className="text-xl" />
              </div>
              {/* <span>{like}</span> */}
            </div>
            <div className="text-center mb-4">
              <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                <FaComment className="text-xl text-center" />
              </div>
              {/* <span>{cmt}</span> */}
            </div>
            <div className="text-center">
              <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                <FaShare className="text-xl text-center" />
              </div>
              {/* <span>{share}</span> */}
            </div>
          </div>
        </div>
      );
}
const Video =()=>{
    return (
        <div className="max-w-[600px] border-b-2 border-gray-300 pb-10 pt-10">
            <VideoInfo></VideoInfo>
            <VideoContent></VideoContent>
        </div>

    )
}
export default Video;