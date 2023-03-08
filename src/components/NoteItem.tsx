import { TrashIcon } from "@heroicons/react/24/outline";
import { trpc } from "../utils/trpc";

export default function NoteItem({
  note,
}: {
  note: {
    id: string;
    title: string;
    content: string;
  };
}) {
  const { mutate: deleteNote } = trpc.note.deleteNote.useMutation({});

  const handleDelete = async () => {
    const result = await deleteNote(note.id);
    window.location.reload();
  };

  return (
    <div className="border rounded-lg h-full w-full p-4">
      <div className="">
        <h1 className="font-semibold text-lg py-2">{note.title}</h1>
        <h1>{note.content}</h1>
      </div>
      <div className="flex justify-end p-2">
        <button onClick={handleDelete}>
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
