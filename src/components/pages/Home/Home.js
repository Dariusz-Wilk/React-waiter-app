import { useSelector } from 'react-redux';
import Table from '../../views/Table/Table';

const Home = () => {
	const allTables = useSelector(state => state.tables);
	console.log(allTables);
	return (
		<div>
			{allTables.map(table => (
				<Table key={table.id} {...table} />
			))}
		</div>
	);
};

export default Home;
