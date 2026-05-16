export default function FilterChips() {
  const chips = [
    "Vizag",
    "Andhra Pradesh",
    "1 - 10 Cr",
    "20 Acres",
    "GLC's Exclusive",
    "Canal Access",
    "Senior Water Rights",
  ];

  return (
    <div className="w-full flex flex-col gap-6 mx-auto">
      <div className="w-full h-[48px]">
        <h2 
          className="text-[#576400]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "48px",
            letterSpacing: "-2.4px",
          }}
        >
          Total Farmlands
        </h2>
      </div>

      <div className="flex flex-row items-center gap-[20px] overflow-x-auto pb-4 hide-scrollbar">
        {chips.map((label, index) => (
          <button
            key={index}
            className="flex flex-row items-center justify-center gap-[10px] px-[24px] py-[10px] bg-white rounded-full flex-shrink-0 w-auto min-w-fit"
            style={{
              height: "42px",
              border: "1px solid rgba(22, 69, 115, 0.5)",
              boxShadow: "0px 8px 32px rgba(31, 38, 135, 0.03)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span 
              className="text-[#164573] whitespace-nowrap"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: index === 0 || index === 4 ? 700 : 500,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              {label}
            </span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#164573" strokeWidth="2" className="flex-shrink-0">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
