export const Navbar = {
    data() {
        return {
            menus: [
                {
                    link_name: 'About',
                    href: '#about',
                    class: 'about-menu'
                },
                {
                    link_name: 'Contact',
                    href: '#contact',
                    class: 'contact-menu'
                }
            ]
        }
    },
    props: ['title'],
    template: `
        <header class="position-absolute">
            <div class="container">
                <nav>
                    <div class="nav-brand">
                        <a href="#" class="text-light"> {{title}} </a>
                    </div>
                    <div class="nav-menu">
                        <ul>
                            <li v-for="menu in menus">
                                <a :href="menu.href" class="link-menu" v-bind:class="[menu.class]" > {{menu.link_name}} </a>
                            </li>
                        </ul>
                        <div class="menu-line"></div>
                    </div>
                </nav>
            </div>
        </header>
    `,
    mounted: function () {
        this._default()
    },
    methods: {
        _default: function () {
            $('.link-menu').click(function (e) {
                let targetPage = $(this).attr('href');
                let elementTarget = $(targetPage);
                // $('html').scrollTop(elementTarget.offset().top)
                $('html').animate({
                    scrollTop: elementTarget.offset().top
                }, 1000)
                e.preventDefault();
            });

            $('.about-menu').hover(function () {
                // over
                $('.menu-line').toggleClass('about-menu-line');

            }, function () {
                // out
                $('.menu-line').toggleClass('about-menu-line');
            }
            );

            $('.contact-menu').hover(function () {
                // over
                $('.menu-line').toggleClass('contact-menu-line');

            }, function () {
                // out
                $('.menu-line').toggleClass('contact-menu-line');
            });
        }
    },

}

