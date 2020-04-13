export const IdCard = {
    data() {
        return {

        }
    },
    props: ['card_url'],
    template: `
        <div class="id-card">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <img :src="card_url" alt="">
                </div>
            </div>
        </div>
    `
}