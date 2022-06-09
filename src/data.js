const projects = [
    {
        id: 'p1',
        title: 'Anilux',
        images: [
            'anilux_gallery/anilux1.png',
            'anilux_gallery/anilux2.png',
            'anilux_gallery/anilux3.png',
            'anilux_gallery/anilux4.png',
            'anilux_gallery/anilux5.png',
            'anilux_gallery/anilux6.png',
            'anilux_gallery/anilux7.png',
            'anilux_gallery/anilux8.png',
            'anilux_gallery/anilux9.png',
            'anilux_gallery/anilux10.png',
            'anilux_gallery/anilux11.png',
            'anilux_gallery/anilux12.png',
            'anilux_gallery/anilux13.png',
        ],
        technologies: ['Java', 'Spring', 'MySQL', 'Hibernate', 'HTML5', 'CSS3', 'JS', 'Thymeleaf'],

        descriptions: [
            `Anilux is an anime videos streaming website which uses cloud provider to store its pictures as well as videos.
        It interacts with users, collect data about what they likes and produces recommendations based on their likings.`,

            `Users have the ability to store videos in their watch later list, to like certain anime, to post a comment on certain episode 
        and to watch those episodes themselves.`,

            `There are several user roles. An admin can promote / demote other users depending on their status.
        Admins and moderators can also post new animes create seasons for them and fill them up with episodes.`
        ],

        link: 'https://github.com/ste4o26/softuni_anilux_project',
        dates: {
            start: '02.2021',
            end: '03.2021'
        }
    },

    {
        id: 'p2',
        title: 'Cookviser',
        images: [
            'cookviser_gallery/cookviser1.png',
            'cookviser_gallery/cookviser2.png',
            'cookviser_gallery/cookviser3.png',
            'cookviser_gallery/cookviser4.png',
            'cookviser_gallery/cookviser5.png',
            'cookviser_gallery/cookviser6.png',
            'cookviser_gallery/cookviser7.png',
            'cookviser_gallery/cookviser8.png',
            'cookviser_gallery/cookviser9.png',
            'cookviser_gallery/cookviser10.png',
            'cookviser_gallery/cookviser11.png',
            'cookviser_gallery/cookviser12.png',
            'cookviser_gallery/cookviser13.png',
            'cookviser_gallery/cookviser14.png',
            'cookviser_gallery/cookviser15.png',
            'cookviser_gallery/cookviser16.png',
            'cookviser_gallery/cookviser17.png',
            'cookviser_gallery/cookviser18.png',
            'cookviser_gallery/cookviser19.png',
            'cookviser_gallery/cookviser20.png'
        ],
        technologies: ['Angular', 'HTML5', 'CSS3', 'JS', 'Java', 'Spring', 'MySQL', 'Hibernate'],

        descriptions: [
            `Cookviser is a recipe storage website(e.g. cook-book).
            It uses cloud provider to store and display its assets.`,

            `Functionality includes user authentication, updating user profile,
            posting and deleting recipes, rate other people recipes.
            All the recources are loaded via infinite scroll.`,

            `Users can use the website without logging in but for read only purposes.
            Once authenticated they are have authorities to create
            or delete their own recepies.`,

            `Moderator functionality includes deleting other people recipes and creating new cuisines, while the admin can also
            promote / demote other people.`
        ],

        link: 'https://github.com/ste4o26/cookviser',
        dates: {
            start: '06.2021',
            end: '07.2021'
        }
    }
];

export default projects;
