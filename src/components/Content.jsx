import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const imageList = [img1, img2, img3, img4];

export default function Content({ content, index }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="relative w-[300px] h-[225px]">
        <img
          src={imageList[index % imageList.length]}
          alt={content.title}
          className="w-full h-full object-cover rounded-lg"
        />
        {/* 모집중 표시 */}
        <span className="absolute top-2 right-2 text-xs bg-[#d7fa00] text-black px-1 py-0.5 rounded">
          모집중
        </span>
      </div>
      <div className="text-lg font-semibold line-clamp-1">{content.title}</div>
      <p className="text-xs text-gray-400 line-clamp-2">{content.description}</p>
    </div>
  );
}
