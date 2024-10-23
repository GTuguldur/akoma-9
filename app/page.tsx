



// app/page.tsx
import Header from "@/components/header"; // Adjusted to match the file name

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-4">Welcome to My Website</h1>
        {/* Other content goes here */}
      </main>
    </div>
  );
}
