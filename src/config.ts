import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "Привет, пуш",
		invitation: "Я уехал, поэтому вместо меня предлагаю тебе питсу 👉👈🥺",
		yesText: "Да",
		noText: "Нет",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: '"Нет" - не вариант😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "Тогда выбирай 😄",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
