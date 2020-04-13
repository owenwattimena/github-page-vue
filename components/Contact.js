export const Contact = {
    data() {
        return {
            footer: 'Copyright by Wentox Wtt'
        }
    },
    props: ['footer'],
    template: `
        <div class="contact" id="contact" style="background-color: #FC6D4B; transition: 2s;">
            <div class="container pt-4">
                <h1 class="text-light text-center">Contact</h1>
                <div class="bottom-line bg-light"></div>
                <slot></slot>
                <footer class=" text-light text-center pb-3">
                    <p> {{footer}} </p>
                </footer>
            </div>
        </div>
    `
}