import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>spænende link</Link>
        </li>
      </ul>
    </nav>
  );
}
