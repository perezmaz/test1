<template>
    <div>
        <h4>Test Application</h4>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Id cursus metus aliquam eleifend mi in. Nunc lobortis mattis aliquam faucibus purus in.
            Viverra aliquet eget sit amet. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Posuere
            lorem ipsum dolor sit amet consectetur adipiscing. Est pellentesque elit ullamcorper dignissim cras
            tincidunt lobortis. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Lorem
            donec massa sapien faucibus et. Eget arcu dictum varius duis at.
        </p>
        <cv-button kind="primary" class="bds-self-align-center" @click="goTo">
            Continue
        </cv-button>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
    methods: {
        goTo() {
            this.$router.push('/form')
        }
    }
}
</script>