export async function loadMarkdownContent(filename: string): Promise<string> {
  try {
    const response = await fetch(`/articles/${filename}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '';
  }
}
