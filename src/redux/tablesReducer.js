//selectors

export const getTablesById = ({ tables }, id) =>
	tables.find(table => table.id === id);

export const getTables = ({ tables }) => tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;

const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators

export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });

export const fetchTables = () => {
	return dispatch => {
		fetch('http://localhost:3131/api/tables')
			.then(res => res.json())
			.then(data => dispatch(updateTables(data)));
	};
};

export const editTableRequest = (data, id) => {
	return dispatch => {
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};

		fetch(`http://localhost:3131/api/tables/${id}`, options).then(() =>
			dispatch(editTable(data))
		);
	};
};

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
		case UPDATE_TABLES:
			return [...action.payload];
		case EDIT_TABLE:
			return statePart.map(table =>
				table.id === action.payload.id ? { ...table, ...action.payload } : table
			);
		default:
			return statePart;
	}
};

export default tablesReducer;
