export const Card = {
    data() {
        return {

        }
    },
    props: ['icon', 'title', 'descriptions'],
    template: `
        <div class="col-lg mb-3">
            <div class="card">
                <div class="card-body">
                    <div class="center text-center my-3">
                        <img :src="icon" :alt="title" width="130" height="100" />
                    </div>
                    <h5 class="text-center education-title"> {{title}} </h5>
                    <div class="card-info">
                        <ul>
                            <li v-for="description, index in descriptions">
                                <i class="fa fa-star"></i>
                                <p>
                                    {{description}}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
}