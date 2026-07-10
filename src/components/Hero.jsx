import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';

const INTRO_KEY = 'furrytail-hero-intro-played';

function hasReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function AnimatedMascot({ introActive }) {
  return (
    <div className={`mascot-stage ${introActive ? 'is-entering' : 'is-settled'}`} aria-hidden="true">
      <div className="mascot-shadow" />
      <div className="mascot-art">
        <img className="mascot-image mascot-dog" src="/dog-no-tail.png" alt="" />
        <img className="mascot-image mascot-tail" src="/furry-tail-dog-cutout.png" alt="" />
      </div>
      <i className="dust dust-one" />
      <i className="dust dust-two" />
      <span className="motion-mark">⌁</span>
    </div>
  );
}

function Decorations() {
  return (
    <div className="hero-decor" aria-hidden="true">
      <span className="doodle doodle-heart">♡</span>
      <span className="doodle doodle-paw">🐾</span>
      <span className="doodle doodle-rays">\ /</span>
    </div>
  );
}

export default function Hero() {
  const skipIntro = useMemo(() => {
    if (typeof window === 'undefined') return true;
    return hasReducedMotion() || sessionStorage.getItem(INTRO_KEY) === 'true';
  }, []);
  const [introActive, setIntroActive] = useState(!skipIntro);

  useEffect(() => {
    const image = new Image();
    image.src = '/furry-tail-dog-cutout.png';
    if (!introActive) return undefined;

    document.body.classList.add('furrytail-intro-active');
    const finishIntro = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_KEY, 'true');
      document.body.classList.remove('furrytail-intro-active');
      setIntroActive(false);
    }, 3000);

    return () => {
      window.clearTimeout(finishIntro);
      document.body.classList.remove('furrytail-intro-active');
    };
  }, [introActive]);

  return (
    <main className={`hero ${introActive ? 'hero-intro' : 'hero-ready'}`}>
      {introActive && (
        <div className="intro-overlay" aria-hidden="true">
          <div className="intro-brand">Furry<span>Tail</span><small>happily ever after</small></div>
          <div className="intro-loading-mark"><i /><i /><i /></div>
        </div>
      )}

      <section className="hero-composition" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero-heading">
          <span className="hero-heading-line line-one">Care that</span>
          <span className="hero-heading-line line-two">feels like</span>
          <span className="hero-heading-line line-three">family.<b>♥</b></span>
        </h1>

        <AnimatedMascot introActive={introActive} />
        <Decorations />
      </section>

      <div className="hero-footer">
        <div className="hero-copy">
          <p>Warm, considered care for the ones who choose you. <span>♡</span></p>
          <div className="hero-actions">
            <a className="button button-primary" href="#shop">Shop now <ShoppingBag size={16} /></a>
            <a className="button button-secondary" href="#care">Explore care <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="hero-features" aria-label="Furry Tail highlights">
          <p className="hero-handle">@furrytail <span>♡</span></p>
          <div className="feature-item"><b>☼</b><span>SUNDAY RITUAL</span></div>
          <div className="feature-item"><b>♧</b><span>SANTAL &amp; WHITE TEA</span></div>
          <div className="feature-item"><b>♢</b><span>99.5% NATURALLY DERIVED</span></div>
        </aside>
      </div>
    </main>
  );
}
