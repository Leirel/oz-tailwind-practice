import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const imageList = [img1, img2, img3, img4];

export default function Content({ content, index }) {
  return (
    <div
      className="
        bg-transparent rounded-lg overflow-hidden 
        flex flex-col gap-2 cursor-pointer 
        transition-transform duration-200 ease-in-out
        hover:-translate-y-1 hover:shadow-lg
        w-[250px] h-[260px]   /* 카드 크기 고정 */
      "
    >
      {/* 이미지 박스 */}
      <div className="relative w-full h-[160px]">
        <img
          src={imageList[index % imageList.length]}
          alt={content.title}
          className="w-full h-full object-cover block"
        />
        <span
          className="
            absolute top-2 left-2 text-[12px] 
            text-[#d0ff00] border border-[#d0ff00] 
            px-2 py-0.5 rounded font-medium
          "
        >
          모집중
        </span>
      </div>

      {/* 텍스트 */}
      <div className="text-[16px] font-semibold line-clamp-1">
        {content.title}
      </div>
      <p className="text-[12px] text-gray-400 line-clamp-2">
        {content.subtitle}
      </p>
    </div>
  );
}
