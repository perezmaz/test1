<template>
    <div>
        <h4>Test Form</h4>
        <cv-text-input :light="true" label="First Name" type="text" placeholder="Enter your first name"
            helper-text="Lorem ipsum dolor sit amet" class="bds-mb-2" :value="name">
        </cv-text-input>
        <cv-text-input :light="true" label="Last Name" type="text" placeholder="Enter your last name" class="bds-mb-2">
        </cv-text-input>
        <cv-combo-box :light="true" label="Select a role" title="Role" :auto-filter="true" :auto-highlight="true"
            :options="options" class="bds-mb-2">
        </cv-combo-box>
        <cv-button kind="primary">
            Save
        </cv-button>
    </div>
</template>

<script>
export default {
    name: 'ExampleForm',
    data() {
        return {
            options: [
                {
                    value: '0',
                    label: 'Developer',
                    name: 'developer',
                },
                {
                    value: '1',
                    label: 'Manager',
                    name: 'manager',
                },
                {
                    value: '2',
                    label: 'Product Owner',
                    name: 'po',
                },
            ]
        }
    },
    computed: {
        name() {
            const { name = '' } = this.$route.params;
            return name;
        },
    },
}
</script>