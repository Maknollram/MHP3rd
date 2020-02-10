export default {
    name: "App",
    template: `
        <div>
            <section class="container coluna center">
                <div class="center">
                    <img class="logo" src="./src/imgs/mhp3rd.png">
                </div>
            </section>
            <div class="container coluna largura300" id="app">
                <div class="container linha center" v-for="prin in principal">
                    <img class="tamanhoImg" v-bind:src="prin.icone">
                    <router-link class="fake-link" v-bind:to="prin.caminho">{{prin.nome}}</router-link>
                </div>
            </div>
        </div>
    `,
    props:[
        
    ],
    data(){
        return {
            principal:[
                {nome: 'Armaduras', icone: './src/imgs/itens/icon_armor_body.png', caminho: '/armaduras'},
                {nome: 'Armas', icone: './src/imgs/itens/icon_long_sword.png', caminho: '/armas'},
                {nome: 'Decorações', icone: './src/imgs/itens/decoracoes.png', caminho: '/decoracoes'},
                {nome: 'Habilidades', icone: './src/imgs/itens/habilidades.png', caminho: '/habilidades'},
                {nome: 'Itens', icone: './src/imgs/itens/itens.png', caminho: '/itens'},
                {nome: 'Mapas', icone: './src/imgs/itens/icon_map_icon.png', caminho: '/mapas'},
                {nome: 'Monstros', icone: './src/imgs/itens/monstros.png', caminho: '/monstros'},
                {nome: 'Quests', icone: './src/imgs/itens/quests.png', caminho: '/quests'},
                {nome: 'Sobre', icone: './src/imgs/itens/icon_mantle.png', caminho: '/sobre'}
            ]
        }
    },
    watch:{
        
    },
    computed:{
        
    },
    methods:{

    }
}
