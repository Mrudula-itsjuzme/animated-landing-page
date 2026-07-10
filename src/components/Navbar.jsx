import React from 'react';
import { PawPrint } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="site-header" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '6px',
      paddingBottom: '20px',
      width: '100%',
      zIndex: 20
    }}>
      {/* Brand / Logo Section */}
      <div className="site-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <a href="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'baseline',
          fontSize: '34px',
          fontWeight: 800,
          letterSpacing: '-0.5px',
          lineHeight: 1,
          fontFamily: 'var(--font-serif)'
        }}>
          <span style={{ color: '#4B6342' }}>Furry</span>
          <span style={{ color: '#EA7928', display: 'flex', alignItems: 'baseline' }}>
            Ta
            <span style={{ position: 'relative', display: 'inline-block' }}>
              i
              <span style={{
                position: 'absolute',
                top: '-13px',
                left: '2px',
                color: '#EA7928',
                transform: 'rotate(-10deg)'
              }}>
                <PawPrint size={14} fill="#EA7928" />
              </span>
            </span>
            l
          </span>
        </a>
        
        {/* Subtitle with branches & heart */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '6px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13.5px',
            color: '#5A734C',
            fontWeight: 500,
            letterSpacing: '0.2px'
          }}>
            <span style={{ transform: 'scaleX(-1)', display: 'inline-block' }}>🌿</span>
            <span>happily ever after</span>
            <span>🌿</span>
          </div>
          <span style={{
            color: '#E48F89',
            fontSize: '11px',
            marginTop: '-1px'
          }}>
            ♡
          </span>
        </div>
      </div>

      {/* Navigation Links - All Caps */}
      <nav className="site-nav" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '44px',
        marginRight: 'auto',
        marginLeft: '15%'
      }}>
        {['HOME', 'GROOMING', 'SHOP', 'ABOUT US'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            style={{
              textDecoration: 'none',
              color: '#362116',
              fontSize: '14.5px',
              fontWeight: 600,
              letterSpacing: '1.4px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#EA7928';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#362116';
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Outlined CTA Button */}
      <div className="site-booking">
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#362116',
            border: '1.5px solid #4B6342',
            borderRadius: '9999px',
            padding: '10px 24px',
            fontSize: '14.5px',
            fontWeight: 600,
            letterSpacing: '0.6px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4B6342';
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#362116';
            e.currentTarget.style.transform = 'translateY(0px)';
          }}
        >
          BOOK NOW ♡
        </button>
      </div>
    </header>
  );
}
