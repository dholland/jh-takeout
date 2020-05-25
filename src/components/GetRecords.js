import axios from 'axios';

const Records = async () => {
	const res = await axios.get(
		'https://api.airtable.com/v0/appmXcO9crXbuzabT/Resturants?api_key=keyMkvcVnca6Qd4ZK'
	);
	const records = res.data.records;

	return records;
};

export default Records;
