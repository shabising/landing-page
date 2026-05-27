export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}) {
  const base = `
    rounded-xl
    px-6
    py-3
    font-medium
    transition
    duration-300
    hover:scale-105
    hover:-translate-y-1
  `;

  const variants = {
    primary: `
      bg-black
      text-white
      dark:bg-white
      dark:text-black
      hover:shadow-[0_0_30px_rgba(0,0,0,0.15)]
      dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
    `,
    outline: `
      border
      border-gray-300
      dark:border-white/10
      bg-white/70
      dark:bg-white/5
      backdrop-blur-xl
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}