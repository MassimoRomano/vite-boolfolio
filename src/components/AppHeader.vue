<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between align-items-center py-3">
                <div class="logo">
                    <span class="text-light"><strong class="text-info">Massimo</strong>  Romano</span>
                </div>
                <div class="right-menu">
                    <ul class="list-unstyled d-flex gap-4">
                        <li class="fs-5 text-danger">
                            Home
                        </li>
                        <li class="fs-5 text-info">
                            About
                        </li>
                        <li class="fs-5 text-info">
                            Project
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    </header>
</template>