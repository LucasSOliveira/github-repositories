import GitHub from "@/assets/images/github.svg"

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center text-white p-4">
        <div className="flex items-center gap-2">
          <img src={GitHub} alt="GitHub"  className="w-3 h-3"/>
          <p>© 2024 Lucas Oliveira All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
