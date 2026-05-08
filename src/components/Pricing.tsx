export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      tier: "Silver Tier",
      price: "₹9,999",
      features: ["Unlock 4 Farmlands", "70-Year Title Search", "PDF Export Access"],
      highlight: false,
    },
    {
      name: "Growth",
      tier: "Gold Tier",
      price: "₹19,999",
      features: [
        "Unlocks 10 Farmlands",
        "Permanent GIS Access",
        "IO Risk Assesment",
        "Priority Document Request",
      ],
      highlight: true,
      popular: true,
    },
    {
      name: "Annual Pass",
      tier: "Platinum Tier",
      price: "₹29,999",
      features: [
        "Unlimited unlocks for 1 year",
        "Dedicated Intelligence Officer",
        "Early Access to Pre-Docs",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1280px] px-8">
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center gap-4">
          <h2 className="text-[36px] font-bold leading-[40px] tracking-[-0.9px] text-[#131600] font-jakarta">
            Premium-Investor Access
          </h2>
          <p className="max-w-[672px] text-[16px] leading-[24px] text-[#45474C] font-jakarta">
            Select a subscription model that fits your portfolio scale. From single-asset insights to global agricultural surveillance.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-[-20px]">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative flex flex-col overflow-hidden transition-all duration-300 ${
                tier.highlight
                  ? "w-full max-w-[483.7px] min-h-[642px] z-20 shadow-[0px_4px_20px_rgba(50,50,50,0.2)] rounded-[42px] border-[1px] border-[#0F2F4C]"
                  : "w-full max-w-[335px] min-h-[428px] z-10 shadow-[0px_4px_18px_rgba(50,50,50,0.2)] rounded-[42px] "
              } bg-white`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="bg-[#0F2F4C] py-4 text-center">
                  <span className="text-[21px] font-semibold text-white font-jakarta">Most popular</span>
                </div>
              )}

              {/* Card Header */}
              <div className={`flex flex-col items-center justify-center border-b border-black/10 px-10 ${tier.highlight ? "py-10" : "py-8"}`}>
                <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#0F2F4C] opacity-40 font-jakarta">
                  {tier.tier}
                </span>
                <h3 className={`mt-2 font-bold text-[#0F2F4C] font-jakarta ${tier.highlight ? "text-[28px]" : "text-[26px]"}`}>
                  {tier.name}
                </h3>
                <div className={`mt-4 font-extrabold text-[#0F2F4C] font-jakarta ${tier.highlight ? "text-[70px]" : "text-[42px]"}`}>
                  {tier.price}
                </div>
              </div>

              {/* Features List */}
              <div className={`flex-1 bg-[#F5F5F5] px-10 ${tier.highlight ? "py-12" : "py-8"}`}>
                <ul className={`${tier.highlight ? "space-y-8" : "space-y-6"}`}>
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-4">
                      <div className="flex shrink-0 items-center justify-center">
                        <svg className="w-5 h-5 text-[#2780C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[16px] font-semibold text-[#636363] font-jakarta">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="p-10 bg-[#F5F5F5]">
                {tier.highlight ? (
                  <button 
                    className="w-full rounded-[26px] py-4 text-[18px] font-semibold text-white transition-all hover:scale-105"
                    style={{ background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)" }}
                  >
                    Select Plan
                  </button>
                ) : (
                  <button className="w-full rounded-[26px] border border-[#2780C4] bg-[#AED6EF1A] py-4 text-[18px] font-semibold text-[#2780C4] transition-all hover:bg-[#2780C4] hover:text-white">
                    Select Plan
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

