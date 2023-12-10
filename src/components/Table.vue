<!-- eslint-disable vue/multi-word-component-names -->
<!-- ObjectTable.vue -->
<template>
    <div class="d-flex justify-content-center align-items-center w-100">
        <table class="table">
            <thead>
                <tr>
                    <th class="table-header">Código do Objeto</th>
                    <th class="table-header">Nome do Objeto</th>
                    <th class="table-header">Status do Objeto</th>
                    <th class="table-header">Prazo de Entrega</th>
                    <th class="table-header"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="object in objects" :key="object.id" class="table-row">
                    <td>{{ object.codigo }}</td>
                    <td>{{ object.nome }}</td>
                    <td>{{ object.status }}</td>
                    <td>{{ object.prazoEntrega }}</td>
                    <td>
                        <span @click="editObject(object)" class="action-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none">
                                <mask id="mask0_626_260" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_626_260)">
                                    <path
                                        d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                                        fill="black" />
                                </g>
                            </svg>
                        </span>
                        <span @click="deleteObject(object)" class="action-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none">
                                <mask id="mask0_626_263" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_626_263)">
                                    <path
                                        d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                        fill="black" />
                                </g>
                            </svg>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script lang="ts">
import { ref } from 'vue';
interface ObjectItem {
    id: number;
    codigo: string;
    nome: string;
    status: string;
    prazoEntrega: string;
}

export default {
    props: {
        objects: {
            type: Array as () => ObjectItem[],
            required: true,
        },
    },
    methods: {
        editObject(object: ObjectItem) {
            console.log('Editar objeto:', object);
        },
        deleteObject(object: ObjectItem) {
            console.log('Deletar objeto:', object);
        },
    },
};
</script>
  
<style scoped>
.table-header {
    color: #9291A1;
    background-color: #F2F2F2;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

}

thead {
    background-color: red;
    color: #9291A1;
}

.action-icon {
    cursor: pointer;
    margin-right: 10px;
    color: #000;
}

.action-icon:hover {
    color: #333;
}
</style>