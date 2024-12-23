import Image from "next/image";
import searchBtn from "/public/icons/SearchSearch.svg";

export default function SearchBar() {
  return (
    <form
      role="search"
      aria-label="도서 검색"
      className="flex bg-[#fefefe] p-4 rounded-lg w-4/12 mb-14"
    >
      <label htmlFor="searchInput" className="sr-only">
        검색
      </label>
      <input
        type="search"
        name="search"
        id="searchInput"
        placeholder="Search..."
        aria-describedby="search-hint"
        className="grow outline-none text-font-textPrimary"
      />
      <button type="submit" aria-label="검색 버튼" className="search">
        <Image src={searchBtn} width={32} height={32} alt="검색 아이콘" />
      </button>
      <p id="search-hint" className="sr-only">
        원하는 도서를 검색하세요.
      </p>
    </form>
  );
}
