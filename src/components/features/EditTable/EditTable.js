import { Card, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTablesById } from '../../../redux/tablesReducer';
import styles from './EditTable.module.scss';
import { getAllStatuses } from '../../../redux/statusesReducer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { editTableRequest } from '../../../redux/tablesReducer';

const EditTable = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const table = useSelector(state => getTablesById(state, id));
	const allStatuses = useSelector(getAllStatuses);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		status: table.status,
		peopleAmount: table.peopleAmount,
		maxPeopleAmount: table.maxPeopleAmount,
		bill: table.bill,
		id,
	});

	const handleSubmit = () => {
		dispatch(editTableRequest(formData, id));
		navigate('/');
	};
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body className="p-4">
				<Card.Title className="my-3 display-4">{table.tableNum}</Card.Title>

				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-0 d-flex align-items-center">
						<Form.Label className={'me-3 my-3 ' + styles.bold}>
							Status:
						</Form.Label>
						<Form.Select
							onChange={e =>
								setFormData(prevState => ({
									...prevState,
									status: e.target.value,
									bill: 0,
								}))
							}
							value={formData.status}
							aria-label="Default select example">
							{allStatuses.map(status => (
								<option key={status.id} value={status.status}>
									{status.status}
								</option>
							))}
						</Form.Select>
					</Form.Group>

					<Form.Group className="mb-0 d-flex align-items-center">
						<Form.Label className={'me-3 my-3 ' + styles.bold}>
							People:
						</Form.Label>
						<Form.Control
							type="text"
							style={{ width: '3rem' }}
							value={formData.peopleAmount}
							onChange={e =>
								setFormData(prevState => ({
									...prevState,
									peopleAmount: e.target.value,
								}))
							}
						/>
						/
						<Form.Control
							type="text"
							style={{ width: '3rem' }}
							value={formData.maxPeopleAmount}
							onChange={e =>
								setFormData(prevState => ({
									...prevState,
									maxPeopleAmount: e.target.value,
								}))
							}
						/>
					</Form.Group>
					<Form.Group
						className={`mb-3 ${
							formData.status !== 'Busy' ? 'd-none' : 'd-flex '
						} align-items-center `}>
						<Form.Label className={'me-3 my-3 ' + styles.bold}>
							Bill:
						</Form.Label>
						$
						<Form.Control
							type="text"
							style={{ width: '3rem' }}
							value={formData.bill}
							onChange={e =>
								setFormData(prevState => ({
									...prevState,
									bill: e.target.value,
								}))
							}
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Update
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default EditTable;
