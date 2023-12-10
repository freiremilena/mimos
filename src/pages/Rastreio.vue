<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <Navbar />

        <div class=" rastreio-components d-flex flex-column align-items-center justify-content-center" style="height: 90vh">
            <NovoPacote />
            <div class="d-flex" style="align-self: self-start;">
                <div class="btn-group mb-3">
                    <button @click="showTransitTable"
                        :class="{ 'btn-primary': activeTab === 'transit', 'btn-secondary': activeTab !== 'transit' }"
                        class="btn custom-tab">
                        Em Trânsito
                    </button>
                    <button @click="showDeliveredTable"
                        :class="{ 'btn-primary': activeTab === 'delivered', 'btn-secondary': activeTab !== 'delivered' }"
                        class="btn custom-tab">
                        Entregues
                    </button>
                </div>
            </div>

            <ObjectTable :objects="activeTab === 'transit' ? transitObjects : deliveredObjects" />
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ObjectTable from '../components/Table.vue';
import NovoPacote from '../components/NovoPacote.vue';

export default defineComponent({
    components: {
        ObjectTable,
        NovoPacote
    },
    data() {
        return {
            activeTab: 'transit' as 'transit' | 'delivered',
            transitObjects: [
                { id: 1, codigo: '001', nome: 'Objeto A', status: 'Saiu para entrega', prazoEntrega: '01-01-2023' },
            ],
            deliveredObjects: [
                { id: 3, codigo: '003', nome: 'Objeto C', status: 'Entregue', prazoEntrega: '01-01-2023' },
            ],
        };
    },
    methods: {
        showTransitTable() {
            this.activeTab = 'transit';
        },
        showDeliveredTable() {
            this.activeTab = 'delivered';
        },
    },
});
</script>

<style scoped>
.custom-tab {
    background-color: #F2F2F2;
    color: #C3C3C3;
    border: 2px solid #E4E4E7;
}

.custom-tab.btn-primary {
    background-color: #fff;
    border-color: #C5C5D2;
    color: #0C1F81;
    font-weight: 600;
}

.rastreio-components {
    padding: 0 24rem;
}

@media (max-width: 1500px) {

    .rastreio-components {
        padding: 0 20rem;
    }
}
</style>