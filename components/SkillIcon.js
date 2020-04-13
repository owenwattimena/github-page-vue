export const SkillIcon = {
    // name: 'SkillIcon',
    data() {
        return {

        }
    },
    props: ['url_icon', 'title'],

    template: `
        <div class="col-3 col-md-2 col-lg-1">
            <img :src="url_icon" data-toggle="tooltip" data-placement="top" :title="title">
        </div>
    `
}