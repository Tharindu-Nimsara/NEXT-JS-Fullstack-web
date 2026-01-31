import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Image src="/chill-guy.png" alt="hero image" width={500} height={500}/>
    </div>
  );
}
