<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Genes from './Genes.vue'
const Interfacecnt=ref<number>(0)

const sampledata = [ //warrior mage acher
    [
        {
            name: 'Shield',
            resources: [0, 0, 2, 0],  //○ △ □ ☆ 
            attributes: [0, 5, 0, -1] //damage shield health speed
        },
        {
            name: 'A',
            resources: [0, 0, 0, 2],
            attributes: [5, 0, 0, 1]

        },
        {
            name: 'Heal',
            resources: [0, 0, 0, 2],
            attributes: [0, 0, 4, -1]

        },
    ],
    [
        {
            name: 'FireBall',
            resources: [0, 2, 0, 0],
            attributes: [0, 0, 4, -1]
        },
        {
            name: 'IceBall',
            resources: [2, 0, 0, 0],
            attributes: [0, 0, 4, -1]

        },
        {
            name: 'Heal',
            resources: [0, 0, 0, 2],
            attributes: [0, 0, 4, -1]

        },
    ],
    [
        {
            name: 'FireArrow',
            resources: [1, 1, 0, 0],
            attributes: [0, 0, 4, -1]

        },
        {
            name: 'Roll',
            resources: [0, 0, 1, 0],
            attributes: [0, 0, 4, -1]

        },
        {
            name: 'Heal',
            resources: [0, 0, 0, 2],
            attributes: [0, 0, 4, -1]

        },
    ]


]
function callback(cnt:number) {
    Interfacecnt.value=cnt
}
</script>

<template>
    <div id="root">
        <Genes @changecnt="(Genescnt)=>callback(Genescnt)"></Genes>
        <div>
            <div id="skill_info"  v-for="s in sampledata[Interfacecnt]">
                <div id="skill_name">{{ s.name }}</div>
                <div id="skill_resources">{{ s.resources }}</div>
            </div>
        </div>
    </div>

</template>

<style scoped>
#root {
    width: 30vw;
    display: flex;
    flex-direction: row;
}

#skill_info {
    width: 10vw;
    height: 5vh;
    display: flex;
}

#skill_name {
    padding: 5%;
}

#skill_resources {
    padding: 5%;
}
</style>

