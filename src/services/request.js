// universal-fetch.js
const isServer = typeof window === 'undefined';
const BASE_URL = isServer ? 'https://study.duyiedu.com' : '';

export async function fetchJSON(url, options = {}) {
    const fullUrl = BASE_URL + url;

    const res = await fetch(fullUrl, {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {})
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
        credentials: 'include', // 如果你需要 cookie
        ...options
    });

    if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Fetch failed: ${res.status} ${res.statusText} - ${errText}`);
    }

    return res.json();
}
