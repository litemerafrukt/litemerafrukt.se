import React from "react"
import Link from "next/link"
import SiteNav from "./SiteNav"

export default function Nav() {
  const navigationLinks = React.useRef<HTMLDivElement>(null)
  const [shouldShowNavigation, showNavigation] = React.useState(false)

  React.useEffect(() => {
    const isClickOutside = (event: MouseEvent) => {
      if (navigationLinks.current === null) {
        return
      }

      if (
        !(navigationLinks.current as any).contains(event.target) &&
        shouldShowNavigation
      ) {
        showNavigation(false)
      }
    }

    document.addEventListener("click", isClickOutside)

    return () => {
      document.removeEventListener("click", isClickOutside)
    }
  })

  return (
    <div style={{ position: "relative" }}>
      {shouldShowNavigation && (
        <div ref={navigationLinks} className="navigation__links">
          <div className="navigation" onClick={() => showNavigation(false)}>
            &lt;<span className="navigation__text">nav </span>/&gt;
          </div>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <SiteNav />
          </nav>
        </div>
      )}
      <div className="navigation" onClick={() => showNavigation(true)}>
        &lt;<span className="navigation__text">nav </span>/&gt;
      </div>
    </div>
  )
}
