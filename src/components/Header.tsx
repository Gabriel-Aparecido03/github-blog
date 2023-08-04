import logoSvg from '../assets/Logo.svg'

export function Header() {
  return (
    <header 
      className="flex-1 h-[296px] w-screen flex items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('../assets/Cover.svg')]"
    >
      <img src={logoSvg} alt="logo-svg" />
    </header>
  )
}