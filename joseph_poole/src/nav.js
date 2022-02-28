function Nav() {
	return (
		<div className="nav ">
			<div className="fixed bg-slate-50 p-2 
			rounded-br-2xl border-b-2 border-r-2 border-emerald-400
			text-emerald-400 flex">
				<li className="list-none flex space-x-2 font-medium">
					{/* <ul><a href="">Projects</a></ul> */}
					<ul><a href="https://www.linkedin.com/in/joseph-poole-1ba5a1198/">LinkedIn</a></ul>
					<ul><a href="https://drive.google.com/file/d/1HjMMmRRkCQNT4uMojPR8cbZeosyYkvJW/view?usp=sharing">Resume</a></ul>
					<ul><a href="mailto:joseph@josephpoole.com">Contact</a></ul>
					{/* <ul><a href="">Blog</a></ul> */}
				</li>
			</div>
		</div>
	)
}

export default Nav;