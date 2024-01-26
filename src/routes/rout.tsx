export default function Root() {
    return (
      <>
        import axios, { AxiosResponse } from 'axios';

interface Movie {
    
    id: number;
    title: string;
    // Aggiungi altri campi se necessario
}

const apiUrl = "https://api.example.com/movies";

// Funzione per ottenere l'elenco dei film
async function getMovies(): Promise<Movie[] | null> {
    try {

        const response: AxiosResponse<Movie[]> = await axios.get(apiUrl);

        // Verifica se la richiesta ha avuto successo (codice di stato 200)
        if (response.status === 200) {

            return response.data;
        } else {
            console.error(`Errore nella richiesta: ${response.status}`);
            return null;
        }
    } catch (error) {
        console.error(`Errore durante la richiesta: ${error.message}`);
        return null;
    }
}

// Funzione per ottenere i dettagli di un film specifico
async function getDetailMovie(movieId: number): Promise<Movie | null> {
    const url = `${apiUrl}/${movieId}`;

    try {
        const response: AxiosResponse<Movie> = await axios.get(url);

        // Verifica se la richiesta ha avuto successo (codice di stato 200)
        if (response.status === 200) {

            return response.data;
        } else {
            console.error(`Errore nella richiesta: ${response.status}`);
            return null;
        }
    } catch (error) {
        console.error(`Errore durante la richiesta: ${error.message}`);
        return null;
    }
}

main();

        <div id="detail"></div>
      </>
    );
  }
