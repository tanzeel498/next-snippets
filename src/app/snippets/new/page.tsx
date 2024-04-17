'use client';

import { createSnippet } from '@/actions';
import { useFormState } from 'react-dom';

export default function SnippetCreatePage() {
  const [state, formAction] = useFormState(createSnippet, { message: '' });

  return (
    <form action={formAction}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="w-full p-2 border rounded"
          />
        </div>

        {state.message ? (
          <div className="my-2 p-2 rounded bg-red-200 border border-red-400">
            {state.message}
          </div>
        ) : null}

        <button type="submit" className="p-2 rounded bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
