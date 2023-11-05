import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import styles from '../SingleTable/SingleTable.module.scss';
import { getTablesById } from '../../../redux/tablesReducer';

const SingleTable = () => {
	const { id } = useParams();
	const table = useSelector(state => getTablesById(state, id));

	if (!table) return <Navigate to={'/'} />;

	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Body className="p-4">
					<Card.Title className="my-3 display-4">{table.tableNum}</Card.Title>
					<Card.Text className="d-flex align-items-center">
						<p className="me-3 my-0 ">
							<span className={styles.bold}>Status:</span> {table.status}
						</p>
					</Card.Text>
					<Card.Text className="d-flex align-items-center">
						<p className="me-3 my-0">
							<span className={styles.bold}>People:</span> {table.peopleAmount}/
							{table.maxPeopleAmount}
						</p>
					</Card.Text>
					<Card.Text className="d-flex align-items-center">
						<p className="me-3 my-0">
							<span className={styles.bold}>Bill: </span>${table.bill}
						</p>
					</Card.Text>

					<Button variant="primary">Edit</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SingleTable;
