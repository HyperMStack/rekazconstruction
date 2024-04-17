export function ContactIconButton({ icon, label }) {
  return (
    <button
      aria-label={label}
      className="inline-flex items-center justify-center p-2 border-2 border-transparent text-gray-700 bg-white rounded-full hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      {icon}
    </button>
  );
}
