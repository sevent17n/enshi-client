import Link from "next/link"
import { FC, Fragment } from "react"

import { IContentList } from "@/screens/singleMovie/content/ContentList/content.interface"

import styles from "./ContentList.module.scss"

const ContentList: FC<IContentList> = ({ links, name }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}</div>
			<div className={styles.links}>
				{links.map((link, index) => (
					<Fragment key={index}>
						<a>{link.title}</a>
						{index + 1 !== links.length ? ", " : ""}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
