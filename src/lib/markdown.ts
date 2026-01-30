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

const WORDS_PER_MINUTE = 150;

export function calculateReadingTime(markdown: string) {
  const text = markdown
    .replace(/[#_*>\-\[\]\(\)`]/g, "")
    .replace(/\n/g, " ");

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);

  return minutes;
}
