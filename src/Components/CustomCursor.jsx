import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768); // small screen breakpoint
    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Smooth cursor following
  useEffect(() => {
    const animate = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [position]);

  // Hover detection
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.onclick ||
        target.classList.contains("hoverable")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // Sizes based on screen
  const outerSize = isSmallScreen
    ? 20 // tiny ring for mobile
    : isHovering
    ? 60
    : isClicking
    ? 70
    : 70;

  const innerSize = isSmallScreen ? 4 : 12; // tiny dot for mobile

  // Hide cursor completely on very small screens (optional)
  const cursorStyle = isSmallScreen
    ? { display: "none" }
    : {};

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ease-out"
        style={{
          ...cursorStyle,
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          width: `${outerSize}px`,
          height: `${outerSize}px`,
          marginLeft: `-${outerSize / 2}px`,
          marginTop: `-${outerSize / 2}px`,
        }}
      >
        <div
          className="w-full h-full rounded-full transition-all duration-300"
          style={{
            border: `3px solid ${isHovering ? "#FC9F0AFF" : "#F68809FF"}`,
            backgroundColor: isHovering
              ? "rgba(6, 182, 212, 0.1)"
              : "rgba(59, 130, 246, 0.05)",
            boxShadow: isHovering
              ? "0 0 20px rgba(6, 182, 212, 0.2)"
              : "0 0 15px rgba(59, 130, 246, 0.2)",
          }}
        />
      </div>

      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[10000] transition-all duration-100"
        style={{
          ...cursorStyle,
          transform: `translate(${position.x}px, ${position.y}px) scale(${
            isClicking ? 0.6 : 1
          })`,
          width: `${innerSize}px`,
          height: `${innerSize}px`,
          marginLeft: `-${innerSize / 2}px`,
          marginTop: `-${innerSize / 2}px`,
        }}
      >
        <div
          className="w-full h-full rounded-full transition-all duration-200"
          style={{
            backgroundColor: isHovering ? "#E39D08FF" : "#F68809FF",
            boxShadow: `0 0 ${isHovering ? "12px" : "8px"} ${
              isHovering ? "rgba(6, 182, 212, 0.4)" : "rgba(59, 130, 246, 0.4)"
            }`,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
