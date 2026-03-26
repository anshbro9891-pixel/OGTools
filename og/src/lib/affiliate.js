const STORAGE_KEY = 'ogtools-affiliate-clicks';

export function trackAffiliateClick(tool) {
  try {
    const current = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
    const previous = current[tool.slug] || { count: 0 };

    current[tool.slug] = {
      name: tool.name,
      count: previous.count + 1,
      lastClickedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // Ignore storage errors so outbound clicks still work.
  }
}

export function readAffiliateClicks(slug) {
  try {
    const current = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
    return current[slug]?.count || 0;
  } catch {
    return 0;
  }
}
