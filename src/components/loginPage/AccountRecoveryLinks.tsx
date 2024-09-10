'use client';

import Link from 'next/link';

import ROUTE_PATH from '@/constants/route';

function AccountRecoveryLinks() {
  return (
    <div className="mt-16 flex justify-center gap-3">
      <Link
        href={ROUTE_PATH.AUTH.SIGN_UP}
        className="border-r border-[#c4c4c4] pr-3 text-xs font-medium text-muted-foreground"
      >
        회원가입하기
      </Link>
      {/* <div className="border-x-[1px] border-[#c4c4c4] px-3 text-xs font-medium text-[#ADB5Bd]">
        아이디 찾기
      </div> */}
      <Link
        href={ROUTE_PATH.AUTH.FIND_PASSWORD}
        className="text-xs font-medium text-[#ADB5Bd]"
      >
        비밀번호 찾기
      </Link>
    </div>
  );
}
export default AccountRecoveryLinks;
