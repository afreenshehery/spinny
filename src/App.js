import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");


	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=20`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}


	
	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				{/* <Sidebar 
					topAnime={topAnime} /> */}
				<MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
				
					animeList={animeList} />
			</div>
			
		</div>
	);
}

export default App;
