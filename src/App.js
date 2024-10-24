import "./App.css";
import videoFile from "./assets/this.mp4";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<video width="600" controls>
					<source src={videoFile} type="video/mp4" />
				</video>
			</header>
		</div>
	);
}

export default App;
