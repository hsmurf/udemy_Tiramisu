'use client';
import Search from '@/components/icons/Navigator/Search';
import React from 'react';

interface SearchHeaderProps {
  activeTabIndex: number;
  onTabChange: (index: number) => void;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  activeTabIndex,
  onTabChange,
  searchTerm,
  onSearchChange,
}) => {
  const getPlaceholder = () => {
    switch (activeTabIndex) {
      case 0:
        return '스터디를 검색하세요';
      case 1:
        return '찾고 싶은 팀원의 이름이나 닉네임을 적어주세요';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white">
      {/* Search Input (탭 위에 위치) */}
      <div className="px-4 py-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder={getPlaceholder()}
            className="w-full rounded-lg border border-gray-300 p-3 pl-10 text-sm"
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 text-sm text-gray-500">
        <button
          className={`flex-1 px-4 py-2 ${
            activeTabIndex === 0
              ? 'border-b-2 border-main-purple font-bold text-main-purple'
              : 'text-gray-300'
          }`}
          onClick={() => onTabChange(0)}
        >
          스터디 찾기
        </button>
        <button
          className={`flex-1 px-4 py-2 ${
            activeTabIndex === 1
              ? 'border-b-2 border-main-purple font-bold text-main-purple'
              : 'text-gray-300'
          }`}
          onClick={() => onTabChange(1)}
        >
          팀원 찾기
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
