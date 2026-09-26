type LogoProps = { className?: string; tone?: 'auto' | 'dark' };

// "auto" follows the visitor's colour scheme; "dark" forces the light-on-dark artwork.
const Logo = ({ className, tone = 'auto' }: LogoProps) =>
  tone === 'dark' ? (
    <img src="/logo-dark.png" alt="YashAI Technologies" width="440" height="260" className={className} />
  ) : (
    <picture>
      <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
      <img src="/logo-light.png" alt="YashAI Technologies" width="440" height="248" className={className} />
    </picture>
  );

export default Logo;
