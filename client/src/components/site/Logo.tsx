type LogoProps = { className?: string };

// Swaps to the light-on-dark artwork when the visitor uses dark mode.
const Logo = ({ className }: LogoProps) => (
  <picture>
    <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
    <img src="/logo-light.png" alt="YashAI Technologies" width="440" height="248" className={className} />
  </picture>
);

export default Logo;
