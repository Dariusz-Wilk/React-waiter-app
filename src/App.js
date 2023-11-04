import Home from './components/pages/Home/Home';
import SingleTable from './components/pages/SingleTable/SingleTable';
import NotFound from './components/pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path={'/table/:id'} element={<SingleTable />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	);
};

export default App;
