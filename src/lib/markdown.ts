export async function loadMarkdownContent(filename: string): Promise<string> {
  try {
    const module = await import(`../content/articles/${filename}?raw`);
    return module.default;
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '';
  }
}
