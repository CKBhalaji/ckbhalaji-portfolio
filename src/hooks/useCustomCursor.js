// src/hooks/useCustomCursor.js
// No explicit React import needed if React is globally available in this context
import React from "react";
const useCustomCursor = () => {
    React.useEffect(() => {
        document.body.classList.add('Cursor-Main');

        // Create cursor elements
        const cursor = document.createElement('div');
        cursor.id = 'cursor';
        const cursorView = document.createElement('span');
        cursorView.id = 'cursorView';
        cursor.appendChild(cursorView);
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.id = 'cursorDot';
        document.body.appendChild(cursorDot);

        // Set initial position to center of the screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        cursor.style.left = `${centerX}px`;
        cursor.style.top = `${centerY}px`;
        cursorDot.style.left = `${centerX}px`;
        cursorDot.style.top = `${centerY}px`;

        // Mouse move handler using animate for smooth movement
        const handleMouseMove = (evt) => {
            if (!cursor || !cursorDot) return;

            // Set left/top directly to mouse position
            const x = evt.clientX;
            const y = evt.clientY;

            cursor.animate(
                { left: `${x}px`, top: `${y}px` },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    fill: "forwards",
                }
            );
            cursorDot.animate(
                { left: `${x}px`, top: `${y}px` },
                {
                    duration: 100,
                    easing: "ease-out",
                    fill: "forwards",
                }
            );
        };

        // Mouse down ripple effect (optional)
        const handleMouseClick = () => {
            if (!cursor) return;
            const ripple = document.createElement("span");
            ripple.classList.add(
                "absolute",
                "w-[200%]",
                "aspect-square",
                "rounded-full",
                "bg-[var(--orbitDotColor)]",
                "opacity-0",
                "animate-ripple"
            );
            cursor.appendChild(ripple);
            setTimeout(() => {
                if (!cursor) return;
                cursor.removeChild(ripple);
            }, 1000);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", handleMouseClick);

        // Add global CSS for the custom cursor and fonts
        const style = document.createElement('style');
        style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;700&display=swap');
      :root {
        --cursorColor: #8B5CF6;
        --cursorColorAlt: rgba(139, 92, 246, 0.5);
        --base: #1a1a1a;
        --dotColor: #EC4899;
        --SkillGradient: linear-gradient(45deg, #EC4899, #8B5CF6);
      }
      #cursor {
        position: fixed;
        opacity: 1;
        width: 20px;
        height: 20px;
        border-radius: 100px;
        background-color: var(--cursorColor);
        box-shadow: 0 0 15px 0 var(--cursorColorAlt);
        transition: all 0.2s ease-in-out;
        pointer-events: none;
        transform: translate(-50%, -50%);
        will-change: transform;
        backface-visibility: hidden;
        z-index: 9999;
        /* Debug: */
        /* background: red !important; border: 2px solid yellow !important; */
      }
      #cursor::before {
        content: "";
        width: 0;
        aspect-ratio: 1;
        inset: 0;
        margin: auto;
        border-radius: 50%;
        position: absolute;
        transition: all 0.1s ease-in-out;
        background-color: var(--base);
      }
      #cursorView {
        visibility: hidden;
        width: 100%;
        height: 100%;
        font-size: 0;
        letter-spacing: 1px;
        background: var(--SkillGradient);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
      }
      #cursorDot {
        position: fixed;
        opacity: 1;
        width: 10px;
        height: 10px;
        border-radius: 100px;
        pointer-events: none;
        transition: all 10ms ease-out;
        background-color: var(--dotColor);
        transform: translate(-50%, -50%);
        backface-visibility: hidden;
        z-index: 9999;
        /* Debug: */
        /* background: blue !important; border: 2px solid lime !important; */
      }

      /* Apply cursor styles directly to IDs, now that Cursor-Main is on body */
      #cursor {
          position: fixed;
          opacity: 1; /* Always visible */
          width: 20px;
          height: 20px;
          border-radius: 100px;
          background-color: var(--cursorColor);
          box-shadow: 0 0 15px 0 var(--cursorColorAlt);
          transition: all 0.2s ease-in-out;
          pointer-events: none;
          transform: translate(-50%, -50%); /* Center the cursor */
          will-change: transform;
          backface-visibility: hidden;
          z-index: 9999; /* Ensure it's on top */
      }

      #cursor::before {
          content: "";
          width: 0;
          aspect-ratio: 1;
          inset: 0;
          margin: auto;
          border-radius: 50%;
          position: absolute;
          transition: all 0.1s ease-in-out;
          background-color: var(--base);
      }

      #cursorView {
          visibility: hidden;
          width: 100%;
          height: 100%;
          font-size: 0;
          letter-spacing: 1px;
          background: var(--SkillGradient);
          border-radius: 50%;
          display: flex; /* Added for centering text */
          align-items: center; /* Added for centering text */
          justify-content: center; /* Added for centering text */
          color: white; /* Text color for cursor view */
          text-transform: uppercase;
          font-weight: bold;
      }


      #cursorDot {
          position: fixed;
          opacity: 1; /* Always visible */
          width: 10px;
          height: 10px;
          border-radius: 100px;
          pointer-events: none;
          transition: all 10ms ease-out;
          background-color: var(--dotColor);
          transform: translate(-50%, -50%); /* Center the dot */
          backface-visibility: hidden;
          z-index: 9999;
      }

      /* Hover effects (now targeting IDs directly or via body.Cursor-Main) */
      body.Cursor-Main :has(a:hover, button:hover) #cursor {
          width: 4em;
          height: 4em;
          background: none;
          outline: 2px solid var(--cursorColor);
      }

      body.Cursor-Main :has(a:hover, button:hover) #cursor span {
          width: 100% !important;
      }

      body.Cursor-Main :has(a:hover, button:hover) #cursor::before {
          content: "";
          width: calc(100% - 10%);
          aspect-ratio: 1;
          inset: 0;
          margin: auto;
          border-radius: 50%;
          position: absolute;
          background-color: transparent;
      }

      body.Cursor-Main :has(.Projects_Link:hover) #cursor {
          width: 3em;
          height: 3em;
      }

      body.Cursor-Main :has(#emailCopyBtn:hover) #cursor,
      body.Cursor-Main :has(#passCopyBtn:hover) #cursor {
          width: 3em;
          height: 3em;
      }

      body.Cursor-Main :has(.Projects_Link.Misc-Link:hover) #cursor {
          width: 5em;
          height: 5em;
      }

      body.Cursor-Main :has(.Projects_Link:hover) #cursorView {
          visibility: hidden !important;
      }

      body.Cursor-Main :has(.Projects_Link:hover) #cursorDot {
          visibility: visible !important;
      }

      body.Cursor-Main :has(.Projects-MiscInfo:hover) #cursor,
      body.Cursor-Main :has(.Projects_Preview:hover) #cursor {
          width: 5em;
          height: 5em;
          background: none;
          outline: 2px solid var(--cursorColor);
      }

      body.Cursor-Main :has(.Projects-MiscInfo:hover) #cursorView,
      body.Cursor-Main :has(.Projects_Preview:hover) #cursorView {
          visibility: visible !important;
          font-size: 1.2em;
          padding-bottom: 1.15em;
      }

      body.Cursor-Main :has(.Projects-MiscInfo:hover) #cursorDot,
      body.Cursor-Main :has(.Projects_Preview:hover) #cursorDot {
          visibility: hidden !important;
      }

      /* Font Families */
      .font-inter { font-family: 'Inter', sans-serif; }
      .font-display { font-family: 'Playfair Display', serif; }

      /* Basic animations */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
      .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }

      /* Hero image rotation animations */
      @keyframes spinSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spinReverseSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }
      .animate-spin-slow { animation: spinSlow 20s linear infinite; }
      .animate-spin-reverse-slow { animation: spinReverseSlow 25s linear infinite; }

      @keyframes spinMedium {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spinFast {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }
      .animate-spin-medium { animation: spinMedium 15s linear infinite; }
      .animate-spin-fast { animation: spinFast 10s linear infinite; }
    `;
        document.head.appendChild(style);


        return () => {
            document.body.classList.remove('Cursor-Main');
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseClick);
            document.body.removeChild(cursor);
            document.body.removeChild(cursorDot);
            document.head.removeChild(style);
        };
    }, []);
};
export default useCustomCursor;