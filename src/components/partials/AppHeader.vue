<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between align-items-center py-4">
                <div class="logo">
                    <span class="text-light fs-3"><strong class="text-light">Massimo</strong>  Romano</span>
                </div>
                <div class="right-menu">
                    <ul class="list-unstyled d-flex gap-4">
                        <li class="fs-5">
                            <router-link :to="{name:'Home'}">Home</router-link>
                        </li>
                        <li class="fs-5">
                            <router-link :to="{name:'About'}">About</router-link>
                        </li>
                        <li class="fs-5">
                            <router-link :to="{name:'Project'}">Projects</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>