import Image from "next/image";
import SearchBar from "./_components/SearchBar";
import bookCover from "/public/SampleCover.jpeg";

export default function Search() {
  return (
    <section className="flexCenter flex-col mt-20">
      <SearchBar />
      <ul className="w-6/12 border-2 border-neutral-200 rounded-lg bg-white">
        <li>
          <article className="flex">
            <Image src={bookCover} width={190} height={230} alt="북커버" />
            <div>
              <h2 className="text-font-textPrimary text-3xl ">Why We Sleep</h2>
              <p className="text-font-textSecondary">
                인간은 밤을 살 수 있고, 누구나 행복해질 수 있다...
              </p>
              <dl>
                <div>
                  <dt>작가</dt>
                  <dd>360 pages, Kindle Edition</dd>
                </div>
                <div>
                  <dt>번역</dt>
                  <dd>First published September 28, 2017</dd>
                </div>
                <div>
                  <dt>출판사</dt>
                  <dd>English</dd>
                </div>
                <div>
                  <dt>출판 날짜</dt>
                  <dd>August, 2024</dd>
                </div>
              </dl>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
}
