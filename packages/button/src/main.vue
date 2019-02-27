<template>
    <button :class="classStyle">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'WButton',
        props: {
            size: {
                type: String,
                default: 'medium'
            },
            type: {
                type: String,
                default: 'default'
            }
        },
        computed: {
            classStyle() {
                return ['w-button', 'w-button_' + this.size, 'w-button_' + this.type];
            }
        }
    };
</script>