import Link from 'next/link';

export function BreadCrumbContainer () {

    return (
		<nav className="w-screen">
			<ol className="breadcrumb px-4 py-8 rounded-md flex">
				<li className="breadcrumb-item inline pl-0 pr-4 py-4"><Link href="#">Home</Link></li>
				<li className="breadcrumb-item inline pl-0 pr-4 py-4 before:content-['>']"><Link href="#">Page</Link></li>
			</ol>
		</nav>
    )
}
