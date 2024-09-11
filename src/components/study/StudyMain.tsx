// 'use client'
import { format } from 'date-fns';
import Link from 'next/link';
import ProfileAvatar from '@/components/common/ProfileAvatar';
import Image from 'next/image';
import EyeIcon from '../icons/EyeIcon';

interface Study {
  title: string;
  endDate: string;
  startDate: string;
  created_at: string;
  viewCount: number;
  goal: string;
  info: string;
  recruitNum: number;
  tags: string[];
  user: {
    id: string;
    name: string;
    images?: {
      url: string;
    };
  };
}

export default function StudyMain({
  title,
  endDate,
  startDate,
  created_at,
  viewCount,
  goal,
  info,
  recruitNum,
  tags,
  user,
}: Study) {
  const ddays = Math.round(
    (Number(new Date(endDate)) - Number(new Date())) / 1000 / 60 / 60 / 24,
  );

  return (
    <>
      <section className="flex flex-col justify-center px-4 pb-[14px] pt-6 border-b-2 border-[#F1F2F6]">
        {/* 1 */}
        <div className="mb-5 flex items-center gap-[14px]">
          {/* title */}
          <p className="text-[24px] font-semibold">{title}</p>
          {/* d-day */}
          <div className="flex h-6 w-14 items-center justify-center gap-2 rounded-full border border-[#8346ff] bg-white p-1.5">
            <div className="text-xs font-medium text-[#8346ff]">
              {ddays > 0 ? `D-${ddays}` : `D+${Math.abs(ddays)}`}
            </div>
          </div>
        </div>
        {/* 2 tags */}
        <div className="mb-6 flex overflow-hidden whitespace-nowrap">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-text-primary mr-2 rounded-lg bg-[#f5f1ff] px-[10px] py-[5px] text-[14px]"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* 3 */}
        <div className="flex gap-2">
          <Link href={`/profile/${user.id}`}>
            <ProfileAvatar
              src={user?.images?.url || ''}
              alt="user profile img"
              className="relative h-10 w-10 overflow-hidden rounded-full object-cover"
              fallback={
                <Image
                  alt="user profile img"
                  src={user?.images?.url || ''}
                  fill
                />
              }
            />
          </Link>
          <div className="flex h-[42px] w-full flex-col gap-1">
            {/* name */}
            <Link href={`/profile/read/${user?.id}`}>
              <p className="flex text-[13px] font-bold">{user.name}</p>
            </Link>
            <div className="flex justify-between text-xs font-normal text-[#81819b]">
              <span className="flex gap-1">
                <span>작성일</span>
                <span>{format(created_at, 'yyyy-MM-dd')}</span>
                <span>&#124;</span>
                <span>{format(startDate, 'hh:mm')}</span>
              </span>
              <div className="flex gap-1">
                <EyeIcon />
                <span>{viewCount}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex flex-col gap-8 p-4">
        <main className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-[#434343]">
            <p className="font-semibold">스터디 주제</p>
            <p className="whitespace-pre text-[15px]">{info}</p>
          </div>
          <div className="flex flex-col gap-4 text-[#434343]">
            <p className="whitespace-break-spaces font-semibold">스터디 목표</p>
            <p className="text-[15px]">{goal}</p>
          </div>
          <div className="flex flex-col gap-4 text-[#434343]">
            <p className="font-semibold">스터디 인원</p>
            <p className="text-[15px]">{recruitNum} 명</p>
          </div>
          <div className="flex flex-col gap-4 text-[#434343]">
            <p className="font-semibold">스터디 기간</p>
            <p className="text-[15px]">
              <span>{format(startDate, 'yyyy-MM-dd')}</span>
              <span>&nbsp;~ &nbsp;</span>
              <span>{format(endDate, 'yyyy-MM-dd')}</span>
            </p>
          </div>
        </main>
      </main>
    </>
  );
}
