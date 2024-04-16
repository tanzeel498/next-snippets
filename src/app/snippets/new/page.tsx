import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // this needs to be a server action
    'use server';

    // check the user's inputs and make sure they are valid
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    // create a new snippet in the database
    const snippet = await db.snippet.create({
      data: { title, code },
    });
    console.log(snippet);

    // redirect to home page
    redirect('/');
  }

  return (
    <form action={createSnippet}>
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

        <button type="submit" className="p-2 rounded bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
