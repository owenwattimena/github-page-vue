export const ProjectCard = {
    data() {
        return {

        }
    },
    props: ['url_img', 'url_project', 'title', 'fiture', 'technology'],
    template: `
        <div class="col-xs-12 col-sm-6 col-md-3 mb-3">
            <div class="card px-4 pt-4 pb-2">
                <img height="150" class=" card-img-top"
                    :src="url_img"
                    :alt="title">
                <div class="card-body">
                    <h5 class="card-title">
                        <a :href="url_project"
                            target="_blank"> {{title}} </a>
                        <div class="tech">
                            <i><small> {{fiture}} </small></i>
                            <h6 class="text-success"> {{technology}} </h6>
                        </div>
                    </h5>
                </div>
            </div>
        </div>
    `
}