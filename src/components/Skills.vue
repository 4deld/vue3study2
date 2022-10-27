<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'



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


interface Props {
    Skillscnt?: number
}
const { Skillscnt = 1 } = defineProps<Props>()
</script>

<template>
    <div id="Skillsroot">
        <div id="skill_info" v-for="s in sampledata[Skillscnt]">
            <div id="skill_name">{{ s.name }}</div>
            <div id="skill_resources">{{ s.resources }}</div>
        </div>
    </div>
</template>

<style scoped>
#Skillsroot {
    display: flex;
    flex-direction: column;
}

#skill_info {
    width: 16vw;
    display: flex;
    flex-direction: row;
    font-size:1.5em;
    border:0.05em solid black;
    justify-content: center;
    margin: 3%;
    padding: 2% 0;
}

#skill_name {
    padding-right: 3%;
}

#skill_resources {
}
</style>