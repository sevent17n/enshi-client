import { useQuery } from "react-query"

// import { IMenuItem } from "@/components/Layout/Navigation/MenuContainer/menu.interface"
import { getGenreUrl } from "../../../../../config/url.config"

export const usePopularGenres = () => {
	// const queryData = useQuery(
	// 	"popular genres menu",
	// 	() => GenreService.getAll(),
	// 	{
	// 		select: ({ data }) =>
	// 			data
	// 				.filter((genre: any) => genre.icon)
	// 				.map(
	// 					(genre: any) =>
	// 						({
	// 							icon: genre.icon,
	// 							link: getGenreUrl(genre.slug),
	// 							title: genre.name
	// 						} as any)
	// 				)
	// 				.splice(0, 4)
	// 	}
	// )
	return null
}
