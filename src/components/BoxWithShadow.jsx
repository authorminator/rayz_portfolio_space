import { useEffect, useRef } from "react";

export default function BoxWithShadow({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const maxShadow = 80;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    function updateShadows() {
      const { innerWidth, innerHeight } = window;
      const dx = mouseX - innerWidth / 2;
      const dy = mouseY - innerHeight / 2;

      const normX = dx / (innerWidth / 2);
      const normY = dy / (innerHeight / 2);

      const shadowX = -normX * maxShadow;
      const shadowY = -normY * maxShadow;

      if (wrapperRef.current) {
        const child = wrapperRef.current.firstChild;

        if (child) {
          // 🔑 Sync wrapper size to child size
          wrapperRef.current.style.width = `${child.offsetWidth}px`;
          wrapperRef.current.style.height = `${child.offsetHeight}px`;

          // Apply shadows
          if (child.classList.contains("circle")) {
            wrapperRef.current.style.borderRadius = "50%";
            wrapperRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.6)`;
            wrapperRef.current.style.filter = "";
          } else {
            wrapperRef.current.style.borderRadius = "";
            wrapperRef.current.style.boxShadow = "";
            wrapperRef.current.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.6))`;
          }
        }
      }

      requestAnimationFrame(updateShadows);
    }

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updateShadows);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="box-with-shadow">
      {children}
    </div>
  );
}
