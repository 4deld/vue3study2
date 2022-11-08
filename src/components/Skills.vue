<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const skillbtnrouter = ref('/')


const sampledata = [ //warrior mage acher
    [
        {
            name: 'Shield',
            resources: [0, 0, 2, 0],  //○ △ □ ☆ 
            attributes: [0, 5, 0, -1], //damage shield health speed
            number:0
        },
        {
            name: 'A',
            resources: [0, 0, 0, 2],
            attributes: [5, 0, 0, 1],
            number:1

        },
        {
            name: 'Heal',
            resources: [0, 0, 0, 2],
            attributes: [0, 0, 4, -1],
            number:2


        },
    ],
    [
        {
            name: 'FireBall',
            resources: [0, 2, 0, 0],
            attributes: [0, 0, 4, -1],
            number:0

        },
        {
            name: 'IceBall',
            resources: [2, 0, 0, 0],
            attributes: [0, 0, 4, -1],
            number:1

        },
        {
            name: 'Heal',
            resources: [0, 0, 0, 2],
            attributes: [0, 0, 4, -1],
            number:2

        },
    ],
    [
        {
            name: 'FireArrow',
            resources: [1, 1, 0, 0],
            attributes: [0, 0, 4, -1],
            number:0


        },
        {
            name: 'Roll',
            resources: [0, 0, 1, 0],
            attributes: [0, 0, 4, -1],
            number:1

        },
        {
            name: 'Heal',
            resources: [0, 0, 0, 2],
            attributes: [0, 0, 4, -1],
            number:2

        },
    ]


]


interface Props {
    Skillscnt?: number
}
const { Skillscnt = 1 } = defineProps<Props>()

function router() {
    if (skillbtnrouter.value == '/') {
        skillbtnrouter.value = '/skillvideo'
    }
    else {
        skillbtnrouter.value = '/'
    }
}
//watch skillcnt, s.number pinia로
</script>

<template>
    <div id="Skillsroot">
        <div v-for="s in sampledata[Skillscnt]">
            <RouterLink :to=skillbtnrouter @click="router()" id="skill_info">
                <div id="skill_name">{{ s.name }}</div>
                <div id="skill_resources">{{ s.resources }}</div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
#Skillsroot {
    display: flex;
    flex-direction: column;
}

#skill_info {
    text-decoration: none;
    color: black;
    width: 16vw;
    display: flex;
    flex-direction: row;
    font-size: 1.5em;
    border: 0.05em solid black;
    justify-content: center;
    margin: 3%;
    padding: 2% 0;
}

#skill_name {
    padding-right: 3%;
}

#skill_resources {}
</style>