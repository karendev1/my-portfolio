import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  const [html, setHtml] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processMarkdown = async () => {
      if (!content) return;
      
      setIsProcessing(true);
      const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
          theme: "github-dark",
          keepBackground: false,
        })
        .use(rehypeStringify)
        .process(content);

      setHtml(String(result));
      setIsProcessing(false);
    };

    processMarkdown();
  }, [content]);

  if (isProcessing) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="text-sm text-muted-foreground animate-pulse">
          Processing content...
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
