import { useSelector } from 'react-redux';
import Table from '../../views/Table/Table';
import { getTables } from '../../../redux/tablesReducer';

const Home = () => {
	const allTables = useSelector(getTables);
	return (
		<div>
			{allTables.map(table => (
				<Table key={table.id} {...table} />
			))}
		</div>
	);
};

export default Home;
