<template>
    <div id="app" style="padding: 15px">
        <div>
            <w-button size="small" type="warning">小型</w-button>
            <w-button size="medium" type="warning">中型</w-button>
            <w-button size="big" type="warning">大型</w-button>
        </div>

        <div style="margin-top: 15px">
            <w-button>默认按钮</w-button>
            <w-button type="normal">百搭按钮</w-button>
            <w-button type="warning">警告按钮</w-button>
        </div>

        <div style="margin-top: 15px">
            <w-button type="primary">主题按钮</w-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>
