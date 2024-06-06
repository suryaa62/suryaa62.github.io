import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu"

const navbarItems : {name: string, link: string}[] = [
	{name: "Blog" , link: "/blog"},
	{name: "Projects" , link: "/projects"}
]

const Navbar = () => {
	return (
		<NavigationMenu className="mt-2 ">
			<div className="flex justify-between min-w-max w-screen	">
			<NavigationMenuList>
			<NavigationMenuLink className={navigationMenuTriggerStyle()}>
			<NavigationMenuItem>Suryakant Agrawal</NavigationMenuItem>
			</NavigationMenuLink>
			</NavigationMenuList>
			<NavigationMenuList>
				{navbarItems.map((item) => (<NavigationMenuLink className={navigationMenuTriggerStyle()}><NavigationMenuItem> {item.name}</NavigationMenuItem> </NavigationMenuLink>))}
			</NavigationMenuList>
			</div>
		</NavigationMenu>
	)
}


export default Navbar