export default {
    name: "Itens",
    template: `
        <div>
            <section class="container coluna center">
                <div class="container row-wrap center" >
                    <div v-for="m in menu">
                        <router-link v-bind:to="m.caminho" v-bind:title="m.nome"><img class="tamanhoImgMenu" v-bind:src="m.icone"/></router-link>
                    </div>
                </div>
                <label class="fonte30 nomeMonstro">Itens</label>
            </section>
        </div>
    `,
    props:[
        
    ],
    data(){
        return {
            menu:[
                {nome: 'Página Inicial', icone: './src/imgs/itens/boomerang.png', caminho: '/'},
                {nome: 'Armaduras', icone: './src/imgs/itens/icon_armor_body.png', caminho: '/armaduras'},
                {nome: 'Armas', icone: './src/imgs/itens/icon_long_sword.png', caminho: '/armas'},
                {nome: 'Decorações', icone: './src/imgs/itens/decoracoes.png', caminho: '/decoracoes'},
                {nome: 'Habilidades', icone: './src/imgs/itens/habilidades.png', caminho: '/habilidades'},
                {nome: 'Itens', icone: './src/imgs/itens/itens.png', caminho: '/itens'},
                {nome: 'Mapas', icone: './src/imgs/itens/icon_map_icon.png', caminho: '/mapas'},
                {nome: 'Monstros', icone: './src/imgs/itens/monstros.png', caminho: '/monstros'},
                {nome: 'Quests', icone: './src/imgs/itens/quests.png', caminho: '/quests'}
            ],
        }
    },
    watch:{
        
    },
    computed:{
        
    },
    methods:{

    }
}
