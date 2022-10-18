new Vue({
    el: '#app',
    data: {
        names: [],
        result: false,
        input: '',
        blue: '',
        red: ''
    },
    methods: {
        addNames: function () {
            this.names.push(this.input);
            this.input = '';
        },

        randomise: function () {
            let rand = this.shuffle(this.names);
            let half = Math.ceil(rand.length / 2);
            this.blue = rand.slice(0, half);
            this.red = rand.slice(-half);
            this.result = true;
        },
        shuffle: function (a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
    }
})