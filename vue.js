new Vue({
    el: '#app',
    data: {
        articles: []
    },
    created() {
        this.fetchNews();
    },
    methods: {
        fetchNews() {
            const apiKey = 'd12d7df03751461fb74259321ba117a4';
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
            axios.get(url)
                .then(response => {
                    this.articles = response.data.articles;
                })
                .catch(error => {
                    console.error('Error al obtener las noticias:', error);
                });
        }
    }
});
