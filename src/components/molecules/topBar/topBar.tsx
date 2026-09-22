export function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-border-light bg-surface px-6 py-3">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="w-80 rounded-lg border border-border-light bg-cream py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-teamflow-primary"
        />
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-full p-2 text-text-muted hover:bg-soft-blue hover:text-teamflow-primary"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-teamflow-accent" />
        </button>

        <button
          type="button"
          aria-label="Profile"
          className="h-9 w-9 rounded-full bg-teamflow-primary text-sm font-semibold text-text-white hover:opacity-90"
        >
          <span className="flex h-full w-full items-center justify-center">U</span>
        </button>
      </div>
    </header>
  );
}