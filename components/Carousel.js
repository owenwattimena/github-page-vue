export const Carousel = {
    data() {
        return {
            img_classes: [
                'img2',
                'img1',
                'img3',
                'img4',
            ],
            img_urls: [
                {
                    url: 'https://owenwattimena.github.io/asset/img/owen1.JPG',
                    color: '#C8291F'
                },
                {
                    url: 'https://owenwattimena.github.io/asset/img/owen2.JPG',
                    color: '#FC6D4B'
                },
                {
                    url: 'https://owenwattimena.github.io/asset/img/owen6.jpg',
                    color: '#8bc0f4'
                },
                {
                    url: 'https://owenwattimena.github.io/asset/img/owen7.jpg',
                    color: '#5c9846'
                },
            ],
            quotes: {
                text: '"If you can\'t make it good, at least make it look good."',
                writer: 'Bill Gates'
            },

        }
    },
    template: `
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">

                    <li v-for="img_url, index in img_urls" data-target="#carouselExampleIndicators" :data-slide-to="index" :class="[index == 0 ? 'active' : '' ]"></li>

                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item" v-for="img_url, index in img_urls"  :class="[index == 0 ? 'active' : '' ]" :style="{'background-image' : 'url(' + img_url.url + ')'}">
                        <!--
                        <div :class="img_class"></div>
                        <img class="d-block w-100" :src="img_url.url" :alt="index">
                        -->
                        <div :data-index="index"></div>
                    </div>
                </div>
                
            </div>

            
            <div class="container">
                <div class="quotes position-absolute text-light text-right">
                    <p>
                        {{quotes.text}}
                    </p>
                    <span>~ {{quotes.writer}}</span>
                </div>
            </div>
            <div class="opacity"></div>
        </div>
        `,
    mounted: function () {
        this.contact_color_animate()
    },
    methods: {
        contact_color_animate: function (color) {
            let data = this.img_urls;
            $('#contact').css('background-color', data[0].color);
            $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
                // do something…

                let index = $('.active div').attr('data-index');
                $('#contact').css('background-color', data[index].color);
                $('#contact').css('transition', '2s');

            })
        }
    }
}