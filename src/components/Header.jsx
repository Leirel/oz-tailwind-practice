export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-black text-white">
      {/* h1, 24px, bold */}
      <h1 className="text-2xl font-bold">OZ코딩스쿨</h1>
      <ul className="flex gap-5 list-none">
        <li className="cursor-pointer">로그인</li>
        <li className="cursor-pointer">회원가입</li>
        <li className="cursor-pointer">내클래스</li>
      </ul>
    </header>
  );
}
