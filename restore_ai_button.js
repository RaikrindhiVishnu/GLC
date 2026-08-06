const fs = require('fs');
let content = fs.readFileSync('src/app/home/compareassets/page.tsx', 'utf8');

// 1. Add state for scroll if it doesn't exist
if (!content.includes('const [scrolled, setScrolled]')) {
    const hookStr = `  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);\n\n`;

    content = content.replace('const searchParams = useSearchParams();', hookStr + '  const searchParams = useSearchParams();');
}

// 2. Add Sparkle button just before the end of the hero section or right inside the main section 
if (!content.includes('{/* Sparkle button */}')) {
    const sparkleBtn = `          {/* Sparkle button */}
          <div 
            style={{ 
              boxSizing: "border-box", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", 
              position: "fixed", width: "52px", height: "51.39px", right: "60px", bottom: "100px", 
              background: scrolled ? "#2780C4" : "#191C1D",
              boxShadow: "0px 10.0267px 7.52px rgba(0,0,0,0.05), inset 3.76px 5.01333px 2.50667px -3.76px rgba(255,255,255,0.25)", 
              borderRadius: "125.333px", cursor: "pointer", zIndex: 100, transition: "background 0.3s ease" 
            }} 
            onClick={() => router.push("/home/ai-generated-farmlands")}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M10.79 9.85333L11.7498 6.49608C12.1095 5.23941 13.8905 5.23941 14.2501 6.49608L15.2089 9.85333C15.2696 10.0657 15.3834 10.2591 15.5396 10.4153C15.6958 10.5715 15.8892 10.6853 16.1016 10.746L19.4588 11.7047C20.7155 12.0644 20.7155 13.8454 19.4588 14.2051L16.1016 15.1638C15.8892 15.2245 15.6958 15.3383 15.5396 15.4945C15.3834 15.6507 15.2696 15.8441 15.2089 16.0565L14.2501 19.4137C13.8905 20.6704 12.1095 20.6704 11.7498 19.4137L10.7911 16.0565C10.7304 15.8441 10.6165 15.6507 10.4604 15.4945C10.3042 15.3383 10.1108 15.2245 9.8984 15.1638L6.54115 14.2051C5.28448 13.8454 5.28448 12.0644 6.54115 11.7047L9.8984 10.746C10.1108 10.6853 10.3042 10.5715 10.4604 10.4153C10.6165 10.2591 10.7304 10.0657 10.7911 9.85333M19.6126 17.8375C19.9257 16.9242 21.242 16.9232 21.554 17.8375L21.5821 17.9317L21.9028 19.2187L23.1898 19.5405C24.2298 19.8005 24.2298 21.276 23.1898 21.536L21.9028 21.8577L21.5856 23.1447C21.3222 24.1837 19.8456 24.1837 19.5856 23.1447L19.2638 21.8577L17.9768 21.536C16.9368 21.276 16.9368 19.7994 17.9768 19.5405L19.2638 19.2187L19.5856 17.9317L19.6126 17.8375ZM4.44598 2.66975C4.76882 1.72616 6.16307 1.75758 6.41548 2.764L6.73615 4.051L8.02315 4.37275C9.06315 4.63275 9.06315 6.10825 8.02315 6.36825L6.73615 6.69L6.41548 7.977C6.15548 9.01591 4.6789 9.01591 4.4189 7.977L4.09715 6.69L2.81015 6.36825C1.77015 6.10825 1.77015 4.63166 2.81015 4.37275L4.09715 4.051L4.4189 2.764L4.44598 2.66975Z" fill="white"/></svg>
          </div>\n`;

    content = content.replace('</section>', sparkleBtn + '\n        </section>');
}

fs.writeFileSync('src/app/home/compareassets/page.tsx', content);
