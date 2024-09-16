import "./styles/styles.scss";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
  <h1>こんにちは</h1>
  <Image src="/images/next.svg"
  width={150}
  height={60}
  alt="Next.js" />

  <p><Link href="about">ポートフォリオ</Link></p>
  <p>1+1={1+1}</p>
  </>
  )
};