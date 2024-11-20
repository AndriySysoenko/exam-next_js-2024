import Image from "next/image";
import styles from "./page.module.css";
import SearchForm from "./components/search/SearchForm";

export default function Home() {
  return (
    <div>
        <SearchForm/>
    </div>
  );
}
