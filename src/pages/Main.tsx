import React, { FC } from "react";
import BreadCrumb from "../components/BreadCrumb";
import {
  BanknotesIcon,
  ChartBarIcon,
  EllipsisHorizontalCircleIcon,
  PrinterIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import LineChart from "../components/LineChart"; // Импортируйте компонент графика

const Main: FC = () => {
  return (
    <div>
      <div className="px-8 pt-8">
        <BreadCrumb name="Служба поддержки" />
        <div className="flex flex-col items-end justify-between w-full sm:flex-row sm:items-center">
          <strong className="text-4xl font-medium">
            Добро пожаловать, Elizaveta2
          </strong>
          <div className="flex items-center space-x-5">
            <ShareIcon className="h-7" />
            <PrinterIcon className="h-7" />
            <ChartBarIcon className="h-7" />
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="py-7 pr-7 rounded-lg md:p-7">
              <div className="flex items-start justify-between">
                <span className="text-lg mb-4 font-medium tracking-tighter">
                  Всего средств
                </span>
                <EllipsisHorizontalCircleIcon className="h-6"/>
              </div>

              <div className="flex items-center mb-3">
                <BanknotesIcon className="h-5 text-blue-500 mr-2" />
                <span className="block text-3xl font-bold">8,652$</span>
              </div>
              <span className="flex items-center text-gray-500">
                <span className="text-green-500 flex items-center font-bold mr-1 text-xs">
                  2.9%↑
                </span>
                За последние 7 дней
              </span>
            </div>
            <div className="py-7 pr-7 rounded-lg md:p-7">
              <div className="flex items-start justify-between">
                <span className="text-lg mb-4 font-medium tracking-tighter">
                  Реферальные средства
                </span>
                <EllipsisHorizontalCircleIcon className="h-6" />
              </div>
              <div className="flex items-center mb-3">
                <BanknotesIcon className="h-5 text-blue-500 mr-2" />
                <span className="block text-3xl font-bold">1,991$</span>
              </div>
              <span className="flex items-center text-gray-500">
                <span className="text-red-500 flex items-center font-bold mr-1 text-xs">
                  6%↓
                </span>
                За последние 7 дней
              </span>
            </div>
            <div className="py-7 pr-7 rounded-lg md:p-7">
              <div className="flex items-start justify-between">
                <span className="text-lg mb-4 font-medium tracking-tighter">
                  Средства в работе
                </span>
                <EllipsisHorizontalCircleIcon className="h-6" />
              </div>
              <div className="flex items-center mb-3">
                <BanknotesIcon className="h-5 text-blue-500 mr-2" />
                <span className="block text-3xl font-bold">5,000$</span>
              </div>
              <span className="flex items-center text-gray-500">
                <span className="text-red-500 flex items-center font-bold mr-1 text-xs">
                  2.4%↓
                </span>
                За последние 7 дней
              </span>
            </div>
            <div className="py-7 pr-7 rounded-lg md:p-7">
              <div className="flex items-start justify-between">
                <span className="text-lg mb-4 font-medium tracking-tighter">
                  Средства, готовые для выплаты
                </span>
                <EllipsisHorizontalCircleIcon className="h-6" />
              </div>
              <div className="flex items-center mb-3">
                <BanknotesIcon className="h-5 text-blue-500 mr-2" />
                <span className="block text-3xl font-bold">1,634$</span>
              </div>
              <span className="flex items-center text-gray-500">
                <span className="text-green-500 flex items-center font-bold mr-1 text-xs">
                  3.9%↑
                </span>
                За последние 7 дней
              </span>
            </div>
          </div>
          <div className="py-7 pr-7 md:p-7">
            <div className="mb-4">
              <span className="text-3xl font-medium">
                Отчет за последние 7 дней
              </span>
            </div>
            <div>
              <span className="text-lg">
                По <span className="text-blue-400">Всего средств</span>
              </span>
            </div>
            <div>
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
