import React from "react";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="p-4 animate-pulse rounded-xl border border-slate-300 bg-slate-50">
      <div className="flex justify-between mb-4">
        <div className="h-5 bg-slate-200 rounded w-24"></div>
        <div className="h-5 bg-slate-200 rounded w-36"></div>
      </div>
      <div className="space-y-2">
        <div className="h-5 bg-slate-200 rounded w-52"></div>
        <div className="flex justify-between">
          <div className="h-5 bg-slate-200 rounded w-52"></div>
          <div className="h-5 bg-slate-200 rounded w-24"></div>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-6 bg-slate-200 rounded w-full"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
