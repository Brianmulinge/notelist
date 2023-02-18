export default function Header() {
  return (
    <div className="h-14 border-b flex items-center justify-between px-10">
      <div>
        <h1 className="font-semibold text-2xl">Notelist</h1>
      </div>
      <div>
        <button className="border rounded-full px-6 py-2 font-semibold border-gray-800">
          Sign in
        </button>
      </div>
    </div>
  );
}
