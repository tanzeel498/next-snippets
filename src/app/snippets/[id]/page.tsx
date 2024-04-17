import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <div className="flex justify-between m-4 items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="space-x-4">
          <Link
            className="p-2 border rounded"
            href={`/snippets/${snippet.id}/edit`}
          >
            Edit
          </Link>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>

      <pre className="p-3 border rounded bg-gray-200 border-gray-300">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
