/*
Partendo dallo starter pack, rifare lo slider ma questa volta usando Vue.
*/



const { createApp } = Vue;

createApp({
    data() {
        return {
            activeImg: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Spiderman',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },{
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },{
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },{
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },{
                    image: 'img/05.webp',
                    title: 'Avengers',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                }
            ],
        };
    },
    methods: {
        prevBtn() {
            this.activeImg--;
            if (this.activeImg < 0) {
                this.activeImg = this.slides.length - 1;
            }
        },
        nextBtn() {
            this.activeImg++;
            if (this.activeImg > this.slides.length - 1) {
                this.activeImg = 0;
            }
        },
    },
}).mount("#app");
