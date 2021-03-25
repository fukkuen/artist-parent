import {categories} from "../../taxonomy";

export const menu = [
	{
		name: "作品分類",
		href: "/",
		children: categories,
		mobile: true
	},
	{
		name: "About this project",
		href: "/team",
		mobile: false,
		children: [
			{
				href: '/about/preface',
				name: '前言(mui)'
			},
			{
				href: '/about/preface-2',
				name: '前言(hui po)'
			},
			{
				href: '/about/preface-3',
				name: '前言(stella fong)'
			}
		]
	},
	{
		name: "About rooftop",
		href: "/about/rooftop",
		mobile: false
	},
	{
		name: "How to use the site",
		href: "/about",
		mobile: false
	}
]