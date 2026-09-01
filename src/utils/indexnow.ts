export async function notifyIndexNow(urls: string[], apiKey: string): Promise<boolean> {
  if (!urls || urls.length === 0) return false;

  const payload = {
    host: 'www.4wheelspk.com',
    key: apiKey,
    keyLocation: `https://www.4wheelspk.com/${apiKey}.txt`,
    urlList: urls
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    return response.ok;
  } catch (err) {
    console.error('IndexNow notification error:', err);
    return false;
  }
}
