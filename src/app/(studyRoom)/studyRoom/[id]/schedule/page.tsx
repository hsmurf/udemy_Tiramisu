'use client';

import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import { addDays, format, isSameDay, nextMonday, parse } from 'date-fns';
import { ko } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import Button from '@/components/common/Button';
import AlramIcon from '@/components/icons/AlramIcon';
import DatePickerCustomInput from '@/components/schedulePage/DatePickerCustomInput';
// import MainLayout from '@/components/studyRoom/MainLayout';
import supabase from '@/utils/supabase/client';

interface ScheduleEvent {
  id: number;
  study_room_id: number;
  title: string;
  description: string;
  event_date: string; // YYYY-MM-DD 형식의 날짜
  start_time: string; // HH:mm:ss 형식의 시간
  event_type: string;
  created_by: string; // UUID로 보이는 값
  created_at: string; // ISO 형식의 날짜와 시간
}

export default function Schedule() {
  const today = new Date();
  const initialRange = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [dateRange, setDateRange] = useState<Date[]>(initialRange);
  const [upcomingSchedule, setUpcomingSchedule] = useState<
    ScheduleEvent[] | null
  >();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    const range = date
      ? Array.from({ length: 7 }, (_, i) => addDays(date, i))
      : [];

    setDateRange(range);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('schedule')
        .select('*')
        .gte('event_date', format(new Date(), 'yyyy-MM-dd'))
        .lt('event_date', format(nextMonday(new Date()), 'yyyy-MM-dd'));

      setUpcomingSchedule(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mb-28">
      {/* <MainLayout /> */}
      <div className="px-4 pb-5 pt-10">
        <p className="text-lg font-bold">🤙 팀원과의 약속</p>
        <span className="text-sm text-gray-purple">
          #이번 주의 과제와 회의 시간을 확인해보세요
        </span>
      </div>

      <div className="border-t-2 bg-light-gray py-4">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => handleDateChange(date)}
          customInput={<DatePickerCustomInput />}
          dateFormat="MM"
          locale={ko}
          wrapperClassName="w-full"
          withPortal
          minDate={new Date()}
        />
        {dateRange.length > 0 && (
          <div className="mt-8 flex items-center justify-evenly">
            {dateRange.map((date) => (
              <button
                key={date.toDateString()}
                className="flex flex-col items-center gap-2"
                type="button"
                onClick={() => handleDateClick(date)}
              >
                <span
                  className={`text-sm ${selectedDate && isSameDay(selectedDate, date) ? 'text-main-purple' : 'text-[#000417]'}`}
                >
                  {format(date, 'EEE', { locale: ko })}
                </span>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border bg-light-gray text-sm font-bold ${selectedDate && isSameDay(selectedDate, date) ? 'border-main-purple' : ''}`}
                >
                  {format(date, 'dd')}
                </div>
              </button>
            ))}
          </div>
        )}

        <div className="my-6 flex flex-col gap-4">
          <div className="relative mx-4 rounded bg-[#3f3fff1f] px-2 after:absolute after:left-0 after:top-0 after:h-full after:w-0.5 after:rounded-[32px] after:bg-[#7876E3] after:content-['']">
            과제 제출
          </div>
        </div>
      </div>

      <div className="px-4 pb-5 pt-10">
        <p className="text-lg font-bold">✍ 다가오는 일정</p>
        <span className="text-sm text-gray-purple">
          #이번 주의 과제와 회의 시간을 확인해보세요
        </span>
      </div>

      <div className="mx-4 flex flex-col gap-3">
        {upcomingSchedule?.map((schedule) => (
          <div
            key={schedule.id}
            className="flex items-center gap-3 rounded-lg border bg-light-gray px-4 py-3"
          >
            <div className="relative flex-1 text-sm font-medium text-dark-gray after:absolute after:right-0 after:top-0 after:h-full after:w-0.5 after:rounded-lg after:bg-[#7876E3] after:content-['']">
              {format(
                parse(schedule.start_time, 'HH:mm:ss', new Date()),
                'a h:mm',
              )}
            </div>
            <div className="flex flex-[4] flex-col">
              <div className="text-sm font-bold text-dark-gray">
                {schedule.event_type}
              </div>
              <div className="text-xs text-gray-purple">
                {format(
                  parse(
                    `${schedule.event_date}T${schedule.start_time}`,
                    `yyyy-MM-dd'T'HH:mm:ss`,
                    new Date(),
                  ),
                  'M월 d일 a h:mm ',
                  { locale: ko },
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-4 mb-3 mt-14 flex items-center justify-between">
        <div className="text-lg font-bold text-dark-gray">
          🚨 마감 직전 과제{' '}
          <span className="font-semibold text-[#E12C78]">2</span>
        </div>
        <div className="flex items-center gap-1 rounded bg-[#ff2c841f] px-1 py-2">
          <AlramIcon />
          <span className="text-[10px] font-semibold text-[#D43477]">
            인증 마감까지 · 08:23:22
          </span>
        </div>
      </div>

      <div className="mx-4 flex flex-col gap-5 rounded-lg border px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-medium">콜로소 인강 1강 완강 인증하기</p>
            <p className="text-xs font-medium text-gray-purple">
              <span className="text-[#4C4CC7]">3명의 팀원</span>이 수행했어요👍
            </p>
          </div>
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full"
            style={{
              background: 'conic-gradient(#6224FD calc(60 * 1%), #EDF1FF 0)',
            }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-center text-sm font-bold text-main-purple">
              60%
            </div>
          </div>
        </div>
        <Button label="인증하기" type="primary" />
      </div>
    </div>
  );
}
