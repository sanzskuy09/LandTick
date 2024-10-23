"use client";
const BadgeStatus = ({ status }) => {
  const classBg =
    status.toLowerCase() === "pending" ? "bg-[#ffdbae]" : "bg-[#b3fea7]";

  const classText =
    status.toLowerCase() === "pending" ? "text-[#F7941E]" : "text-[#0BDC5F]";

  return (
    <div>
      <div className={`${classBg} w-max px-4 py-1 rounded-md mt-4`}>
        <p
          className={`${classText} font-medium text-[12px] md:text-sm capitalize`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default BadgeStatus;
