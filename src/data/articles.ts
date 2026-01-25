import type { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "1",
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance: A Practical Guide",
    description:
      "Learn how to identify and fix performance bottlenecks in React applications with real-world examples and proven techniques.",
    date: "2025-12-15",
    readTime: "8 min read",
    tags: ["React", "Performance", "Optimization"],
    content: `
# Optimizing React Performance: A Practical Guide

Performance optimization is crucial for delivering great user experiences. After working on large-scale fintech applications, I noticed that many performance issues don’t come from complex logic, but from small inefficiencies repeated across the UI. In this article, I’ll walk through practical techniques to identify and fix performance bottlenecks in React applications.

## Understanding the Problem

Before optimizing, we need to understand what's causing performance issues. The React DevTools Profiler is one of the most effective tools for identifying unnecessary renders and expensive component updates.

### Common Performance Issues

1. **Unnecessary re-renders** – Components re-rendering when their props or state haven’t meaningfully changed  
2. **Large bundle sizes** – Too much JavaScript being loaded upfront  
3. **Expensive calculations** – Complex operations happening on every render  
4. **Memory leaks** – Subscriptions, listeners, or observers not being cleaned up  

## Solution 1: Memoization

Use \`React.memo()\`, \`useMemo()\`, and \`useCallback()\` strategically to avoid unnecessary work during rendering:

\`\`\`tsx
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item));
  }, [data]);

  return <div>{processedData}</div>;
});
\`\`\`

Memoization should be applied carefully—overusing it can make the code harder to maintain without noticeable performance gains.

## Solution 2: Code Splitting

Reducing the initial JavaScript payload is one of the most impactful optimizations. Code splitting allows loading only what the user needs:

\`\`\`tsx
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

This is especially useful for large dashboards and internal tools common in fintech platforms.

## Solution 3: Virtualization

When rendering large lists, virtualization ensures that only visible items are rendered:

\`\`\`tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  // Render only visible items
}
\`\`\`

Virtualization dramatically improves rendering performance and memory usage for data-heavy interfaces.

## Measuring Impact

Always measure performance before and after optimizations. Tools like Lighthouse and Core Web Vitals help validate improvements locally. In production environments, I often complement these metrics with real user monitoring solutions such as Datadog RUM to catch issues that only appear under real traffic.

## Conclusion

Performance optimization is an iterative process. Focus on the biggest bottlenecks first, measure your changes, and continuously monitor real user data to ensure long-term performance improvements.
`,
  },
  {
    id: "2",
    slug: "typescript-best-practices-2025",
    title: "TypeScript Best Practices in 2025",
    description:
      "Modern TypeScript patterns and practices for building maintainable applications, from strict typing to advanced generics.",
    date: "2025-11-20",
    readTime: "10 min read",
    tags: ["TypeScript", "Best Practices", "Architecture"],
    content: `
# TypeScript Best Practices in 2025

TypeScript has evolved significantly over the years and has become a fundamental tool for building reliable front-end applications. Based on my experience maintaining large and long-lived codebases, these practices help keep projects scalable, readable, and safe over time.

## Enable Strict Mode

Always start with strict mode enabled in your \`tsconfig.json\`. It forces you to handle edge cases early and prevents entire classes of runtime bugs:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
\`\`\`

Strict mode may feel verbose at first, but it pays off quickly as the project grows.

## Use Discriminated Unions

Discriminated unions are a powerful way to model state explicitly and avoid invalid combinations:

\`\`\`tsx
type Result<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: string }
  | { status: 'loading' };

function handleResult<T>(result: Result<T>) {
  switch (result.status) {
    case 'success':
      return result.data;
    case 'error':
      throw new Error(result.error);
    case 'loading':
      return null;
  }
}
\`\`\`

This pattern is especially useful for async data fetching and complex UI states.

## Prefer Interfaces for Objects

Use interfaces for object shapes and types for unions and primitives:

\`\`\`tsx
interface User {
  id: string;
  name: string;
  email: string;
}

type UserRole = 'admin' | 'user' | 'guest';
type UserOrNull = User | null;
\`\`\`

Interfaces are easier to extend and communicate intent more clearly in shared codebases.

## Utility Types

Leverage built-in utility types to reduce duplication and improve expressiveness:

\`\`\`tsx
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserWithoutEmail = Omit<User, 'email'>;
type UserIdAndName = Pick<User, 'id' | 'name'>;
\`\`\`

These utilities help evolve models safely without rewriting types.

## Const Assertions

Use \`as const\` to preserve literal types and improve inference:

\`\`\`tsx
const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
} as const;

type Route = typeof ROUTES[keyof typeof ROUTES];
// '/' | '/about' | '/contact'
\`\`\`

This is especially useful for routing, configuration objects, and design tokens.

## Conclusion

Strong typing is not about writing more code—it’s about making illegal states unrepresentable. These practices help catch errors at compile time, improve developer experience, and keep applications maintainable as they scale.
`,
  },
];
