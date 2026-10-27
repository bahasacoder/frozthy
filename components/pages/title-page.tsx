import Link from 'next/link';

export function TitlePage ({ title, textTitle }: { title: string, textTitle?: string }) {

    return (
		<div className="w-full">
			<div className="title-bar">
				<div className="page-title-wrap text-center">
					<h2 className="page-title Uppercase">{title}</h2>
					<h3 className="text-xl italic font-light">{textTitle}</h3>
				</div>
			</div>
		</div>
    )
}