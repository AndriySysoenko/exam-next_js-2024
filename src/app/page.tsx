import styles from "./page.module.css";
import MoviesList from "./components/movies/MoviesList";
import {getMovies} from "./services/api.service";

export default async function Home () {
    const {results: movies} = await getMovies(2);
  return (
    <div className={styles.basicBlock}>
        <main className={styles.mainBlock}><MoviesList movies={movies}/></main>
    </div>
  );
}
