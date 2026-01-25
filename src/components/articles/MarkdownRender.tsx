import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  // Simple markdown parser - in production you'd use a library like marked or remark
  const parseMarkdown = (md: string): string => {
    let html = md;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-8 mb-4 text-foreground">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-4 text-foreground flex items-center gap-3"><span class="text-primary font-mono">#</span>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-12 mb-6 text-gradient">$1</h1>');

    // Bold and italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-muted text-primary font-mono text-sm">$1</code>');

    // Code blocks
    html = html.replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      '<pre class="bg-card border border-border rounded-lg p-4 overflow-x-auto my-6"><code class="text-sm font-mono text-foreground whitespace-pre">$2</code></pre>'
    );

    // Lists
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-4 mb-2 text-muted-foreground">$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li class="ml-4 mb-2 text-muted-foreground flex gap-2"><span class="text-primary">→</span><span>$1</span></li>');

    // Paragraphs - split by double newlines
    const blocks = html.split(/\n\n+/);
    html = blocks
      .map((block) => {
        // Don't wrap if already an HTML element
        if (block.trim().startsWith('<')) return block;
        // Wrap plain text in paragraphs
        return `<p class="text-muted-foreground mb-4 leading-relaxed">${block}</p>`;
      })
      .join('\n');

    // Clean up single newlines in paragraphs
    html = html.replace(/\n/g, ' ');

    return html;
  };

  return (
    <div
      className={cn("max-w-none space-y-4", className)}
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
}
