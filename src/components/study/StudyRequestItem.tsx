'use client';
import { updateStudyApplyStatus } from '@/actions/studyrequest.action';
import { UUID } from 'crypto';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type ItemType = {
  id: number;
  status: string;
  studyId: number;
  user: {
    id: UUID;
    name: string;
    job: string;
    introduce?: string;
    personality?: string[];
  };
};

export default function StudyRequestItem({
  params,
  item,
  acceptedStudy,
  recruitNum,
}: {
  params: string;
  item: ItemType;
  acceptedStudy: number;
  recruitNum: number;
}) {
  const [currentStatus, setCurrentStatus] = useState(item.status);

  const modApply = async (studyid: number, userid: UUID, status: string) => {
    try {
      // 상태 업데이트 요청
      await updateStudyApplyStatus(studyid, userid, status);

      // 성공적으로 업데이트되면 상태를 변경
      setCurrentStatus(status);
      alert('수락 완료');
    } catch (error) {
      console.error('상태 업데이트 중 에러:', error);
      alert('상태 업데이트 실패');
    }
  };

  return (
    <>
      <li key={item.id}>
        {/* {item.status === 'waiting' && ( */}
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-5">
          <div className="flex w-full items-start justify-between gap-4 p-5">
            <div className="flex items-start justify-start gap-2.5">
              <div className="flex flex-col items-end justify-start">
                <Link href={`/profile/read/${item.user.id}`}>
                  <img
                    className="h-14 w-14 rounded-full"
                    src="https://th.bing.com/th/id/OIG3.Z11n1VN6NRw.IXOddq9X?w=1024&h=1024&rs=1&pid=ImgDetMain"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <div className="text-base font-semibold text-black">
                  {item.user.name}
                </div>
                <div className="text-xs font-medium text-gray-500">
                  {item.user.job}
                </div>
                <div className="flex gap-1">
                  <span className={'text-xs font-medium text-gray-500'}>
                    스터디
                  </span>
                  <span className="text-xs font-medium text-indigo-500">
                    8회
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    | 출석률
                  </span>
                  <span className="text-xs font-medium text-indigo-500">
                    98%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start gap-1.5">
              {currentStatus === 'waiting' && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      modApply(item.studyId, item.user.id, 'refused')
                    }
                    className="bg-light-gray text-dark-gray flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                  >
                    거절
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      modApply(item.studyId, item.user.id, 'accepted')
                    }
                    className="text-dark-gray flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
                  >
                    수락
                  </button>
                </>
              )}

              {currentStatus === 'accepted' && (
                <>
                  <button
                    type="button"
                    disabled
                    // onClick={() => modApply(item.id, 'refused')}
                    className="text-dark-gray flex items-center justify-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium"
                  >
                    {item.status === 'accepted' ? '수락됨' : '거절됨'}
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-4">
            <div className="text-dark-gray h-10 w-full px-6 text-sm font-normal leading-tight">
              {item.user.introduce
                ? item.user.introduce
                : '자기소개가 없습니다.'}
            </div>
            <div className="flex items-start justify-start gap-2.5 px-6">
              {item.user.personality?.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="mr-2 rounded-lg bg-[#f5f1ff] px-2 py-2 text-[14px] text-[#434343]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* )} */}
      </li>
    </>
  );
}
