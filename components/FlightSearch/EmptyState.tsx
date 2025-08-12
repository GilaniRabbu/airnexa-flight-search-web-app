import React from "react";

const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-8 px-4 rounded-xl border border-dashed border-slate-300 bg-slate-50">
      <div className="mb-2 text-slate-800">No flights found</div>
      <p className="text-sm text-slate-600">
        Try adjusting your search criteria. Different dates,{" "}
        <br className="hidden sm:block" />
        nearby airports, or fewer passengers might help.
      </p>
    </div>
  );
};

export default EmptyState;
