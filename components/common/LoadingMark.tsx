export function LoadingMark() {
  return (
    <>
      <style>{`
        @keyframes wl-loader-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.88); opacity: 0.7; }
        }
        @keyframes wl-loader-spin {
          to { transform: rotate(360deg); }
        }
        .wl-loader-ring {
          animation: wl-loader-spin 1.1s linear infinite;
        }
        .wl-loader-mark {
          animation: wl-loader-pulse 1.6s ease-in-out infinite;
        }
      `}</style>

      <div className="relative flex h-16 w-16 items-center justify-center">
        <span className="wl-loader-ring absolute inset-0 rounded-full border-2 border-white/10 border-t-accent" />
        <span className="hex-clip wl-loader-mark flex h-10 w-10 items-center justify-center bg-accent text-lg font-bold text-ink">
          W
        </span>
      </div>

      <span className="text-xs font-medium uppercase tracking-[0.3em] text-body-dark">
        Wavelength
      </span>
    </>
  );
}
