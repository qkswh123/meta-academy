import { Emblem } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy-deep text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex items-start gap-3">
            <Emblem size={34} />
            <div>
              <p className="text-base font-medium text-white">메타인지학원</p>
              <p className="mt-1 text-sm text-white/50">META Academy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-3 md:gap-16">
            <div>
              <p className="mb-2 text-xs tracking-wider text-white/40">주소</p>
              {/* TODO: 실제 주소 입력 */}
              <p className="text-white/70">주소를 입력해 주세요</p>
            </div>
            <div>
              <p className="mb-2 text-xs tracking-wider text-white/40">전화번호</p>
              {/* TODO: 실제 전화번호 입력 */}
              <p className="text-white/70">000-0000-0000</p>
            </div>
            <div>
              <p className="mb-2 text-xs tracking-wider text-white/40">운영시간</p>
              {/* TODO: 실제 운영시간 입력 */}
              <p className="text-white/70">평일 00:00 – 00:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            메타인지학원 · 사업자등록번호 000-00-00000 · 대표 000
            {/* TODO: 실제 사업자 정보 입력 */}
          </p>
          <p className="tracking-[0.2em] text-gold/70">THINK · LEARN · GROW</p>
        </div>
      </div>
    </footer>
  );
}
