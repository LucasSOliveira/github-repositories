import GitHub from "@/assets/images/github.svg"
export default function Header() {
  return (
    <>
      <header className="flex container py-12 gap-4 text-white">
        <img src={GitHub} alt="GitHub" />
        <h1 className="text-2xl font-semibold">GitHub - Repositories</h1>
      </header>
    </>
  );
}
