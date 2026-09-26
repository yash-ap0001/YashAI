type LogoProps = { className?: string; tone?: 'auto' | 'dark' };

// Both artworks are rendered; CSS shows the one that matches the active theme.
const Logo = ({ className = '' }: LogoProps) => (
  <>
    <img src="/logo-dark.png" alt="YashAI Technologies" width="440" height="260" className={`logo-on-dark ${className}`} />
    <img src="/logo-light.png" alt="YashAI Technologies" width="440" height="248" className={`logo-on-light ${className}`} />
  </>
);

export default Logo;
