import Link from "next/link";
import styles from "../components/layouts/MainLayout.module.css";
import {MainLayout} from "../components/layouts/MainLayout";
import {DarkLayout} from "../components/layouts/DarkLayout";
import { ReactElement } from "react";

export default function AboutPage() {
	return (
		<>
			<h1>About Page</h1>
			<h1 className="title">
				Ir a{" "}
				<Link href="/contact" replace>
					Contact
				</Link>
			</h1>
			<p className="description">
				Get started by editing{" "}
				<code className="code">pages/about.js</code>
			</p>
		</>
	);
}

AboutPage.getLayout = function getLayout(page:JSX.Element) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
