import { useState } from 'preact/hooks';

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div class="flex gap-3 justify-center items-center">
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        class="border rounded-md px-4 py-2 text-xl border-cyan-400"
      >
        +
      </button>
      <span class="text-cyan-400">{counter}</span>
      <button
        onClick={() => setCounter((prev) => prev - 1)}
        class="border rounded-md px-4 py-2 text-xl border-cyan-400"
      >
        -
      </button>
    </div>
  );
}
