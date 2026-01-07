export interface Project {
	id: number;
	title: string;
	description: string;
	tags: string[];
	image: string;
	category: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'NeoBank Dashboard',
		description: 'A comprehensive financial management platform designed for the modern digital nomad.',
		tags: ['UI/UX Design', 'User Research'],
		image: '/projects/neobank.png', // Simpan gambar di folder static/projects/
		category: 'Fintech App'
	},
	{
		id: 2,
		title: 'Luxe Furniture',
		description: 'Redefining the online furniture shopping experience with AR visualization.',
		tags: ['Web Design', 'Interaction'],
		image: '/projects/luxe.png',
		category: 'E-Commerce'
	}
];