<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { InterfaceVariable } from '@/stores/interfacevariable';
import { storeToRefs } from "pinia";
const store=InterfaceVariable()
const {GeneCnt, CurrentVideo,Routeraddress}=storeToRefs(store);

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

function router(sn:number) {
    if (Routeraddress.value == '/') {
        Routeraddress.value = '/skillvideo'
    }
    else {
        CurrentVideo.value=sn
        Routeraddress.value = '/'
    }
}

//watch skillscnt, s.number pinia로 해서 skillvideo에서 video 실행

</script>

<template>
    <div id="Skillsroot">
        <div v-for="s in sampledata[GeneCnt]">
            <RouterLink :to=Routeraddress @click="router(s.number)" id="skill_info">
                <div id="skill_name">{{ s.name }}</div>
                <div id="skill_resources">{{ s.resources }}</div>
                <div>{{s.number}}</div>
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