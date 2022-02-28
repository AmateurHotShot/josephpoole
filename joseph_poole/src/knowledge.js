import React from 'react';
import programs from './data/programs';

export default function Knowledge() {
	return (
	<div className="page">
		<div className='bg-slate-100 py-40'>

		</div>
		<div className="show bg-slate-200 h-80 text-emerald-400 p-3">
			<h1 className='font-semibold text-3xl underline underline-offset-1 text-center'>Knowledge?</h1>

			<div className='p-3 text-blue-700 grid grid-cols-4'>
				{programs.map((e, index) => {
					return (
					<div key={index}>
						<img src={e.img_src} alt={e.name} />
						<div>{e.name}</div>
					</div>
					)
				})}
			</div>
		</div>
	</div>
);}
