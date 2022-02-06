import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Board: NextPage = () => {
	const router = useRouter();
	const { board } = router.query;

	return (
		<div>
			<h1>{ board }</h1>
		</div>
	);
};

export default Board;