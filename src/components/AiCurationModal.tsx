import React, { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';

interface AiCurationModalProps {
  onClose: () => void;
  onGenerate: () => void;
}

export default function AiCurationModal({ onClose, onGenerate }: AiCurationModalProps) {
  const [goal, setGoal] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [requirements, setRequirements] = useState<string[]>([]);
  const lenis = useLenis();

  useEffect(() => {
    // Bullet-proof lock: stop the Lenis engine entirely
    if (lenis) lenis.stop();
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    return () => {
      if (lenis) lenis.start();
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
    };
  }, [lenis]);

  const toggleRequirement = (req: string) => {
    if (requirements.includes(req)) {
      setRequirements(requirements.filter(r => r !== req));
    } else {
      setRequirements([...requirements, req]);
    }
  };

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D64B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <>
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
      {/* Modal Container */}
      <div style={{
        boxSizing: 'border-box',
        position: 'relative',
        width: '576px', 
        height: '780px',
        maxHeight: '90vh',
        background: '#F8F9FA',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Modal Header */}
        <div style={{
          boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'center',
          padding: '16px 24px', position: 'absolute', height: '69px', left: '0px', right: '0px', top: '0px',
          background: 'rgba(255, 255, 255, 0.8)', borderBottom: '1px solid #F3F4F6', backdropFilter: 'blur(6px)',
          zIndex: 10
        }}>
          <div 
            onClick={onClose}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px 8px 8px 0px', cursor: 'pointer' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px 0px 0px 8px' }}>
            <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: '#111827' }}>
              A.I. Curation
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div data-lenis-prevent="true" className="hide-scroll" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 32px 140px', gap: '32px',
          position: 'absolute', left: '0px', right: '0px', top: '69px', bottom: '0px',
          overflowY: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none'
        }}>

          {/* Intro Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '12px', width: '510px' }}>
            <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 800, fontSize: '30px', lineHeight: '36px', color: '#111827' }}>
              Help us find your perfect land
            </span>
            <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#4B5563' }}>
              Answer a few questions so our AI can curate the best opportunities for you.
            </span>
          </div>

          {/* Form Content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '40px', width: '510px' }}>
            
            {/* Question 1: Goals */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '16px', width: '510px' }}>
              <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: '#111827' }}>
                What is your primary investment goal?
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '12px', width: '510px' }}>
                {['Long-Term Investment (CAGR)', 'Organic Farming & Export', 'Farmhouse & Leisure', 'Fractional / Pool Buying'].map((item) => (
                  <div 
                    key={item}
                    onClick={() => setGoal(item)}
                    style={{
                      boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '16px',
                      width: '510px', height: '58px', background: '#FFFFFF', 
                      border: goal === item ? '2px solid #1D64B5' : '1px solid #E5E7EB', borderRadius: '12px', cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#1F2937' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Question 2: Investment Size */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '16px', width: '510px' }}>
              <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: '#111827' }}>
                What is your target investment size?
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '510px' }}>
                
                {/* Option 1 */}
                <div onClick={() => setSize('entry')} style={{
                  boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px',
                  width: '247px', height: '138px', 
                  background: size === 'entry' ? 'rgba(232, 241, 250, 0.3)' : '#FFFFFF', 
                  border: size === 'entry' ? '1px solid #1D64B5' : '1px solid #E5E7EB', borderRadius: '16px', cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '16px' }}>
                    <div style={{ width: '36px', height: '36px', background: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D64B5" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle></svg>
                    </div>
                    <div style={{ width: '20px', height: '20px', border: size === 'entry' ? 'none' : '2px solid #D1D5DB', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {size === 'entry' && <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1D64B5', border: '2px solid #1D64B5' }}><CheckIcon /></div>}
                    </div>
                  </div>
                  <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '16px', color: '#111827', marginBottom: '4px' }}>Under ₹1 Cr</span>
                  <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 500, fontSize: '12px', letterSpacing: '0.6px', textTransform: 'uppercase', color: '#6B7280' }}>ENTRY LEVEL</span>
                </div>

                {/* Option 2 */}
                <div onClick={() => setSize('mid')} style={{
                  boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px',
                  width: '247px', height: '138px', 
                  background: size === 'mid' ? 'rgba(232, 241, 250, 0.3)' : '#FFFFFF', 
                  border: size === 'mid' ? '1px solid #1D64B5' : '1px solid #E5E7EB', borderRadius: '16px', cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '16px' }}>
                    <div style={{ width: '36px', height: '36px', background: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D64B5" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
                    </div>
                    <div style={{ width: '20px', height: '20px', border: size === 'mid' ? 'none' : '2px solid #D1D5DB', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {size === 'mid' && <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1D64B5', border: '2px solid #1D64B5' }}><CheckIcon /></div>}
                    </div>
                  </div>
                  <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '16px', color: '#111827', marginBottom: '4px' }}>₹1 Cr – ₹2 Cr</span>
                  <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 500, fontSize: '12px', letterSpacing: '0.6px', textTransform: 'uppercase', color: '#6B7280' }}>MID RANGE</span>
                </div>

                {/* Option 3 */}
                <div onClick={() => setSize('premium')} style={{
                  boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px',
                  width: '247px', height: '138px', 
                  background: size === 'premium' ? 'rgba(232, 241, 250, 0.3)' : '#FFFFFF', 
                  border: size === 'premium' ? '1px solid #1D64B5' : '1px solid #E5E7EB', borderRadius: '16px', cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '16px' }}>
                    <div style={{ width: '36px', height: '36px', background: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D64B5" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </div>
                    <div style={{ width: '20px', height: '20px', border: size === 'premium' ? 'none' : '2px solid #D1D5DB', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {size === 'premium' && <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1D64B5', border: '2px solid #1D64B5' }}><CheckIcon /></div>}
                    </div>
                  </div>
                  <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '16px', color: '#111827', marginBottom: '4px' }}>₹2 Cr – ₹5 Cr</span>
                  <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 500, fontSize: '12px', letterSpacing: '0.6px', textTransform: 'uppercase', color: '#6B7280' }}>PREMIUM SELECTION</span>
                </div>

                {/* Option 4 */}
                <div onClick={() => setSize('hnw')} style={{
                  boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px',
                  width: '247px', height: '138px', 
                  background: size === 'hnw' ? 'rgba(232, 241, 250, 0.3)' : '#FFFFFF', 
                  border: size === 'hnw' ? '1px solid #1D64B5' : '1px solid #E5E7EB', borderRadius: '16px', cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '16px' }}>
                    <div style={{ width: '36px', height: '36px', background: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D64B5" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    </div>
                    <div style={{ width: '20px', height: '20px', border: size === 'hnw' ? 'none' : '2px solid #D1D5DB', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {size === 'hnw' && <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1D64B5', border: '2px solid #1D64B5' }}><CheckIcon /></div>}
                    </div>
                  </div>
                  <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '16px', color: '#111827', marginBottom: '4px' }}>₹5 Cr+</span>
                  <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 500, fontSize: '12px', letterSpacing: '0.6px', textTransform: 'uppercase', color: '#6B7280' }}>HNW PORTFOLIO</span>
                </div>
              </div>
            </div>

            {/* Question 3: Regions */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '16px', width: '510px' }}>
              <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: '#111827' }}>
                Which regions are you targeting?
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '510px' }}>
                {[
                  { id: 'zone-a1', zone: 'ZONE A-1', name: 'Premium' },
                  { id: 'zone-b2', zone: 'ZONE B-2', name: 'Emerging' },
                  { id: 'zone-c', zone: 'ZONE C', name: 'Peri-urban' },
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setRegion(item.id)}
                    style={{
                      boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px',
                      width: '510px', height: '82px', background: region === item.id ? 'rgba(232, 241, 250, 0.3)' : '#FFFFFF',
                      border: region === item.id ? '1px solid #1D64B5' : '1px solid #E5E7EB', borderRadius: '12px', cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                      <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '0.6px', textTransform: 'uppercase', color: region === item.id ? '#1D64B5' : '#6B7280' }}>
                        {item.zone}
                      </span>
                    </div>
                    <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 700, fontSize: '18px', color: '#111827' }}>
                      {item.name}
                    </span>
                  </div>
                ))}
                
                {/* AI Optimized Option */}
                <div 
                  onClick={() => setRegion('ai-optimized')}
                  style={{
                    boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px',
                    width: '510px', height: '82px', background: 'rgba(232, 241, 250, 0.3)',
                    border: '1px solid #1D64B5', borderRadius: '12px', cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1D64B5" strokeWidth="2"><path d="M14 3L15.8 10.2L23 12L15.8 13.8L14 21L12.2 13.8L5 12L12.2 10.2L14 3Z"/></svg>
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '0.6px', textTransform: 'uppercase', color: '#1D64B5' }}>
                      SURPRISE ME
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '18px', color: '#111827' }}>
                    AI Optimized
                  </span>
                </div>

              </div>
            </div>

            {/* Question 4: Physical Requirements */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '16px', width: '510px' }}>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: '#111827' }}>
                Any strict physical requirements?
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', width: '510px' }}>
                {[
                  { id: 'groundwater', label: 'Abundant Groundwater', icon: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /> },
                  { id: 'highway', label: 'Highway Frontage', icon: <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5-5-5 5M12 4v12" /> },
                  { id: 'soil', label: 'Specific Soil (Red/Black)', icon: <path d="M2 22h20M7 2v20M17 2v20M12 22V10" /> },
                  { id: 'organic', label: 'Organic-Ready', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> }
                ].map((req) => (
                  <div
                    key={req.id}
                    onClick={() => toggleRequirement(req.id)}
                    style={{
                      boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 16px', gap: '8px',
                      background: requirements.includes(req.id) ? '#EFF6FF' : '#FFFFFF', 
                      border: requirements.includes(req.id) ? '1px solid #1D64B5' : '1px solid #E5E7EB', borderRadius: '9999px', cursor: 'pointer'
                    }}
                  >
                    <div style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={requirements.includes(req.id) ? '#1D64B5' : '#6B7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         {req.icon}
                       </svg>
                    </div>
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: '14px', lineHeight: '20px', color: requirements.includes(req.id) ? '#1D64B5' : '#374151' }}>
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Sticky Action Footer */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px',
          position: 'absolute', height: '108px', left: '0px', right: '0px', bottom: '0px',
          background: 'linear-gradient(0deg, #F8F9FA 0%, rgba(248, 249, 250, 0.9) 50%, rgba(248, 249, 250, 0) 100%)',
          zIndex: 10
        }}>
          <button 
            onClick={onGenerate}
            style={{
              display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '16px 0px', gap: '8px',
              width: '526px', height: '60px', background: 'radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)',
              boxShadow: '0px 8px 20px rgba(26, 115, 232, 0.3)', borderRadius: '53px', cursor: 'pointer', border: 'none'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3L15.8 10.2L23 12L15.8 13.8L14 21L12.2 13.8L5 12L12.2 10.2L14 3Z"></path>
            </svg>
            <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '18px', lineHeight: '28px', textAlign: 'center', color: '#FFFFFF' }}>
              Generate AI Matches
            </span>
          </button>
        </div>

      </div>
    </div>
    </>
  );
}
