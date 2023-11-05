import Home from './components/pages/Home/Home';
import SingleTable from './components/pages/SingleTable/SingleTable';
import NotFound from './components/pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { fetchTables } from './redux/tablesReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => dispatch(fetchTables()), [dispatch]);
	return (
		<Container>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path={'/table/:id'} element={<SingleTable />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Container>
	);
};

export default App;
