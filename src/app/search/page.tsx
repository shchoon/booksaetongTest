import Image from "next/image";
import SearchBar from "./_components/SearchBar";
import bookCover from "/public/SampleCover.jpeg";
import Bookmark from "./_components/Bookmark";

export default function Search() {
  return (
    <section className="flexCenter mt-20 flex-col font-main">
      <SearchBar />
      <ul className="flex flex-col items-center gap-5">
        <li className="searchList">
          <article className="flex">
            <Image
              src={bookCover}
              width={190}
              height={230}
              alt="북커버"
              className="mx-8 my-3 shadow-xl"
            />
            <div className="border-border border"></div>
            <div className="mx-8 my-4 flex w-7/12 flex-col gap-2">
              <h2 className="font-styled text-3xl font-extrabold text-font-textPrimary">
                Why We Sleep
              </h2>
              <p className="flex-grow font-medium text-font-textSecondary">
                인간은 변할 수 있고, 누구나 행복해 질 수 있다. 단 그러기
                위해서는 ‘용기’가 필요하다고 말한 철학자가 있다. 바로 프로이트,
                융과 함께 ‘심리학의 3대 거장’으로 일컬어지고 있는 알프레드
                아들러다
              </p>
              <dl className="grid gap-2 text-sm leading-5 text-font-textPrimary">
                <div className="flex">
                  <dt className="searchDetail">작가</dt>
                  <dd className="font-semibold">360 pages, Kindle Edition</dd>
                </div>
                <div className="flex">
                  <dt className="searchDetail">번역</dt>
                  <dd className="font-semibold">
                    First published September 28, 2017
                  </dd>
                </div>
                <div className="flex">
                  <dt className="searchDetail">출판사</dt>
                  <dd className="font-semibold">English</dd>
                </div>
                <div className="flex">
                  <dt className="searchDetail">출판 날짜</dt>
                  <dd className="font-semibold">August, 2024</dd>
                </div>
              </dl>
            </div>
          </article>
        </li>
        <li className="searchList">
          <article className="flex">
            <Image
              src={bookCover}
              width={190}
              height={230}
              alt="북커버"
              className="mx-8 my-3 shadow-xl"
            />
            <div className="border-border border"></div>
            <div className="mx-8 my-4 flex w-7/12 flex-col gap-2">
              <h2 className="font-styled text-3xl font-extrabold text-font-textPrimary">
                Why We Sleep
              </h2>
              <p className="flex-grow font-medium text-font-textSecondary">
                인간은 변할 수 있고, 누구나 행복해 질 수 있다. 단 그러기
                위해서는 ‘용기’가 필요하다고 말한 철학자가 있다. 바로 프로이트,
                융과 함께 ‘심리학의 3대 거장’으로 일컬어지고 있는 알프레드
                아들러다
              </p>
              <dl className="grid gap-2 text-sm leading-5 text-font-textPrimary">
                <div className="flex">
                  <dt className="searchDetail">작가</dt>
                  <dd className="font-semibold">360 pages, Kindle Edition</dd>
                </div>
                <div className="flex">
                  <dt className="searchDetail">번역</dt>
                  <dd className="font-semibold">
                    First published September 28, 2017
                  </dd>
                </div>
                <div className="flex">
                  <dt className="searchDetail">출판사</dt>
                  <dd className="font-semibold">English</dd>
                </div>
                <div className="flex">
                  <dt className="searchDetail">출판 날짜</dt>
                  <dd className="font-semibold">August, 2024</dd>
                </div>
              </dl>
            </div>
          </article>
        </li>
        <li className="searchList">
          <article className="relative flex">
            <Image
              src={bookCover}
              width={190}
              height={230}
              alt="북커버"
              className="mx-8 my-3 shadow-xl"
            />
            <Bookmark />
            <div className="border-border border" />
            <div className="mx-8 my-4 flex w-7/12 flex-col gap-2">
              <h2 className="font-styled text-3xl font-extrabold text-font-textPrimary">
                Why We Sleep
              </h2>
              <p className="flex-grow font-medium text-font-textSecondary">
                인간은 변할 수 있고, 누구나 행복해 질 수 있다. 단 그러기
                위해서는 ‘용기’가 필요하다고 말한 철학자가 있다. 바로 프로이트,
                융과 함께 ‘심리학의 3대 거장’으로 일컬어지고 있는 알프레드
                아들러다
              </p>
              <dl className="grid gap-2 text-sm leading-5 text-font-textPrimary">
                <div className="flex">
                  <dt className="searchDetail">작가</dt>
                  <dd className="font-semibold">360 pages, Kindle Edition</dd>
                </div>
                <div className="flex">
                  <dt className="searchDetail">번역</dt>
                  <dd className="font-semibold">
                    First published September 28, 2017
                  </dd>
                </div>
                <div className="flex">
                  <dt className="searchDetail">출판사</dt>
                  <dd className="font-semibold">English</dd>
                </div>
                <div className="flex">
                  <dt className="searchDetail">출판 날짜</dt>
                  <dd className="font-semibold">August, 2024</dd>
                </div>
              </dl>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
}
