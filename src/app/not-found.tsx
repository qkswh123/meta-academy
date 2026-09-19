import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-5 py-28 md:px-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 text-3xl font-semibold leading-snug tracking-tight text-green-deep sm:text-4xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
          요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="mt-9 rounded-sm bg-green-deep px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-green"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </section>
  );
}
