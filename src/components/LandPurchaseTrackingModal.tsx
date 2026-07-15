import React, { useEffect } from 'react';
import Image from 'next/image';
import { useLenis } from 'lenis/react';

interface LandPurchaseTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LandPurchaseTrackingModal({ isOpen, onClose }: LandPurchaseTrackingModalProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;

    if (lenis) lenis.stop();
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    return () => {
      if (lenis) lenis.start();
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
    };
  }, [lenis, isOpen]);

  if (!isOpen) return null;

  const CheckIcon = () => (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5L5 9L13 1" stroke="#0F2F4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const LockIcon = () => (
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8H2C0.89543 8 0 8.89543 0 10V19C0 20.1046 0.89543 21 2 21H14C15.1046 21 16 20.1046 16 19V10C16 8.89543 15.1046 8 14 8Z" fill="#9CA3AF"/>
      <path d="M8 3C9.32608 3 10.5979 3.52678 11.5355 4.46447C12.4732 5.40215 13 6.67392 13 8H15C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8H3C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3Z" fill="#9CA3AF"/>
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
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999999,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
      {/* Main Modal Container */}
      <div style={{
        boxSizing: 'border-box', position: 'relative', width: '1005px', height: '921px', maxHeight: '95vh',
        background: '#F3F4F5', boxShadow: '0px 40px 80px -20px rgba(9, 20, 38, 0.15)', borderRadius: '48px',
        overflow: 'hidden', display: 'flex', flexDirection: 'column', transform: 'scale(0.9)'
      }}>
        
        {/* Header Section */}
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '32px 40px', gap: '24px',
          height: '66px', background: '#FFFFFF', zIndex: 10, width: '100%', boxSizing: 'border-box'
        }}>
          {/* Back Button */}
          <button onClick={onClose} style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', 
            borderRadius: '9999px', background: 'transparent', border: 'none', cursor: 'pointer'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '24px', lineHeight: '32px', letterSpacing: '-0.6px', color: '#0F2F4C' }}>
            Land Purchase Tracking
          </span>
        </div>

        {/* Scrollable Content Area */}
        <div data-lenis-prevent="true" className="hide-scroll" style={{
          position: 'relative', width: '100%', flexGrow: 1, overflowY: 'auto', overflowX: 'hidden',
          msOverflowStyle: 'none', scrollbarWidth: 'none'
        }}>
          
          <div style={{ position: 'relative', width: '1000px', height: '842px', margin: '0 auto' }}>
            
            {/* Asset Sub-Card */}
            <div style={{
              boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px', gap: '4px',
              position: 'absolute', width: '335px', height: '381.75px', left: '42px', top: '24px',
              background: '#FFFFFF', border: '1px solid rgba(194, 198, 214, 0.3)', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: '24px'
            }}>
              <div style={{ width: '285px', height: '213.75px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80" alt="Property" fill style={{ objectFit: 'cover' }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '12px 0px 0px', width: '285px' }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '24px', lineHeight: '32px', color: '#191C1E' }}>
                  GLC SOS 01
                </span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px 0px 14px', width: '285px' }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#424754' }}>
                  Total Value: ₹5.2Cr
                </span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '4px 16px', gap: '4px', background: 'rgba(33, 112, 228, 0.1)', borderRadius: '9999px' }}>
                <div style={{ width: '8px', height: '8px', background: '#2780C4', borderRadius: '9999px' }}></div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.6px', textTransform: 'uppercase', color: '#2780C4' }}>
                  STATUS: PROPERTY BLOCKED
                </span>
              </div>
            </div>

            {/* Compliance Progress */}
            <div style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', padding: '259.25px 0px 0px',
              position: 'absolute', width: '335px', height: '339.25px', minHeight: '80px', left: '42px', top: '451px'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '32px 0px 0px', gap: '8px', width: '335px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: '335px', height: '28px' }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '14px', lineHeight: '20px', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#424754' }}>
                    COMPLIANCE & DOCS
                  </span>
                  <div style={{ position: 'relative', width: '114.84px', height: '28px' }}>
                    <span style={{ position: 'absolute', left: '0px', top: '-0.5px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '20px', lineHeight: '28px', color: '#2780C4' }}>
                      75%
                    </span>
                    <span style={{ position: 'absolute', left: '46.92px', top: '6px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '14px', lineHeight: '20px', color: '#424754' }}>
                      Complete
                    </span>
                  </div>
                </div>
                <div style={{ width: '335px', height: '12px', background: '#E6E8EA', borderRadius: '9999px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: '0%', right: '25%', top: '0px', bottom: '0px', background: '#2780C4', borderRadius: '9999px' }}></div>
                </div>
              </div>
            </div>

            {/* Right Column: Pipeline Tracker */}
            <div style={{
              boxSizing: 'border-box', position: 'absolute', width: '553px', height: '802px', left: '418px', top: '24px',
              background: '#FFFFFF', border: '1px solid rgba(197, 198, 205, 0.15)', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: '32px'
            }}>
              
              {/* Step 1 */}
              <div style={{ position: 'absolute', width: '718px', height: '112px', left: '41px', top: '41px' }}>
                <div style={{ position: 'absolute', width: '40px', height: '112px', left: '0px', top: '0px' }}>
                  <div style={{ position: 'absolute', width: '40px', height: '40px', left: '0px', top: '0px', background: '#C5DFFF', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckIcon />
                  </div>
                  <div style={{ position: 'absolute', width: '2px', height: '72px', left: '19px', top: '40px' }}>
                    <div style={{ position: 'absolute', width: '2px', height: '64px', left: '0px', top: '8px', background: '#AED6EF' }}></div>
                  </div>
                </div>
                <div style={{ position: 'absolute', width: '198px', height: '60px', left: '64px', top: '0px' }}>
                  <span style={{ position: 'absolute', width: '230px', height: '28px', left: '0px', top: '4px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px', color: '#0F2F4C' }}>
                    Token Amount Payment
                  </span>
                  <span style={{ position: 'absolute', width: '283px', height: '24px', left: '0px', top: '36px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#45474C' }}>
                    Pay token amount to initiate purchase
                  </span>
                </div>
                <span style={{ position: 'absolute', width: '72px', height: '15px', left: '64px', top: '71px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '16px', lineHeight: '15px', color: '#2780C4' }}>
                  ₹50,000
                </span>
              </div>

              {/* Step 2 */}
              <div style={{ position: 'absolute', width: '718px', height: '134px', left: '41px', top: '161px' }}>
                <div style={{ position: 'absolute', width: '40px', height: '144px', left: '0px', top: '0px' }}>
                  <div style={{ position: 'absolute', width: '40px', height: '40px', left: '0px', top: '0px', background: '#C5DFFF', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckIcon />
                  </div>
                  <div style={{ position: 'absolute', width: '2px', height: '72px', left: '19px', top: '40px' }}>
                    <div style={{ position: 'absolute', width: '2px', height: '64px', left: '0px', top: '8px', background: '#AED6EF' }}></div>
                  </div>
                </div>
                <div style={{ position: 'absolute', width: '654px', height: '62px', left: '64px', top: '6px' }}>
                  <span style={{ position: 'absolute', width: '222px', height: '28px', left: '0px', top: '0px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px', color: '#0F2F4C' }}>
                    Buyer KYC Verification
                  </span>
                  <span style={{ position: 'absolute', width: '326px', height: '20px', left: '0px', top: '38px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#5F5E5E' }}>
                    Complete Your KYC Verification to proceed
                  </span>
                </div>
              </div>

              {/* Step 3 (Active) */}
              <div style={{ position: 'absolute', width: '718px', height: '71px', left: '41px', top: '287px' }}>
                <div style={{ position: 'absolute', width: '40px', height: '108px', left: '0px', top: '0px' }}>
                  <div style={{ boxSizing: 'border-box', position: 'absolute', width: '40px', height: '40px', left: '0px', top: '1px', background: '#FFFFFF', border: '2px solid rgba(192, 199, 210, 0.3)', borderRadius: '9999px' }}>
                    <div style={{ position: 'absolute', width: '12px', height: '12px', left: '12px', top: '12px', background: '#2780C4', borderRadius: '9999px' }}></div>
                  </div>
                  <div style={{ position: 'absolute', width: '2px', height: '72px', left: '19px', top: '40px' }}>
                    <div style={{ position: 'absolute', width: '2px', height: '60px', left: '0px', top: '8px', background: '#AED6EF' }}></div>
                  </div>
                </div>
                <div style={{ position: 'absolute', width: '400px', height: '64px', left: '64px', top: '0px' }}>
                  <span style={{ position: 'absolute', width: '169px', height: '28px', left: '0px', top: '4px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px', color: '#8797A5' }}>
                    Legal Verification
                  </span>
                  <span style={{ position: 'absolute', width: '265px', height: '24px', left: '0px', top: '40px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#A2A3A5' }}>
                    Our team will verify all legal aspects
                  </span>
                </div>
                <div style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4px 16px',
                  position: 'absolute', width: '98px', height: '32px', left: '350px', top: '5px', background: '#2780C4', borderRadius: '29px'
                }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.4px', textTransform: 'capitalize', color: '#FFFFFF' }}>
                    Pending
                  </span>
                </div>
              </div>

              {/* Step 4: Sale Agreement */}
              <div style={{ position: 'absolute', width: '382px', height: '60px', left: '41px', top: '401px' }}>
                <div style={{ position: 'absolute', width: '40px', height: '40px', left: '0px', top: '0px', background: '#EDEEEF', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LockIcon />
                </div>
                <div style={{ position: 'absolute', width: '2px', height: '72px', left: '19px', top: '40px' }}>
                  <div style={{ position: 'absolute', width: '2px', height: '60px', left: '0px', top: '8px', background: '#AED6EF' }}></div>
                </div>
                <div style={{ position: 'absolute', width: '400px', height: '64px', left: '64px', top: '0px' }}>
                  <span style={{ position: 'absolute', width: '155px', height: '28px', left: '0px', top: '4px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px', color: '#8797A5' }}>
                    Sale Agreement
                  </span>
                  <span style={{ position: 'absolute', width: '328px', height: '24px', left: '0px', top: '40px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#A2A3A5' }}>
                    Agreement generation and digital signature
                  </span>
                </div>
              </div>

              {/* Step 5: Full Payment */}
              <div style={{ position: 'absolute', width: '382px', height: '60px', left: '41px', top: '511px' }}>
                <div style={{ position: 'absolute', width: '40px', height: '40px', left: '0px', top: '0px', background: '#EDEEEF', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LockIcon />
                </div>
                <div style={{ position: 'absolute', width: '2px', height: '72px', left: '19px', top: '40px' }}>
                  <div style={{ position: 'absolute', width: '2px', height: '60px', left: '0px', top: '8px', background: '#AED6EF' }}></div>
                </div>
                <div style={{ position: 'absolute', width: '400px', height: '64px', left: '64px', top: '0px' }}>
                  <span style={{ position: 'absolute', width: '124px', height: '28px', left: '0px', top: '4px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px', color: '#8797A5' }}>
                    Full Payment
                  </span>
                  <span style={{ position: 'absolute', width: '317px', height: '17px', left: '0px', top: '44px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '16px', color: '#94A3B8' }}>
                    Pay the remaining amount as per schedule
                  </span>
                </div>
              </div>

              {/* Step 6: Registration Process */}
              <div style={{ position: 'absolute', width: '382px', height: '60px', left: '41px', top: '621px' }}>
                <div style={{ position: 'absolute', width: '40px', height: '40px', left: '0px', top: '0px', background: '#EDEEEF', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LockIcon />
                </div>
                <div style={{ position: 'absolute', width: '2px', height: '72px', left: '19px', top: '40px' }}>
                  <div style={{ position: 'absolute', width: '2px', height: '60px', left: '0px', top: '8px', background: '#AED6EF' }}></div>
                </div>
                <div style={{ position: 'absolute', width: '400px', height: '64px', left: '64px', top: '0px' }}>
                  <span style={{ position: 'absolute', width: '201px', height: '28px', left: '0px', top: '4px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px', color: '#8797A5' }}>
                    Registration Process
                  </span>
                  <span style={{ position: 'absolute', width: '276px', height: '17px', left: '0px', top: '44px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '16px', color: '#94A3B8' }}>
                    Property registration with authorities
                  </span>
                </div>
              </div>

              {/* Step 7: Land Ownership Completed */}
              <div style={{ position: 'absolute', width: '382px', height: '60px', left: '41px', top: '731px' }}>
                <div style={{ position: 'absolute', width: '40px', height: '40px', left: '0px', top: '0px', background: '#EDEEEF', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LockIcon />
                </div>
                <div style={{ position: 'absolute', width: '400px', height: '64px', left: '64px', top: '0px' }}>
                  <span style={{ position: 'absolute', width: '274px', height: '28px', left: '0px', top: '4px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px', color: '#8797A5' }}>
                    Land Ownership Completed
                  </span>
                  <span style={{ position: 'absolute', width: '334px', height: '17px', left: '0px', top: '44px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '16px', color: '#94A3B8' }}>
                    Congratulations! You are now the land owner
                  </span>
                </div>
              </div>

            </div>
          </div>
      </div>
      </div>
      </div>
    </>
  );
}
