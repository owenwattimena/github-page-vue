export const ButtonScrollUp = {
    data() {
        return {

        }
    },
    mounted: function () {
        $(window).on('scroll', function () {
            var yAxis = this.scrollY
            if (yAxis >= 273) {
                $('.btn-scroll-up').removeClass('hide-btn-scroll-up');
            }
            else {
                $('.btn-scroll-up').addClass('hide-btn-scroll-up');
            }
        })

        $('#btn-scroll-up').click(function () {
            $('html').animate({
                scrollTop: $('html').offset().top
            }, 1000);
        });
    },
    template: `
        <button type="button" id="btn-scroll-up" class="btn btn-scroll-up position-fixed hide-btn-scroll-up">
            <i class="fa fa-chevron-up"></i>
        </button>
    `
}