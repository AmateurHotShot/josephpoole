import React from 'react';

export default function MainPage() {
	return (
	<div className="page">
		<div className='bg-slate-100 py-40'>
			<div className="logo-name flex flex-col flex-none justify-center font-bold text-5xl text-center text-emerald-500">
				<h1 className='pb-5 text-8xl'>👔</h1>
				<h1 className='py-3'>Joseph</h1>
				<h1 className="bg-emerald-500 text-slate-900 w-60 self-center">Poole</h1>
				<h2 className='pt-5 text-xl'>Hey. I'm Joe, and I study <br /> <span className="text-sky-300">business strategy</span> and <span className="text-orange-300">web development</span></h2>
			</div>
		</div>
		<div className="show bg-slate-200 h-80 text-emerald-400 p-3">
			<h1 className='font-semibold text-3xl underline underline-offset-1 text-center'>Wait a second, who ARE you?</h1>
			<p className='p-3'>Allow me to introduce myself: I’m a podcaster, a business student, and a programmer. I’m also a husband. Here are some of my skills:</p>

			<ul className='p-3'>
				<li>🐍 Python programming</li>
				<li>💾 Data Analysis</li>
				<li>🎧 Podcast Producer and Host</li>
				<li>🎬 Video Producer</li>
			</ul>
		</div>
	</div>
);}
