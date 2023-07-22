import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
	const [interns, setinterns] = useState([]);
	useEffect(() => {
		const url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/interns';
		console.log(process.env.REACT_APP_BACKEND_URL);
		console.log('url: ', url);
		axios
			.get(url, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(function (res) {
				console.log(res);
				const sort_arr = [...res.data].sort((a, b) => a.no - b.no);
				setinterns(sort_arr);
			})
			.catch((err) => {
				console.log(err);
			});
		return () => {};
	}, []);

	return (
		<div className='App' style={{ display: 'flex', justifyContent: 'center' }}>
			<table>
				<tr>
					<th>No</th>
					<th>Name</th>
					<th>Year of birth</th>
					<th>Major</th>
					<th>University</th>
				</tr>
				{interns.map((intern) => (
					<tr key={intern.id}>
						<td>{intern.no}</td>
						<td>{intern.name}</td>
						<td>{intern.yearOfBirth}</td>
						<td>{intern.major}</td>
						<td>{intern.university}</td>
					</tr>
				))}
			</table>
		</div>
	);
}

export default App;
